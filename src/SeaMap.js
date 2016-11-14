var SeaMap = new Object();

SeaMap.getOystersScene = function () {
    var scene = new GameScene();
    var layer = new GameLayer(
        new SeaBottomBg(),
        {
            initState: seaImgRes.oysterClosed_png,
            clickedState: seaImgRes.oysterOpened_png
        }
    );
    layer.setName("gameLayer");
    
    scene.addChild(layer);
    
    return scene;
};

SeaMap.getChestsScene = function () {
    var scene = new GameScene();
    var layer = new GameLayer(
        new SeaBottomBg(),
        {
            initState: seaImgRes.oysterClosed_png,
            clickedState: seaImgRes.oysterOpened_png
        }
    );
    layer.setName("gameLayer");
    
    scene.addChild(layer);
    
    return scene;
};

SeaMap.getRocksScene = function () {
    var scene = new GameScene();
    var layer = new GameLayer(
        new SeaBottomBg(),
        {
            initState: seaImgRes.oysterClosed_png,
            clickedState: seaImgRes.oysterOpened_png
        }
    );
    layer.setName("gameLayer");
    
    scene.addChild(layer);
    
    return scene;
};