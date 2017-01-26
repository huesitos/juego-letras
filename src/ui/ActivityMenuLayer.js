var ACTIVITIES_IMGS = Object.freeze({
    "rocks": seaImgRes.rock1Normal_png,
    "oysters": seaImgRes.oysterOpened_png,
    "chests": seaImgRes.chestOpened_png,
    "bubbles1": seaImgRes.bubble_png,
    "jellyfish": seaImgRes.volt_png,
    "octopus": seaImgRes.ink1_png,
    "bubbles2": seaImgRes.bubble_png,
    "fisherman": seaImgRes.fish2Normal_png,
});

var ActivityMenuLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        //////////////////////////////
        // 2. add the activity btns
        var activitiesIDs = Object.keys(world[GD.currentMapID]);
        
        var positions = [
            cc.p(180, 125), cc.p(512, 125), cc.p(844, 125),
            cc.p(844, 325), cc.p(512, 325), cc.p(180, 325),
            cc.p(180, 475), cc.p(512, 475)
        ];
        var btnCount = 0;
        
        activitiesIDs.forEach(function (activityID) {
            var button = new ccui.Button(ACTIVITIES_IMGS[activityID]);
            button.attr({
                touchEnabled: true,
                x: positions[btnCount].x,
                y: positions[btnCount].y,
                scale: .7
            });
            button.setUserData({activityID: activityID});
            button.addTouchEventListener(this.onActivityButtonTouch, this);
            this.addChild(button);
            
            btnCount++;
        }.bind(this));
        
        return true;
    },
    onActivityButtonTouch: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            var activityID = sender.getUserData().activityID;
            cc.director.runScene(GD.getActivityScene(activityID));
        }
    }
});

ActivityMenuLayer.getScene = function () {
    var scene = new cc.Scene();
    
    var bg = new BackgroundLayer();
    bg.addBackgroundImage(seaImgRes.seaWater_png);
    bg.addBackgroundImage(seaImgRes.seaOctopus_png);

    scene.addChild(bg, -1);
    
    scene.addChild(new ActivityMenuLayer());
    return scene;
};