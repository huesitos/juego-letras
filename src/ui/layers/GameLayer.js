var GameLayer = cc.Layer.extend({
    customIntroAnimation: null,
    customIntroAnimationDelay: 0,
    ctor: function (optionSrcs, optionsPos, gap, activity, direction) {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        this.activity = activity;
        // update the activity question
        this.activity.changeQuestion();
        
        this.size = cc.winSize;
        this.gap = gap;
        this.direction = direction;
        
        /////////////////////////////
        // 2. load question options
        this.optionButtons = [];
        var questionOptions = this.activity.getQuestionOptions();
        
        this.answerLabel = new cc.LabelTTF(
            this.activity.getRightOption(),
            _b_getFontName(fonts.gameFont),
            60
        );
        this.answerLabel.setPosition(
            cc.p(this.size.width / 2, this.size.height * .75)
        );
        this.addChild(this.answerLabel);
        
        for (var i = 0; i < questionOptions.length; i++) {
            var optionButton = new OptionButton(
                optionSrcs.initState,
                optionSrcs.clickedState,
                questionOptions[i]
            );
            var pos = cc.p(optionsPos.xPos, optionsPos.yPos[i]);
            
            optionButton.setPosition(pos);
            optionButton.setAnchorPoint(cc.p(0.5, 0));
            optionButton.setUserData({initPos: pos});
            
            optionButton.addTouchEventListener(this.optionButtonTouch, this);
            this.optionButtons.push(optionButton);
            this.addChild(optionButton);
            
            optionsPos.xPos += optionButton.getContentSize().width / 2 + this.gap;
        }
        
        /////////////////////////////
        // 3. register events        
        // question checked and no transition
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: QUESTION_CHECKED,
            callback: this.resetQuestion.bind(this)
        }, this);
        
        // run activity completed animation
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: ACTIVITY_COMPLETED,
            callback: this.onActivityCompleted.bind(this)
        }, this);
        
        this.scheduleUpdate();
        
        return true;
    },
    optionButtonTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {            
            var selection = this.activity.getRightOption() === sender.getOption();
            cc.eventManager.pauseTarget(this, true);
            this.unscheduleAllCallbacks();
            
            // stop buttons animations (for timed activities)
            if (this.activity.isTimedActivity()) {
                this.optionButtons.forEach(function (btn) {
                    btn.stopAllActions();
                });
            }
            
            // animations and feedback depending on the correctnes of the answer
            if (selection) {
                cc.audioEngine.stopAllEffects();
                audioManager.playEffect(audioRes.success);
                sender.onClicked();
                
                GameState.addStimulusSuccessRecord(
                    sender.getOption()
                );
                
                var moveUp = new cc.MoveBy(0.05, cc.p(0, 10));
                var moveCenter = new cc.MoveBy(0.05, cc.p(0, -10));
                var moveDown = new cc.MoveBy(0.05, cc.p(0, -10));
                
                var jumpAction = new cc.Sequence(moveUp, moveCenter, moveDown, moveUp);
                
                sender.runAction(jumpAction);
            } else {
                cc.audioEngine.stopAllEffects();
                audioManager.playEffect(audioRes.failure);
                
                GameState.addStimulusTryRecord(
                    sender.getOption()
                );
                
                var moveRight = new cc.MoveBy(0.05, cc.p(10, 0));
                var moveCenter = new cc.MoveBy(0.05, cc.p(-10, 0));
                var moveLeft = new cc.MoveBy(0.05, cc.p(-10, 0));
                
                var jerkAction = new cc.Sequence(moveRight, moveCenter, moveLeft, moveRight);
                
                sender.runAction(jerkAction);
            }
            // show the energy crystal
            this.animateEnergyCrystal(selection);
            
            var delay = new cc.DelayTime(1);

            function checkAnswer() {
                cc.eventManager.resumeTarget(this, true);
                this.activity.checkAnswer(sender.getOption());
            };
            var actionFunc = new cc.CallFunc(checkAnswer, this);

            this.runAction(new cc.Sequence(delay, actionFunc));
        }
    },
    animateEnergyCrystal: function (correct) {
        // create an energy sprite at the position of the correct option
        var energyCrystal = new cc.Sprite(uiImgRes.energyCrystal_png);
        var pos = this.optionButtons.filter(function (btn) {
            if (this.activity.getRightOption() === btn.getOption()) {
                return btn;
            }
        }.bind(this))[0].getCrystalPosition();
        energyCrystal.setPosition(pos);
        this.addChild(energyCrystal);
        
        if (correct) {
            energyCrystal.runAction(new cc.Sequence(
                new cc.RotateTo(0.15, -10),
                new cc.RotateTo(0.15, 10),
                new cc.RotateTo(0.15, 0),
                new cc.DelayTime(.25),
                new cc.MoveTo(
                    0.25,
                    cc.p(this.size.width * .04, this.size.height / 2)
                ),
                new cc.RemoveSelf(true)
            ));
        } else {
            energyCrystal.runAction(new cc.Sequence(
                new cc.RotateTo(0.25, -10),
                new cc.RotateTo(0.25, 10),
                new cc.RotateTo(0.25, 0),
                new cc.RemoveSelf(true)
            ));
        }
    },
    beginActivity: function () {
        cc.eventManager.pauseTarget(this, true);
        
        var turnClicked = function () {
            this.onClicked();
        };
        
        var returnToNormal = function () {
            this.optionButtons.forEach(function (button) {
                button.changeToNormal();
                button.showLabel();
            });
        };
        
        var startActivity = function () {
            cc.eventManager.resumeTarget(this, true);
            
            this.getParent().hudLayer.runIntroAnimation();
            
            // check if level is timed and set an update
            this.configureTimedActivity();
            
            // play current right answer audio
            this.activity.playOptionAudio();
        };
        
        this.optionButtons.forEach(function (btn) {
            btn.hideLabel();
        });
        
        if (this.customIntroAnimation) {
            this.runAction(new cc.Sequence(
                new cc.DelayTime(config.sceneTransitionSpeed),
                new cc.CallFunc(this.customIntroAnimation, this),
                new cc.DelayTime(this.customIntroAnimationDelay),
                new cc.CallFunc(turnClicked, this.optionButtons[0]),
                new cc.DelayTime(0.5),
                new cc.CallFunc(turnClicked, this.optionButtons[1]),
                new cc.DelayTime(0.5),
                new cc.CallFunc(turnClicked, this.optionButtons[2]),
                new cc.DelayTime(0.5),
                new cc.CallFunc(returnToNormal, this),
                new cc.DelayTime(0.25),
                new cc.CallFunc(startActivity, this)
            ));
        } else {
            this.runAction(new cc.Sequence(
                new cc.DelayTime(config.sceneTransitionSpeed),
                new cc.CallFunc(turnClicked, this.optionButtons[0]),
                new cc.DelayTime(0.5),
                new cc.CallFunc(turnClicked, this.optionButtons[1]),
                new cc.DelayTime(0.5),
                new cc.CallFunc(turnClicked, this.optionButtons[2]),
                new cc.DelayTime(0.5),
                new cc.CallFunc(returnToNormal, this),
                new cc.DelayTime(0.25),
                new cc.CallFunc(startActivity, this)
            ));
        }
    },
    configureTimedActivity: function () {
        if (this.activity.isTimedActivity()) {
            this.schedule(this.tick, 1);
            
            for (var o in this.optionButtons) {
                var optionButton = this.optionButtons[o];
                
                // depending of the direction, move option
                // out of the bottom of the screen
                // or out of the right side of the screen
                var moveAction;
                if (this.direction === DOWN_DIRECTION) {
                    moveAction = new cc.MoveTo(
                        this.activity.getTotalTime(),
                        cc.p(
                            optionButton.x,
                            -optionButton.height
                        )
                    );
                } else {
                    moveAction = new cc.MoveTo(
                        this.activity.getTotalTime(),
                        cc.p(
                            this.size.width + optionButton.x,
                            optionButton.height
                        )
                    );
                }
                
                optionButton.runAction(moveAction);
            }
        }
    },
    resetQuestion: function () {
        for (var o in this.optionButtons) {
            this.optionButtons[o].stopAllActions();
        }
        
        // reset position and image
        for (var o in this.optionButtons) {
            var optionButton = this.optionButtons[o];
            var initPos = optionButton.getUserData().initPos;

            optionButton.setPosition(initPos);
        }
        
        if (!this.activity.isActivityCompleted()) {
            var questionOptions = this.activity.getQuestionOptions();

            for (var i = 0; i < this.optionButtons.length; i++) {
                var optionButton = this.optionButtons[i];

                //reset answer
                optionButton.setOption(questionOptions[i]);
                optionButton.changeToNormal();
                optionButton.showLabel();
            }
            this.answerLabel.setString(this.activity.getRightOption());
            this.activity.playOptionAudio();
            this.configureTimedActivity();
        }
    },
    onActivityCompleted: function (event) {
        // end activity
        audioManager.playEffect(audioRes.cheering);

        var earnedStars = this.activity.getEarnedStars();
        GD.completeActivity(earnedStars);
        
        // show starts based on score
        var starsUnlocked = [
            earnedStars >= 1,
            earnedStars >= 2,
            earnedStars == 3
        ];
        
        var starsRibbon = new StarsRibbon(
            starsUnlocked,
            StarsRibbon.BIG_STAR
        );
        starsRibbon.setPosition(cc.p(
            this.size.width / 2, this.size.height * .83
        ));
        this.addChild(starsRibbon);
        starsRibbon.runStarsAnimation();

        for (var i = 0; i < this.optionButtons.length; i++) {
            var optionButton = this.optionButtons[i];

            // animate button
            optionButton.runAction(new cc.Repeat(
                new cc.Sequence(
                    new cc.CallFunc(optionButton.changeToNormal, optionButton),
                    new cc.DelayTime(0.5),
                    new cc.CallFunc(optionButton.onClicked, optionButton),
                    new cc.DelayTime(0.5)
                ), 10
            ));
            optionButton.hideLabel();
        }
        
        this.runAction(new cc.Sequence(
            new cc.DelayTime(5.5),
            new cc.CallFunc(function () {
                cc.audioEngine.stopAllEffects();
                
                if (GD.gameCompleted) {
                    cc.director.runScene(
                        new cc.TransitionFade(
                            .8, new CreditsScene()
                        )
                    );
                } else {
                    cc.director.runScene(
                        new cc.TransitionFade(
                            .8,
                            ActivityMenuLayer.getScene(GameState.getOpenedMapID())
                        )
                    );
                }
            })
        ));
    },
    tick: function (dt) {
        this.activity.tick(dt);

        if (this.activity.hasTimerFinished()) {
            this.unscheduleAllCallbacks();
            cc.audioEngine.stopAllEffects();
            audioManager.playEffect(audioRes.failure);
            
            // hide all the labels
            this.optionButtons.forEach(function (btn) {
                btn.hideLabel();
            });
                        
            // short pause
            this.activity.skipQuestion();
            cc.eventManager.pauseTarget(this, true);
            
            var delay = new cc.DelayTime(1);

            function nextQuestion() {
                cc.eventManager.resumeTarget(this, true);
                
                this.resetQuestion();
            };
            var actionFunc = new cc.CallFunc(nextQuestion, this);

            this.runAction(new cc.Sequence(delay, actionFunc));
        }
    },
    pause: function () {
        this._super();
        
        for (var i = 0; i < this.optionButtons.length; i++) {
            this.optionButtons[i].pause();
        }
    },
    resume: function () {
        this._super();
        
        for (var i = 0; i < this.optionButtons.length; i++) {
            this.optionButtons[i].resume();
        }
    }
});