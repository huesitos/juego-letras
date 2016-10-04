var OystersLayer = cc.Layer.extend({
    optionButtons: [],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        var size = cc.winSize;

        /////////////////////////////
        // 2. load question options
        var questionOptions = GD.currentLevel.getQuestionOptions();
        
        this.labels = [];
        
        var pos = size.width * .20;
        for (var i = 0; i < questionOptions.length; i++) {
            var optionButton = new OptionButton(imgRes.oyster, questionOptions[i]);
            optionButton.setPosition(
                cc.p(
                    pos,
                    200
                )
            );
            pos += optionButton.getContentSize().width + size.width * .15;
            optionButton.addTouchEventListener(this.optionButtonTouch, this);
            this.optionButtons.push(optionButton);
            
            this.addChild(optionButton);
        }
        
        /////////////////////////////
        // 3. check if level is timed and set an update
        this.configureTimedLevel();
        
        /////////////////////////////
        // 4. play current right answer audio
        GD.currentLevel.playOptionAudio();
        
        return true;
    },
    optionButtonTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            var selection = GD.currentLevel.checkAnswer(sender.getOption());
            // animations and feedback depending on the correctnes of the answer
            if (selection) {
                cc.audioEngine.playEffect(audioRes.success);
                var moveUp = new cc.MoveBy(0.05, cc.p(0, 10));
                var moveCenter = new cc.MoveTo(0.05, sender.getPosition());
                var moveDown = new cc.MoveBy(0.05, cc.p(0, -10));
                
                var jumpAction = new cc.Sequence(moveUp, moveCenter, moveDown, moveCenter);
                
                sender.runAction(jumpAction);
            } else {
                cc.audioEngine.playEffect(audioRes.failure);
                var moveRight = new cc.MoveBy(0.05, cc.p(10, 0));
                var moveCenter = new cc.MoveTo(0.05, sender.getPosition());
                var moveLeft = new cc.MoveBy(0.05, cc.p(-10, 0));
                
                var jerkAction = new cc.Sequence(moveRight, moveCenter, moveLeft, moveCenter);
                
                sender.runAction(jerkAction);
            }
            
            // short pause
            cc.eventManager.pauseTarget(this, true);
            var delay = new cc.DelayTime(1);
            
            var nextQuestion = function () {
                cc.eventManager.resumeTarget(this, true);
                if (GD.currentLevel.isLevelCompleted()) {
                    GD.loadNextLevel();

                    this.configureTimedLevel();
                }

                this.resetQuestion();
            }
            var resumeTarget = new cc.CallFunc(nextQuestion, this);
            
            this.runAction(new cc.Sequence(delay, resumeTarget));
        }
    },
    changeFuelBar: function (event) {
        cc.log("event dispatched")
    },
    configureTimedLevel: function () {
        if (GD.currentLevel.isTimedLevel()) {
            this.schedule(this.tick, 1);
        } else {
            this.unschedule(this.tick);
        }
    },
    resetQuestion: function () {
        var questionOptions = GD.currentLevel.getQuestionOptions();
        
        for (var i = 0; i < this.optionButtons.length; i++) {
            var optionButton = this.optionButtons[i];
            
            //reset answer
            optionButton.setOption(questionOptions[i]);
        }
        
        GD.currentLevel.playOptionAudio();
    },
    tick: function (dt) {
        GD.currentLevel.tick(dt);
        cc.log("tick");

        if (GD.currentLevel.hasTimerFinished()) {
            GD.currentLevel.skipQuestion();
            this.resetQuestion();
        }
    }
});

OystersLayer.getScene = function () {
    var scene = new GameScene();
    scene.addChild(new OystersLayer());
    
    return scene;
};