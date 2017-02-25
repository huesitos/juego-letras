ActivityMenuLayer.getScene = function (mapID) {
    var scene = new cc.Scene();
    
    var bg = new BackgroundLayer();
    bg.addBackgroundImage(mapsImgRes[mapID].bg);
    
    scene.addChild(bg, -1);
    
    scene.addChild(new ActivityMenuLayer(mapID));
    
    return scene;
};