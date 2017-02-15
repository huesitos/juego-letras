var ActivityButton = ccui.Button.extend({
    ctor: function (activityID) {
        this._super(activitiesImgRes[activityID]);
        this.setUserData({activityID: activityID});
        this.addTouchEventListener(this.onActivityButtonTouch, this);
        
        // only unlocked activities are playeable
        var lockStatus = GameState.gameProgress.activities[activityID].unlocked;
        this.setTouchEnabled(
            lockStatus
        );
        if (!lockStatus)
            this.setColor(new cc.Color(100, 100, 100));
        
        var starsBg = new cc.Sprite(res.starsBg_png);
        starsBg.setPosition(cc.p(this.width / 2, -5));
        starsBg.setColor(staticRes.ribbonColor);
        this.addChild(starsBg);
            
        // show starts based on score
        var starsUnlocked = [
            GameState.gameProgress.activities[activityID].score >= 1,
            GameState.gameProgress.activities[activityID].score >= 2,
            GameState.gameProgress.activities[activityID].score == 3
        ];
        var star1Res = starsUnlocked[0] ? res.starOn_png : res.starOff_png;
        var star2Res = starsUnlocked[1] ? res.starOn_png : res.starOff_png;
        var star3Res = starsUnlocked[2] ? res.starOn_png : res.starOff_png;
        
        var star1 = new cc.Sprite(star1Res);
        var star2 = new cc.Sprite(star2Res);
        var star3 = new cc.Sprite(star3Res);
        
        star1.setPosition(cc.p(this.width / 2 - star1.width - 5, -10));
        star2.setPosition(cc.p(this.width / 2, -5));
        star3.setPosition(cc.p(this.width / 2 + star1.width + 5, -10));
        
        star1.setRotation(-20);
        star3.setRotation(20);
        
        if (!lockStatus) {
            star1.setColor(new cc.Color(60, 60, 60));
            star2.setColor(new cc.Color(60, 60, 60));
            star3.setColor(new cc.Color(60, 60, 60));
        }
        
        this.addChild(star1);
        this.addChild(star2);
        this.addChild(star3);
        
        return true;
    },
    onActivityButtonTouch: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            cc.audioEngine.playEffect(audioRes.click);
            
            var activityID = sender.getUserData().activityID;
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    GD.getActivityScene(activityID)
                )
            );
        }
    }
});