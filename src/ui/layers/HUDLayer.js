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
            cc.p(size.width * .04, size.height * .10)
        );
        emptyFuelBar.setAnchorPoint(cc.p(0, 0));
        this.addChild(emptyFuelBar, 0);
        
        this.fuelBar = new ccui.LoadingBar();
        this.fuelBar.loadTexture(uiImgRes.fuelBarFull_png);
        this.fuelBar.setPosition(
            cc.p(size.width * .04 + emptyFuelBar.width, size.height * .10)
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
        this.resumeBtn.setPosition(cc.p(size.width * .95, yPos));
        this.resumeBtn.addTouchEventListener(this.onResumeTouch, this);
        this.resumeBtn.setVisible(false);
        this.addChild(this.resumeBtn);
        
        //////////////////////////////
        // 4. add listeners
        
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: MAP_LAYER_COMPLETED_EVENT,
            callback: this.mapCompleted.bind(this)
        }, this);
        
        this.scheduleUpdate();
        
        this.dt = 0;
        return true;
    },
    update: function (dt) {
        this.dt += dt;
        var fuelGoal = GD.gameState.currentFuelGoal;
        var fuelScore = GD.gameState.currentFuelScore;
        
        // the score
        var ratio = (fuelScore * 100) / fuelGoal;
        
        this.fuelBar.setPercent(ratio);
    },
    onHelpBtnTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            cc.log("asking for help");
        }
    },
    onReplayTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            GD.currentLevel.playOptionAudio();
        }
    },
    onPauseTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            // pause game layer
            var gameLayer = this.getParent().getChildByName("gameLayer");
            gameLayer.pause();
            
            // resume button instead of pause
            this.pauseBtn.setVisible(false);
            this.replayBtn.setVisible(false);
            this.helpBtn.setVisible(false);
            this.resumeBtn.setVisible(true);
            cc.log("pausing game");
        }
    },
    onResumeTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            // remove game layer
            var gameLayer = this.getParent().getChildByName("gameLayer");
            gameLayer.resume();
            
            // pause button instead of resume
            this.pauseBtn.setVisible(true);
            this.replayBtn.setVisible(true);
            this.helpBtn.setVisible(true);
            this.resumeBtn.setVisible(false);
            cc.log("resuming game");
        }
    },
    mapCompleted: function (event) {
        this.fuelBar.setPercent(0);
    }
});