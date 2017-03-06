var StarsRibbon = cc.Sprite.extend({
    ctor: function (starsLockStatus, size) {
        var bgRes, starOnRes, starOffRes, hgap, vgap;
        
        // saves whether there is at least one unlocked star
        this.isOneStarUnlocked = starsLockStatus[0];
        
        // use different resources based on the size of the star
        this.starSize = size;        
        if (this.starSize === StarsRibbon.SMALL_STAR) {
            bgRes = res.starsBg_png;
            starOnRes = res.starOn_png;
            starOffRes = res.starOff_png;
            hgap = 5;
            vgap = 4;
        } else {
            if (!this.starSize)
                this.starSize = StarsRibbon.BIG_STAR;
            
            bgRes = res.starsBgB_png;
            starOnRes = res.starOnB_png;
            starOffRes = res.starOffB_png;
            hgap = 50;
            vgap = 10;
        }
        
        this._super(bgRes);
        this.setColor(staticRes.ribbonColor);
        
        // load stars based on the level's result
        var star1Res = starsLockStatus[0] ? starOnRes : starOffRes;
        var star2Res = starsLockStatus[1] ? starOnRes : starOffRes;
        var star3Res = starsLockStatus[2] ? starOnRes : starOffRes;
        
        this.star1 = new cc.Sprite(star1Res);
        this.star2 = new cc.Sprite(star2Res);
        this.star3 = new cc.Sprite(star3Res);
        
        this.star1.setPosition(cc.p(
            this.width / 2 - this.star1.width - hgap,
            this.height / 2 - vgap
        ));
        this.star2.setPosition(cc.p(
            this.width / 2,
            this.starSize === StarsRibbon.BIG_STAR ? 
                this.height / 2 - vgap : 
                this.height / 2
        ));
        this.star3.setPosition(cc.p(
            this.width / 2 + this.star1.width + hgap,
            this.height / 2 - vgap
        ));
        
        if (this.starSize === StarsRibbon.SMALL_STAR) {
            this.star1.setRotation(-20);
            this.star3.setRotation(20);
        }
        
        this.addChild(this.star1);
        this.addChild(this.star2);
        this.addChild(this.star3);
    },
    runStarsAnimation: function () {
        var starAnimation = new cc.ScaleTo(0.25, 1.1);
        this.star1.setScale(0);
        this.star2.setScale(0);
        this.star3.setScale(0);

        this.star1.runAction(new cc.EaseBackOut(starAnimation));
        this.star2.runAction(
            new cc.Sequence(
                new cc.DelayTime(0.25),
                new cc.EaseBackOut(starAnimation.clone())
            )
        );
        this.star3.runAction(
            new cc.Sequence(
                new cc.DelayTime(.5),
                new cc.EaseBackOut(starAnimation.clone())
            )
        );
        
        if (!cc.sys.isNative) {
            if (this.starSize === StarsRibbon.BIG_STAR) {
                if (this.isOneStarUnlocked) {
                    var particles = Effects.createSimpleParticles(
                        this.star2.getPosition()
                    );
                    this.addChild(particles);
                }
            }
        }
    }
});

StarsRibbon.SMALL_STAR = "small";
StarsRibbon.BIG_STAR = "big";