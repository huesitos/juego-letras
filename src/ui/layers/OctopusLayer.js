var OctopusLayer = GameLayer.extend({
    ctor: function (optionsPos, gap, activity) {
        //////////////////////////////
        // 1. super init first
        var ink1 = {
            initState: seaImgRes.ink1_png,
            clickedState: seaImgRes.ink1_png
        }
        
        this._super(ink1, optionsPos, gap, activity);
        
        var size = cc.winSize;
        
        //////////////////////////////
        // 2. modify inks so each is different
        
        this.optionButtons[0].setVisible(false);
        
        this.optionButtons[1].setStatesTextures(
            seaImgRes.ink2_png,
            seaImgRes.ink2_png
        );
        this.optionButtons[1].changeToNormal();
        this.optionButtons[1].setVisible(false);
        
        this.optionButtons[2].setStatesTextures(
            seaImgRes.ink3_png,
            seaImgRes.ink3_png
        );
        this.optionButtons[2].changeToNormal();
        this.optionButtons[2].setVisible(false);
        
        //////////////////////////////
        // 3. add octopus to the background
        
        var tentacle4 = new cc.Sprite(seaImgRes.tentacle4_png);
        tentacle4.attr({x: size.width * .43, y: size.height * .05});
        this.addChild(tentacle4);
        
        var tentacle2 = new cc.Sprite(seaImgRes.tentacle2_png);
        tentacle2.attr({x: size.width * .13, y: size.height * .23});
        this.addChild(tentacle2);
        
        var tentacle3 = new cc.Sprite(seaImgRes.tentacle3_png);
        tentacle3.attr({x: size.width * .22, y: size.height * .30});
        this.addChild(tentacle3);
        
        var tentacle1 = new cc.Sprite(seaImgRes.tentacle1_png);
        tentacle1.attr({x: size.width * .37, y: size.height * .19});
        this.addChild(tentacle1);
        
        this.octopus = new cc.Sprite(seaImgRes.octopus_png);
        this.octopus.attr({x: size.width * .205, y: size.height * .128});
        this.addChild(this.octopus);
        
        var rotateLeft = new cc.RotateTo(3, -3);
        var rotateCenter = new cc.RotateTo(2, 0);
        var rotateRight = new cc.RotateTo(3, 10);
        var tentacleRotateSequence = new cc.Sequence(
            rotateLeft,
            rotateCenter,
            rotateRight,
            rotateCenter
        );
        
        var tentacleAnimation = new cc.RepeatForever(
            tentacleRotateSequence
        );
        var tentacleAnimation2 = new cc.RepeatForever(
            new cc.Sequence(
                new cc.DelayTime(0.25),
                tentacleRotateSequence.clone()
            )
        );
        var tentacleAnimation3 = new cc.RepeatForever(
            new cc.Sequence(
                new cc.DelayTime(0.5),
                tentacleRotateSequence.clone()
            )
        );
        var tentacleAnimation4 = new cc.RepeatForever(
            new cc.Sequence(
                new cc.DelayTime(0.8),
                tentacleRotateSequence.clone()
            )
        );
        
        tentacle1.runAction(tentacleAnimation);
        tentacle2.runAction(tentacleAnimation2);
        tentacle3.runAction(tentacleAnimation3);
        tentacle4.runAction(tentacleAnimation4);
        
        return true;
    }
});