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
        // goes to game selection scene
        var playBtn = new ccui.Button(
            res.playBtn_png
        );
        playBtn.setPosition(cc.p(this.size.width / 2, -playBtn.height));
        playBtn.addTouchEventListener(this.onPlayBtn, this);
        this.addChild(playBtn);
        
        playBtn.runAction(Effects.createJerkAnimation());
        audioManager.playEffect(audioRes.greetings);
        
        playBtn.runAction(
            new cc.Sequence(
                new cc.DelayTime(config.mapTransitionSpeed),
                new cc.EaseBackOut(
                    new cc.MoveTo(
                        .5,
                        cc.p(this.size.width / 2, this.size.height * .35)
                    )
                )
            )
        );
        
        // goes to credits scene
        var creditsBtn = new ccui.Button(
            res.creditsBtn_png
        );
        creditsBtn.setPosition(
            cc.p(this.size.width * .45, -creditsBtn.height)
        );
        creditsBtn.addTouchEventListener(this.onCreditsBtn, this);
        this.addChild(creditsBtn);
        creditsBtn.runAction(new cc.Sequence(
            new cc.DelayTime(config.sceneTransitionSpeed + .5),
            new cc.EaseBackOut(
                new cc.MoveTo(
                    .5,
                    cc.p(this.size.width * .45, this.size.height * .15)
                )
            )
        ));
        
        // goes to record scene
        var recordBtn = new ccui.Button(
            res.recordsBtn_png
        );
        recordBtn.setPosition(
            cc.p(this.size.width * .55, -recordBtn.height)
        );
        recordBtn.addTouchEventListener(this.onRecordsBtn, this);
        this.addChild(recordBtn);
        recordBtn.runAction(new cc.Sequence(
            new cc.DelayTime(config.sceneTransitionSpeed + .5),
            new cc.EaseBackOut(
                new cc.MoveTo(
                    .5,
                    cc.p(this.size.width * .55, this.size.height * .15)
                )
            )
        ));
        
        //////////////////////////////
        // 3. title
        
        var name = new cc.LabelTTF(
            "Juego Letras",
            _b_getFontName(fonts.subTitleFont),
            50
        );
        name.setPosition(cc.p(
            this.size.width / 2,
            this.size.height * .85
        ));
        this.addChild(name);
        
        return true;
    },
    onExitTransitionDidStart: function () {
        this._super();
        
        // if instructions is playing
        cc.audioEngine.stopAllEffects();
    },
    onPlayBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
                        
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    SavedSelectionLayer.getScene(false)
                )
            )
        }
    },
    onCreditsBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    new CreditsScene()
                )
            );
        }
    },
    onRecordsBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    SavedSelectionLayer.getScene(true)
                )
            );
        }
    }
});