var SeaOctopusBg = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        var size = cc.winSize;
        
        var waterBackground = new cc.Sprite(seaImgRes.seaWater_png);
        waterBackground.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(waterBackground);
        
        this.background = new cc.Sprite(seaImgRes.seaOctopus_png);
        this.background.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(this.background);
        
        //////////////////////////////
        // 3. add octopus to the background
        
        var tentacle4 = new cc.Sprite(seaImgRes.tentacle4_png);
        tentacle4.attr({x: size.width * .43, y: size.height * .05});
        this.addChild(tentacle4, 10);
        
        var tentacle2 = new cc.Sprite(seaImgRes.tentacle2_png);
        tentacle2.attr({x: size.width * .13, y: size.height * .23});
        this.addChild(tentacle2, 10);
        
        var tentacle3 = new cc.Sprite(seaImgRes.tentacle3_png);
        tentacle3.attr({x: size.width * .22, y: size.height * .30});
        this.addChild(tentacle3, 10);
        
        var tentacle1 = new cc.Sprite(seaImgRes.tentacle1_png);
        tentacle1.attr({x: size.width * .37, y: size.height * .19});
        this.addChild(tentacle1, 10);
        
        this.octopus = new cc.Sprite(seaImgRes.octopus_png);
        this.octopus.attr({x: size.width * .205, y: size.height * .128});
        this.addChild(this.octopus, 10);
        
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