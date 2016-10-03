var OystersLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        var size = cc.winSize;

        /////////////////////////////
        // 2. load question options
        var questionOptions = GD.currentLevel.getQuestionOptions();
        cc.log(questionOptions);
        
        this.labels = [];
        
        for (var i = 0; i < questionOptions.length; i++) {
            var option = new ccui.Button(res.oyster);
            option.addTouchEventListener(this.optionButtonTouch, this);
            option.setPosition(
                cc.p(
                    (size.width / (questionOptions.length)) * i + 150, 
                    200
                )
            );
            option.setTag(i);
            option.setUserData({answer: questionOptions[i]});
            
            var label = new cc.LabelTTF(questionOptions[i], "arial", 60);
            label.setPosition(
                cc.p(option.width/2, option.height/2)
            );
            label.setColor(cc.color.BLACK);
            option.addChild(label);
            
            this.labels.push(label);
            
            this.addChild(option);
        }
        
        if (GD.currentLevel.isTimedLevel()) {
            cc.log("schedule update");
            this.scheduleUpdate(this.tick, 1);
        }
        
        return true;
    },
    optionButtonTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            var selection = GD.currentLevel.checkAnswer(sender.getUserData().answer);
            // animations and feedback depending on the correctnes of the answer
            if (GD.currentLevel.isLevelCompleted()) {
                GD.loadNextLevel();
                
                if (GD.currentLevel.isTimedLevel()) {
                    cc.log("schedule update");
                    this.schedule(this.tick, 1);
                }
            }
            
            this.resetQuestion();
        }
    },
    resetQuestion: function () {
        var questionOptions = GD.currentLevel.getQuestionOptions();
        cc.log(questionOptions);
        
        for (var i = 0; i < questionOptions.length; i++) {
            var optionButton = this.getChildByTag(i);
            
            //reset answer
            optionButton.setUserData({answer: questionOptions[i]});            
            this.labels[i].setString(questionOptions[i]);
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