ActivityMenuLayer.getScene = function (mapID) {
    var scene = new cc.Scene();
    
    var bg = new BackgroundLayer();
    switch (mapID) {
        case "sea":
            bg.addBackgroundImage(seaImgRes.seaMapBg_png);
            break;
            
        case "beach":
            bg.addBackgroundImage(beachImgRes.beachMapBg_png);
            break;
            
        case "earth":
            bg.addBackgroundImage(earthImgRes.earthMapBg_png);
            break;
    }
    scene.addChild(bg, -1);
    
    scene.addChild(new ActivityMenuLayer(mapID));
    
    return scene;
};