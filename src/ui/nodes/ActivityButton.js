var ActivityButton = ccui.Button.extend({
    ctor: function (activityID) {
        this._super(activitiesImgRes[activityID.replace(/[0-9]/g, '')]);
        this.setUserData({activityID: activityID});
        this.addTouchEventListener(this.onActivityButtonTouch, this);
        
        // only unlocked activities are playeable
        var lockStatus = GameState.isActivityUnlocked(activityID);
        this.setTouchEnabled(
            lockStatus
        );
        if (!lockStatus)
            this.setColor(new cc.Color(100, 100, 100));
        
        // show starts based on score
        var starsUnlocked = [
            GameState.getActivityScore(activityID) >= 1,
            GameState.getActivityScore(activityID) >= 2,
            GameState.getActivityScore(activityID) == 3
        ];
        
        if (GameState.isActivityPlayed(activityID)) {
            var starsRibbon = new StarsRibbon(
                starsUnlocked,
                StarsRibbon.SMALL_STAR
            );
            starsRibbon.setPosition(cc.p(this.width / 2, -5));
            this.addChild(starsRibbon);
        }
        
        this.setScale(0.7);
        
        return true;
    },
    onActivityButtonTouch: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            audioManager.playEffect(audioRes.click);
            
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