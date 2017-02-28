var CreditsScene = cc.Scene.extend({
    onEnter: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        var bg = new cc.Sprite(res.creditsBg_png);
        bg.setPosition(
            cc.p(this.size.width / 2, this.size.height / 2)
        );
        this.addChild(bg);
        
        var fadeInAction = new cc.FadeIn(1);
        var delayTime = .5;
        
        var title = new cc.LabelTTF(
            "Creditos",
            _b_getFontName(fonts.titleFont),
            50
        );
        title.setPosition(
            cc.p(this.size.width * .5, this.size.height * .9)
        );
        title.setOpacity(0);
        this.addChild(title);
        title.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction
        ));
        delayTime += 1;
        
        //////////////////////////////
        // 2. nav btns
        var backBtn = new ccui.Button(uiImgRes.back_png);
        backBtn.setPosition(
            cc.p(-backBtn.width, this.size.height * .9)
        );
        backBtn.addTouchEventListener(this.onBackBtn, this);
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
        
        //////////////////////////////
        // 3. labels
        // investigation
        
        var label1 = new cc.LabelTTF(
            "Investigación",
            _b_getFontName(fonts.subTitleFont),
            30
        );
        label1.attr({
            x: this.size.width * .25,
            y: this.size.height * .77,
            opacity: 0
        });
        this.addChild(label1);
        label1.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        var label2 = new cc.LabelTTF(
            "Laura V. Sánchez-Vincitore",
            _b_getFontName(fonts.gameFont),
            25
        );
        label2.attr({
            x: this.size.width * .25,
            y: this.size.height * .69,
            opacity: 0
        });
        this.addChild(label2);
        label2.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        
        var label3 = new cc.LabelTTF(
            "José A. Aguasvivas Manzano",
            _b_getFontName(fonts.gameFont),
            25
        );
        label3.attr({
            x: this.size.width * .25,
            y: this.size.height * .64,
            opacity: 0
        });
        this.addChild(label3);
        label3.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        // design
        var label4 = new cc.LabelTTF(
            "Diseño de juego",
            _b_getFontName(fonts.subTitleFont),
            30
        );
        label4.attr({
            x: this.size.width * .75,
            y: this.size.height * .77,
            opacity: 0
        });
        this.addChild(label4);
        label4.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        label4.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        var label5 = new cc.LabelTTF(
            "Laura V. Sánchez-Vincitore",
            _b_getFontName(fonts.gameFont),
            25
        );
        label5.attr({
            x: this.size.width * .75,
            y: this.size.height * .69,
            opacity: 0
        });
        this.addChild(label5);
        label5.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        
        var label6 = new cc.LabelTTF(
            "José A. Aguasvivas Manzano",
            _b_getFontName(fonts.gameFont),
            25
        );
        label6.attr({
            x: this.size.width * .75,
            y: this.size.height * .64,
            opacity: 0
        });
        this.addChild(label6);
        label6.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        
        var label7 = new cc.LabelTTF(
            "Denisse M. Lara Martín",
            _b_getFontName(fonts.gameFont),
            25
        );
        label7.attr({
            x: this.size.width * .75,
            y: this.size.height * .59,
            opacity: 0
        });
        this.addChild(label7);
        label7.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        // programming
        var label8 = new cc.LabelTTF(
            "Programación",
            _b_getFontName(fonts.subTitleFont),
            30
        );
        label8.attr({
            x: this.size.width * .25,
            y: this.size.height * .47,
            opacity: 0
        });
        this.addChild(label8);
        label8.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        var label9 = new cc.LabelTTF(
            "Denisse M. Lara Martín",
            _b_getFontName(fonts.gameFont),
            25
        );
        label9.attr({
            x: this.size.width * .25,
            y: this.size.height * .39,
            opacity: 0
        });
        this.addChild(label9);
        label9.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        // graphic
        var label10 = new cc.LabelTTF(
            "Ilustración",
            _b_getFontName(fonts.subTitleFont),
            30
        );
        label10.attr({
            x: this.size.width * .75,
            y: this.size.height * .47,
            opacity: 0
        });
        this.addChild(label10);
        label10.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        var label11 = new cc.LabelTTF(
            "Arlyn García",
            _b_getFontName(fonts.gameFont),
            25
        );
        label11.attr({
            x: this.size.width * .75,
            y: this.size.height * .39,
            opacity: 0
        });
        this.addChild(label11);
        label11.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        // technical team
        var label12 = new cc.LabelTTF(
            "Equipo Técnico",
            _b_getFontName(fonts.subTitleFont),
            30
        );
        label12.attr({
            x: this.size.width * .5,
            y: this.size.height * .25,
            opacity: 0
        });
        this.addChild(label12);
        label12.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        delayTime += 1;
        
        var label13 = new cc.LabelTTF(
            "Analía Henríquez Cross",
            _b_getFontName(fonts.gameFont),
            25
        );
        label13.attr({
            x: this.size.width * .5,
            y: this.size.height * .17,
            opacity: 0
        });
        this.addChild(label13);
        label13.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        
        var label14 = new cc.LabelTTF(
            "Carolina Marte",
            _b_getFontName(fonts.gameFont),
            25
        );
        label14.attr({
            x: this.size.width * .5,
            y: this.size.height * .12,
            opacity: 0
        });
        this.addChild(label14);
        label14.runAction(new cc.Sequence(
            new cc.DelayTime(delayTime),
            fadeInAction.clone()
        ));
        
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