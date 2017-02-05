var HUDLayer = cc.Layer.extend({
    fuelBar: null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        var size = cc.winSize;
        
        //////////////////////////////
        // 2. create fuel bar
        var emptyFuelBar = new cc.Sprite(uiImgRes.fuelBarEmpty_png);
        emptyFuelBar.setPosition(
            cc.p(size.width * .04, size.height * .06)
        );
        emptyFuelBar.setAnchorPoint(cc.p(0, 0));
        this.addChild(emptyFuelBar, 0);
        
        this.fuelBar = new ccui.LoadingBar();
        this.fuelBar.loadTexture(uiImgRes.fuelBarFull_png);
        this.fuelBar.setPosition(
            cc.p(size.width * .04 + emptyFuelBar.width, size.height * .06)
        );
        this.fuelBar.setAnchorPoint(cc.p(0, 0));
        this.fuelBar.setRotation(270);
        this.fuelBar.setPercent(0);
        this.addChild(this.fuelBar, 1);
        
        //////////////////////////////
        // 3. create game buttons
        
        var yPos = size.height * .85;
        
        this.helpBtn = new ccui.Button(uiImgRes.help_png);
        this.helpBtn.setPosition(cc.p(size.width * .95, yPos));
        this.helpBtn.addTouchEventListener(this.onHelpBtnTouch, this);
        this.addChild(this.helpBtn);
        
        yPos -= (this.helpBtn.height / 2 + size.height * .05);
        
        this.replayBtn = new ccui.Button(uiImgRes.replay_png);
        this.replayBtn.setPosition(cc.p(size.width * .95, yPos));
        this.replayBtn.addTouchEventListener(this.onReplayTouch, this);
        this.addChild(this.replayBtn);
        
        yPos -= (this.replayBtn.height / 2 + size.height * .05);
        
        this.pauseBtn = new ccui.Button(uiImgRes.pause_png);
        this.pauseBtn.setPosition(cc.p(size.width * .95, yPos));
        this.pauseBtn.addTouchEventListener(this.onPauseTouch, this);
        this.addChild(this.pauseBtn);
        
        this.resumeBtn = new ccui.Button(uiImgRes.resume_png);
        this.resumeBtn.setPosition(cc.p(size.width * .5, size.height * .5));
        this.resumeBtn.addTouchEventListener(this.onResumeTouch, this);
        this.resumeBtn.setVisible(false);
        this.addChild(this.resumeBtn);
        
        this.backBtn = new ccui.Button(uiImgRes.back_png);
        this.backBtn.setPosition(
            cc.p(size.width * .05, size.height * .95)
        );
        this.backBtn.addTouchEventListener(this.onBackTouch, this);
        this.backBtn.setVisible(false);
        this.addChild(this.backBtn);
        
        //////////////////////////////
        // 4. set update
        
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: QUESTION_CHECKED,
            callback: this.onQuestionChecked.bind(this)
        }, this);
        
        return true;
    },
    onQuestionChecked: function (event) {
        var gameLayer = this.getParent().getChildByName("gameLayer");
        
        var fuelGoal = gameLayer.activity.getActivityGoal();
        var fuelScore = gameLayer.activity.getActivityScore();
        
        // the score
        var percent = (fuelScore * 100) / fuelGoal;
        
        var diff = percent - this.fuelBar.getPercent();
        
        if (diff > 0) {
            this.animateBarLoading(diff);
        }
    },
    animateBarLoading: function (ratio) {
        var step = ratio / 10;
        
        var increase = function () {
            this.fuelBar.setPercent(this.fuelBar.getPercent() + step);
        };
        
        this.fuelBar.runAction(
            new cc.Repeat(
                new cc.Sequence(
                    new cc.CallFunc(
                        increase,
                        this
                    ),
                    new cc.DelayTime(0.01)
                ),
                10
            )
        );
    },
    onHelpBtnTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            cc.log("asking for help");
        }
    },
    onReplayTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            var gameLayer = this.getParent().getChildByName("gameLayer");
            gameLayer.activity.playOptionAudio();
        }
    },
    onPauseTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            // pause game layer
            var gameLayer = this.getParent().getChildByName("gameLayer");
            gameLayer.pause();
            
            var grayLayer = new cc.LayerColor(new cc.Color(0, 0, 0, 150));
            grayLayer.setPosition(0, 0);
            grayLayer.setName("grayLayer");
            this.addChild(grayLayer, -1);
            
            // resume button instead of pause
            this.pauseBtn.setVisible(false);
            this.replayBtn.setVisible(false);
            this.helpBtn.setVisible(false);
            this.resumeBtn.setVisible(true);
            this.backBtn.setVisible(true);
        }
    },
    onResumeTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            // remove game layer
            var gameLayer = this.getParent().getChildByName("gameLayer");
            gameLayer.resume();
            
            this.removeChild(this.getChildByName("grayLayer"));
            
            // pause button instead of resume
            this.pauseBtn.setVisible(true);
            this.replayBtn.setVisible(true);
            this.helpBtn.setVisible(true);
            this.resumeBtn.setVisible(false);
            this.backBtn.setVisible(false);
        }
    },
    onBackTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            cc.director.runScene(
                new cc.TransitionFade(
                    1,
                    ActivityMenuLayer.getScene(GameState.openedMapID)
                )
            );
        }
    },
});