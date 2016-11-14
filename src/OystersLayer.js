var OystersLayer = GameLayer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        var size = cc.winSize;
        
        var waterBackground = new cc.Sprite(seaImgRes.seaWater_png);
        waterBackground.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(waterBackground);
        
        this.background = new cc.Sprite(seaImgRes.seaFloor_png);
        this.background.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(this.background);

        /////////////////////////////
        // 2. load question options
        this.optionButtons = [];
        var questionOptions = GD.currentLevel.getQuestionOptions();
        
        this.answerLabel = new cc.LabelTTF(GD.currentLevel.getRightOption(), "Arial", 50);
        this.answerLabel.setPosition(cc.p(size.width / 2, size.height * .75));
        this.addChild(this.answerLabel);
        
        this.optionInitStateSrc = seaImgRes.oysterClosed_png;
        this.optionClickedStateSrc = seaImgRes.oysterOpened_png;
        
        var xPos = size.width * .25;
        var yPos = [100, 140, 80];
        for (var i = 0; i < questionOptions.length; i++) {
            var optionButton = new OptionButton(this.optionInitStateSrc, questionOptions[i]);
            var pos = cc.p(xPos, yPos[i]);
            
            optionButton.setPosition(pos);
            optionButton.setAnchorPoint(cc.p(0.5, 0));
            optionButton.setUserData({initPos: pos});
            
            optionButton.addTouchEventListener(this.optionButtonTouch, this);
            this.optionButtons.push(optionButton);
            this.addChild(optionButton);
            
            xPos += optionButton.getContentSize().width / 2 + size.width * .14;
        }
        cc.log(this.optionButtons);
        
        /////////////////////////////
        // 3. check if level is timed and set an update
        this.configureTimedActivity();
        
        /////////////////////////////
        // 4. play current right answer audio
        GD.currentLevel.playOptionAudio();
        
        /////////////////////////////
        // 5. register events
        // activity completed
        var aCompleted = function (event) {
            cc.eventManager.pauseTarget(this, true);
            cc.log("transition to new activity scene");
            cc.director.runScene(GD.getNextScene());
        };
        
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: ACTIVITY_FINISHED_EVENT,
            callback: aCompleted.bind(this)
        }, this);
        
        // level completed
        var lCompleted = function (event) {
            // ascend transition
            cc.eventManager.pauseTarget(this, true);
            cc.log("transition to new level activity scene");
            cc.director.runScene(GD.getNextScene());
        };
        
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: LEVEL_COMPLETED_EVENT,
            callback: lCompleted.bind(this)
        }, this);
        
        // question checked and no transition
        var qChecked = function (event) {
            this.resetQuestion();
        };
        
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: QUESTION_CHECKED,
            callback: qChecked.bind(this)
        }, this);
        
        return true;
    },
    optionButtonTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            var selection = GD.currentLevel.getRightOption() === sender.getOption();
            cc.eventManager.pauseTarget(this, true);
            this.unscheduleAllCallbacks();
            
            // animations and feedback depending on the correctnes of the answer
            if (selection) {
                cc.audioEngine.playEffect(audioRes.success);
                cc.log(this.optionClickedStateSrc);
                sender.loadTextures(this.optionClickedStateSrc, this.optionClickedStateSrc);
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
                GD.currentLevel.checkAnswer(sender.getOption());
            };
            var actionFunc = new cc.CallFunc(checkAnswer, this);

            this.runAction(new cc.Sequence(delay, actionFunc));
        }
    },
    configureTimedActivity: function () {
        if (GD.currentLevel.isTimedActivity()) {
            this.schedule(this.tick, 1);
            
            for (var o in this.optionButtons) {
                var optionButton = this.optionButtons[o];
                
                // move out of the screen
                var moveAction = new cc.MoveTo(
                    GD.currentLevel.getTotalTime(),
                    cc.p(
                        optionButton.x,
                        cc.winSize.height + optionButton.height / 2
                    )
                );
                
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
            optionButton.loadTextures(this.optionInitStateSrc, this.optionInitStateSrc);
            optionButton.showLabel();
        }
        
        var questionOptions = GD.currentLevel.getQuestionOptions();
        
        for (var i = 0; i < this.optionButtons.length; i++) {
            var optionButton = this.optionButtons[i];
            
            //reset answer
            optionButton.setOption(questionOptions[i]);
        }
        
        this.answerLabel.setString(GD.currentLevel.getRightOption());
        GD.currentLevel.playOptionAudio();
        this.configureTimedActivity();
    },
    tick: function (dt) {
        GD.currentLevel.tick(dt);
        cc.log("tick");

        if (GD.currentLevel.hasTimerFinished()) {
            this.unscheduleAllCallbacks();
                        
            // short pause
            GD.currentLevel.skipQuestion();
            cc.eventManager.pauseTarget(this, true);
            
            var delay = new cc.DelayTime(1);

            function nextQuestion() {
                cc.log("resuming target");
                cc.eventManager.resumeTarget(this, true);
                
                cc.log("OL: setting new values")
                this.resetQuestion();
            };
            var actionFunc = new cc.CallFunc(nextQuestion, this);

            this.runAction(new cc.Sequence(delay, actionFunc));
        }
    }
});

OystersLayer.getScene = function () {
    var scene = new GameScene();
    var layer = new OystersLayer();
    layer.setName("gameLayer");
    
    scene.addChild(layer);
    
    return scene;
};