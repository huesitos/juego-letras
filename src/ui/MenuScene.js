var MenuScene = cc.Scene.extend({
    onEnter: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        var bg = new cc.Sprite(seaImgRes.seaTop_png);
        bg.setPosition(
            cc.p(this.size.width / 2, this.size.height / 2)
        );
        this.addChild(bg);
        
        //////////////////////////////
        // 2. nav btns
        var playBtn = new ccui.Button(
            seaImgRes.fish1Normal_png,
            seaImgRes.fish1Selected_png
        );
        playBtn.selectedRes = seaImgRes.fish1Selected_png;
        playBtn.setPosition(
            cc.p(this.size.width / 2, this.size.height / 2)
        );
        playBtn.addTouchEventListener(this.onPlayBtn, this);
        this.addChild(playBtn);
        
        var creditsBtn = new ccui.Button();
        creditsBtn.setTitleText("Creditos");
        creditsBtn.setTitleFontSize(40);
        creditsBtn.setTitleFontName(_b_getFontName(fonts.gameFont));
        creditsBtn.setPosition(
            cc.p(this.size.width / 2, this.size.height * .3)
        );
        creditsBtn.addTouchEventListener(this.onCreditsBtn, this);
        this.addChild(creditsBtn);
    },
    onPlayBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            sender.loadTextureNormal(sender.selectedRes);
            cc.director.runScene(
                new cc.TransitionFade(
                    1,
                    ActivityMenuLayer.getScene(GameState.currentMapID)
                )
            );
        }
    },
    onCreditsBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            cc.director.runScene(
                new cc.TransitionFade(
                    1,
                    new CreditsScene()
                )
            );
        }
    }
});