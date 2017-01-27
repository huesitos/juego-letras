ActivityMenuLayer.getScene = function (mapID) {
    var scene = new cc.Scene();
    
    var bg = new BackgroundLayer();
    switch (mapID) {
        case "sea":
            bg.addBackgroundImage(seaImgRes.seaWater_png);
            bg.addBackgroundImage(seaImgRes.seaOctopus_png);
            break;
            
        case "beach":
            bg.addBackgroundImage(beachImgRes.beachSand_png);
            break;
    }
    scene.addChild(bg, -1);
    
    scene.addChild(new ActivityMenuLayer(mapID));
    
    return scene;
};