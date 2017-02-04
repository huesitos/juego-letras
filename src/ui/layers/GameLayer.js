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
        
//        this.answerLabel = new cc.LabelTTF(
//            this.activity.getRightOption(),
//            _b_getFontName(fonts.gameFont),
//            60
//        );
//        this.answerLabel.setPosition(cc.p(size.width / 2, size.height * .75));
//        this.addChild(this.answerLabel);
        
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
        
        this.scheduleUpdate();
        
        return true;
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
            
            this.getParent().hudLayer.setVisible(true);
            
            // check if level is timed and set an update
            this.configureTimedActivity();
            
            // play current right answer audio
            this.activity.playOptionAudio();
        };
        
        this.optionButtons.forEach(function (btn) {
            btn.hideLabel();
        });
        
        // TODO
        // calculate the delay or set it, no magic numbers...
        if (this.customIntroAnimation) {
            this.runAction(new cc.Sequence(
                new cc.DelayTime(1),
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
                new cc.DelayTime(1),
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
                cc.audioEngine.playEffect(audioRes.success);
                sender.onClicked();
                sender.hideLabel();
                
                var moveUp = new cc.MoveBy(0.05, cc.p(0, 10));
                var moveCenter = new cc.MoveBy(0.05, cc.p(0, -10));
                var moveDown = new cc.MoveBy(0.05, cc.p(0, -10));
                
                var jumpAction = new cc.Sequence(moveUp, moveCenter, moveDown, moveUp);
                
                sender.runAction(jumpAction);
            } else {
                cc.audioEngine.playEffect(audioRes.failure);
                var moveRight = new cc.MoveBy(0.05, cc.p(10, 0));
                var moveCenter = new cc.MoveBy(0.05, cc.p(-10, 0));
                var moveLeft = new cc.MoveBy(0.05, cc.p(-10, 0));
                
                var jerkAction = new cc.Sequence(moveRight, moveCenter, moveLeft, moveRight);
                
                sender.runAction(jerkAction);
            }
            
            var delay = new cc.DelayTime(1);

            function checkAnswer() {
                cc.eventManager.resumeTarget(this, true);
                this.activity.checkAnswer(sender.getOption());
            };
            var actionFunc = new cc.CallFunc(checkAnswer, this);

            this.runAction(new cc.Sequence(delay, actionFunc));
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
                            -optionButton.x,
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
//            this.answerLabel.setString(this.activity.getRightOption());
            this.activity.playOptionAudio();
            this.configureTimedActivity();
        } else {
            // end activity
            var effectID = cc.audioEngine.playEffect(audioRes.cheering);
            
            var earnedStars = this.activity.getEarnedStars();
            GD.completeActivity(earnedStars);
            
            // show starts based on score
            var starsUnlocked = [
                earnedStars >= 1,
                earnedStars >= 2,
                earnedStars == 3
            ];
            var star1Res = starsUnlocked[0] ? uiImgRes.starOnB_png : uiImgRes.starOffB_png;
            var star2Res = starsUnlocked[1] ? uiImgRes.starOnB_png : uiImgRes.starOffB_png;
            var star3Res = starsUnlocked[2] ? uiImgRes.starOnB_png : uiImgRes.starOffB_png;

            var star1 = new cc.Sprite(star1Res);
            var star2 = new cc.Sprite(star2Res);
            var star3 = new cc.Sprite(star3Res);
            
            var height = this.size.height * .8,
                gap = 50;
            
            star1.attr({
                x: this.size.width / 2 - star1.width - gap,
                y: height,
                scale: 0
            });
            star2.attr({
                x: this.size.width / 2,
                y: height,
                scale: 0
            });
            star3.attr({
                x: this.size.width / 2 + star1.width + gap,
                y: height,
                scale: 0
            });

            this.addChild(star1);
            this.addChild(star2);
            this.addChild(star3);
            
            var starAnimation = new cc.ScaleTo(0.25, 1);
            
            star1.runAction(new cc.EaseBackOut(starAnimation));
            star2.runAction(
                new cc.Sequence(
                    new cc.DelayTime(0.25),
                    new cc.EaseBackOut(starAnimation.clone())
                )
            );
            star3.runAction(
                new cc.Sequence(
                    new cc.DelayTime(.5),
                    new cc.EaseBackOut(starAnimation.clone())
                )
            );
            
            if (starsUnlocked[0] || starsUnlocked[1] || starsUnlocked[2]) {
                var particles = Effects.createSimpleParticles(
                    star2.getPosition()
                );
                this.addChild(particles);
            }      
            
            for (var i = 0; i < this.optionButtons.length; i++) {
                var optionButton = this.optionButtons[i];

                // animate button
                optionButton.runAction(new cc.RepeatForever(
                    new cc.Sequence(
                        new cc.CallFunc(optionButton.changeToNormal, optionButton),
                        new cc.DelayTime(0.5),
                        new cc.CallFunc(optionButton.onClicked, optionButton),
                        new cc.DelayTime(0.5)
                    )
                ));
                optionButton.hideLabel();
            }
            
            this.runAction(new cc.Sequence(
                new cc.DelayTime(5.5),
                new cc.CallFunc(function () {
                    cc.audioEngine.stopEffect(effectID);
                    cc.director.runScene(ActivityMenuLayer.getScene(GameState.openedMapID));
                })
            ));
        }
    },
    tick: function (dt) {
        this.activity.tick(dt);

        if (this.activity.hasTimerFinished()) {
            this.unscheduleAllCallbacks();
            
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