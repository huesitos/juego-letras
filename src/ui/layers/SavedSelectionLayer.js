var SavedSelectionLayer = cc.Layer.extend({
    ctor: function (isRecordsScreen) {
        this._super();
        this.size = cc.winSize;
        
        var xGap = this.size.width / 5,
            yGap = this.size.height / 4,
            xStart = this.size.width * .1,
            xPos = xStart,
            yPos = this.size.height - yGap;
                
        Object.keys(GameState.savedGames).forEach(
            function (savedGame) {
                var sGButton = new SavedGameButton(
                    savedGame,
                    isRecordsScreen
                );
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
        backBtn.setPosition(cc.p(-backBtn.width, this.size.height * .9));
        backBtn.addTouchEventListener(this.onBackBtn, this);
        // delay the apperance of the btn until the transition is over
        backBtn.runAction(
            new cc.Sequence(
                new cc.DelayTime(config.mapTransitionSpeed),
                new cc.EaseBackOut(
                    new cc.MoveTo(
                        0.25,
                        cc.p(this.size.width * .05, this.size.height * .9)
                    )
                )
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

SavedSelectionLayer.getScene = function (isRecordsScreen) {
    var scene = new cc.Scene();
    
    var bg = new BackgroundLayer();
    bg.addBackgroundImage(res.creditsBg_png);
    scene.addChild(bg);
    
    scene.addChild(new SavedSelectionLayer(isRecordsScreen));
    return scene;
};