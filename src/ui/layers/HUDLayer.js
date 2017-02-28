var HUDLayer = cc.Layer.extend({
    fuelBar: null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        this.size = cc.winSize;
        
        //////////////////////////////
        // 2. create fuel bar
        this.emptyFuelBar = new cc.Sprite(uiImgRes.fuelBarEmpty_png);
        this.emptyFuelBar.pos = cc.p(
            this.size.width * .04,
            this.size.height * .06
        );
        this.emptyFuelBar.setPosition(
            cc.p(-50, this.size.height * .06)
        );
        this.emptyFuelBar.setAnchorPoint(cc.p(0, 0));
        this.addChild(this.emptyFuelBar, 0);
        
        this.fuelBar = new ccui.LoadingBar();
        this.fuelBar.loadTexture(uiImgRes.fuelBarFull_png);
        this.fuelBar.setPosition(
            cc.p(
                this.size.width * .04 + this.emptyFuelBar.width,
                this.size.height * .06
            )
        );
        this.fuelBar.setAnchorPoint(cc.p(0, 0));
        this.fuelBar.setRotation(270);
        this.fuelBar.setPercent(0);
        this.addChild(this.fuelBar, 1);
        
        //////////////////////////////
        // 3. create game buttons
        
        var yPos = this.size.height * .6;
        var gap = 30;
        
        this.helpBtn = new ccui.Button(uiImgRes.help_png);
        this.helpBtn.pos = cc.p(this.size.width * .95, yPos);
        this.helpBtn.setPosition(
            cc.p(this.size.width + this.helpBtn.width, yPos)
        );
        this.helpBtn.addTouchEventListener(this.onHelpBtnTouch, this);
        this.addChild(this.helpBtn);
        
        yPos -= (this.helpBtn.height / 2 + this.size.height * .05 + gap);
        
        this.replayBtn = new ccui.Button(uiImgRes.replay_png);
        this.replayBtn.pos = cc.p(this.size.width * .95, yPos);
        this.replayBtn.setPosition(
            cc.p(this.size.width + this.replayBtn.width, yPos)
        );
        this.replayBtn.addTouchEventListener(this.onReplayTouch, this);
        this.addChild(this.replayBtn);
        
        yPos -= (this.replayBtn.height / 2 + this.size.height * .05 + gap);
        
        this.pauseBtn = new ccui.Button(uiImgRes.pause_png);
        this.pauseBtn.pos = cc.p(this.size.width * .95, yPos);
        this.pauseBtn.setPosition(
            cc.p(this.size.width + this.pauseBtn.width, yPos)
        );
        this.pauseBtn.addTouchEventListener(this.onPauseTouch, this);
        this.addChild(this.pauseBtn);
        
        this.resumeBtn = new ccui.Button(uiImgRes.resume_png);
        this.resumeBtn.setPosition(cc.p(this.size.width * .5, this.size.height * .5));
        this.resumeBtn.addTouchEventListener(this.onResumeTouch, this);
        this.resumeBtn.setVisible(false);
        this.addChild(this.resumeBtn);
        
        this.backBtn = new ccui.Button(uiImgRes.back_png);
        this.backBtn.setPosition(
            cc.p(this.size.width * .05, this.size.height * .95)
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
        
        // run activity completed animation
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: ACTIVITY_COMPLETED,
            callback: this.onActivityCompleted.bind(this)
        }, this);
        
        return true;
    },
    runIntroAnimation: function () {
        this.emptyFuelBar.runAction(
            new cc.EaseBackOut(
                new cc.MoveTo(
                    0.25,
                    this.emptyFuelBar.pos
                )
            )
        );
        this.helpBtn.runAction(
            new cc.EaseBackOut(
                new cc.MoveTo(
                    0.25,
                    this.helpBtn.pos
                )
            )
        );
        this.replayBtn.runAction(
            new cc.EaseBackOut(
                new cc.MoveTo(
                    0.25,
                    this.replayBtn.pos
                )
            )
        );
        this.pauseBtn.runAction(
            new cc.EaseBackOut(
                new cc.MoveTo(
                    0.25,
                    this.pauseBtn.pos
                )
            )
        );
    },
    onQuestionChecked: function (event) {
        var gameLayer = this.getParent().getChildByName("gameLayer");
        
        var fuelScore = gameLayer.activity.getActivityScore();
        
        // the score
        var percent = fuelScore;
        
        var diff = percent - this.fuelBar.getPercent();
        
        if (diff > 0) {
            this.animateBarLoading(diff);
        }
    },
    animateBarLoading: function (ratio) {
        var step = Math.floor(ratio / 10);
        
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
            audioManager.playEffect(audioRes.click);
            
            this.pauseGame();
            
            this.runAction(new cc.Sequence(
                new cc.DelayTime(8.5),
                new cc.CallFunc(function () {
                    this.resumeGame();
                }, this)
            ));
            
            audioManager.playEffect(audioRes.help);
        }
    },
    onReplayTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
            
            var gameLayer = this.getParent().getChildByName("gameLayer");
            gameLayer.activity.playOptionAudio();
        }
    },
    onPauseTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
            
            this.pauseGame();
            
            // resume button instead of pause
            this.pauseBtn.setVisible(false);
            this.replayBtn.setVisible(false);
            this.helpBtn.setVisible(false);
            this.resumeBtn.setVisible(true);
            this.backBtn.setVisible(true);
            
            this.backBtn.setPosition(
                cc.p(-this.backBtn.width, this.size.height * .9)
            );
            this.backBtn.runAction(
                new cc.EaseBackOut(
                    new cc.MoveTo(
                        0.25,
                        cc.p(this.size.width * .05, this.size.height * .95)
                    )
                )
            );
            
            this.resumeBtn.setScale(0);
            this.resumeBtn.runAction(
                new cc.EaseBackOut(
                    new cc.ScaleTo(
                        0.25,
                        1
                    )
                )
            );
        }
    },
    onResumeTouch: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
            
            this.resumeGame();
            
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
            audioManager.playEffect(audioRes.click);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    ActivityMenuLayer.getScene(GameState.getOpenedMapID())
                )
            );
        }
    },
    onActivityCompleted: function (event) {
        // hide all btns
        this.pauseBtn.setVisible(false);
        this.replayBtn.setVisible(false);
        this.helpBtn.setVisible(false);
        this.resumeBtn.setVisible(false);
        this.backBtn.setVisible(false);
    },
    pauseGame: function () {
        // pause game layer
        var gameLayer = this.getParent().getChildByName("gameLayer");
        gameLayer.pause();

        var grayLayer = new cc.LayerColor(new cc.Color(0, 0, 0, 150));
        grayLayer.setPosition(0, 0);
        grayLayer.setName("grayLayer");
        this.addChild(grayLayer, -1);
    },
    resumeGame: function () {
        // remove game layer
        var gameLayer = this.getParent().getChildByName("gameLayer");
        gameLayer.resume();

        this.removeChild(this.getChildByName("grayLayer"));
    }
});