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
            var button = new ActivityButton(activityID);
            button.attr({
                x: positions[btnCount].x,
                y: positions[btnCount].y
            });            
            this.addChild(button);
            
            btnCount++;
        }.bind(this));
        
        return true;
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