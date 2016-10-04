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
            var optionButton = new OptionButton(res.oyster, questionOptions[i]);
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
        
        return true;
    },
    optionButtonTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            var selection = GD.currentLevel.checkAnswer(sender.getOption());
            // animations and feedback depending on the correctnes of the answer
            
            if (GD.currentLevel.isLevelCompleted()) {
                GD.loadNextLevel();
                
                this.configureTimedLevel();
            }
            
            this.resetQuestion();
        }
    },
    configureTimedLevel: function () {
        if (GD.currentLevel.isTimedLevel()) {
            cc.log("schedule update");
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
    var scene = new cc.Scene();
    scene.addChild(new OystersLayer());
    
    return scene;
};