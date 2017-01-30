var GameScene = cc.Scene.extend({
    onEnter: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        //////////////////////////////
        // 2. add hud layer
        this.hudLayer = new HUDLayer();
        this.hudLayer.setVisible(false);
        this.addChild(this.hudLayer, 100);
        
        //////////////////////////////
        // 3. begin layer activity
        this.gameLayer.beginActivity();
        
        var backBtn = new ccui.Button(uiImgRes.back_png);
        backBtn.setPosition(
            cc.p(this.size.width * .05, this.size.height * .95)
        );
        backBtn.addTouchEventListener(this.onBackBtn, this);
        this.addChild(backBtn);
    },
    onBackBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            cc.director.runScene(
                new cc.TransitionFade(
                    1,
                    ActivityMenuLayer.getScene(GameState.openedMapID)
                )
            );
        }
    }
});