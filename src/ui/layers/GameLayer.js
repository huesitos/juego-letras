var GameLayer = cc.Layer.extend({
    ctor: function (optionSrcs, optionsPos, activity) {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        this.activity = activity;
        
        var size = cc.winSize;
        
        /////////////////////////////
        // 2. load question options
        this.optionButtons = [];
        var questionOptions = this.activity.getQuestionOptions();
        
        this.answerLabel = new cc.LabelTTF(this.activity.getRightOption(), _b_getFontName(fonts.gameFont), 60);
        this.answerLabel.setPosition(cc.p(size.width / 2, size.height * .75));
        this.addChild(this.answerLabel);
        
        for (var i = 0; i < questionOptions.length; i++) {
            var optionButton = new OptionButton(optionSrcs.initState, optionSrcs.clickedState, questionOptions[i]);
            var pos = cc.p(optionsPos.xPos, optionsPos.yPos[i]);
            
            optionButton.setPosition(pos);
            optionButton.setAnchorPoint(cc.p(0.5, 0));
            optionButton.setUserData({initPos: pos});
            
            optionButton.addTouchEventListener(this.optionButtonTouch, this);
            this.optionButtons.push(optionButton);
            this.addChild(optionButton);
            
            optionsPos.xPos += optionButton.getContentSize().width / 2 + size.width * .14;
        }
        
        // do all this after transition is over :o
        /////////////////////////////
        // 3. check if level is timed and set an update
//        this.configureTimedActivity();
        
        /////////////////////////////
        // 4. play current right answer audio
        this.activity.playOptionAudio();
        
        /////////////////////////////
        // 5. register events
        // activity completed
        var aCompleted = function (event) {
            cc.eventManager.pauseTarget(this, true);
            cc.director.runScene(new cc.TransitionFadeUp(0.5, GD.getNextScene()));
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
            cc.director.runScene(new cc.TransitionSlideInT(2, GD.getNextScene()));
        };
        
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: MAP_LAYER_COMPLETED_EVENT,
            callback: lCompleted.bind(this)
        }, this);
        
        // question checked and no transition
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: QUESTION_CHECKED,
            callback: this.resetQuestion.bind(this)
        }, this);
        
        return true;
    },
    optionButtonTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            var selection = this.activity.getRightOption() === sender.getOption();
            cc.eventManager.pauseTarget(this, true);
            this.unscheduleAllCallbacks();
            
            // animations and feedback depending on the correctnes of the answer
            if (selection) {
                cc.audioEngine.playEffect(audioRes.success);
                sender.changeToClicked();
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
                
                // move out of the screen
                var moveAction = new cc.MoveTo(
                    this.activity.getTotalTime(),
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
        }
        
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
//        this.configureTimedActivity();
    },
    tick: function (dt) {
        this.activity.tick(dt);

        if (this.activity.hasTimerFinished()) {
            this.unscheduleAllCallbacks();
                        
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