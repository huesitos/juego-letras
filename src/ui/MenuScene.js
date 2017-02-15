var MenuScene = cc.Scene.extend({
    onEnter: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        var bg = new cc.Sprite(res.menuBg_png);
        bg.setPosition(
            cc.p(this.size.width / 2, this.size.height / 2)
        );
        this.addChild(bg);
        
        //////////////////////////////
        // 2. nav btns
        var playBtn = new ccui.Button(
            res.playBtnNormal_png,
            res.playBtnSelected_png
        );
        playBtn.selectedRes = res.playBtnSelected_png;
        playBtn.setPosition(
            cc.p(this.size.width / 2, this.size.height * .35)
        );
        playBtn.addTouchEventListener(this.onPlayBtn, this);
        this.addChild(playBtn);
        
        var creditsBtn = new ccui.Button(
            res.creditsBtnNormal_png,
            res.creditsBtnSelected_png
        );
        creditsBtn.selectedRes = res.playBtnSelected_png;
        creditsBtn.setPosition(
            cc.p(this.size.width / 2, this.size.height * .15)
        );
        creditsBtn.addTouchEventListener(this.onCreditsBtn, this);
        this.addChild(creditsBtn);
        
        return true;
    },
    onPlayBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
            
            GameState.openedMapID = GameState.currentMapID;
            
            sender.loadTextureNormal(sender.selectedRes);
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    ActivityMenuLayer.getScene(GameState.currentMapID)
                )
            );
        }
    },
    onCreditsBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
            
            sender.loadTextureNormal(sender.selectedRes);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    new CreditsScene()
                )
            );
        }
    }
});