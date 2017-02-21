var SavedSelectionLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.size = cc.winSize;
        
        var xGap = this.size.width / 5,
            yGap = this.size.height / 4,
            xStart = this.size.width * .1,
            xPos = xStart,
            yPos = this.size.height - yGap;
        
        Object.keys(GameState.savedGames).forEach(
            function (savedGame) {
                var sGButton = new SavedGameButton(savedGame);
                sGButton.attr({
                    x: xPos,
                    y: yPos
                });
                this.addChild(sGButton);
                
                var nextX = xPos + xGap;
                if (nextX <= this.size.width) {
                    xPos = nextX;
                } else {
                    xPos = xStart;
                    yPos -= yGap;
                }
            }.bind(this)
        );
        
        var backBtn = new ccui.Button(uiImgRes.back_png);
        backBtn.setPosition(
            cc.p(this.size.width * .05, this.size.height * .9)
        );
        backBtn.addTouchEventListener(this.onBackBtn, this);
        backBtn.setVisible(false);
        // delay the apperance of the btn until the transition is over
        backBtn.runAction(
            new cc.Sequence(
                new cc.DelayTime(config.mapTransitionSpeed),
                new cc.CallFunc(function () {
                    this.setVisible(true)
                }, backBtn)
            )
        );
        this.addChild(backBtn);
        
        return true;
    },
    onBackBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {            
            audioManager.playEffect(audioRes.click);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    new MenuScene()
                )
            );
        }
    }
});

SavedSelectionLayer.getScene = function () {
    var scene = new cc.Scene();
    
    var bg = new BackgroundLayer();
    bg.addBackgroundImage(res.creditsBg_png);
    scene.addChild(bg);
    
    scene.addChild(new SavedSelectionLayer());
    return scene;
};