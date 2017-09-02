function Map(mapID) {
    // load map
    var currentActivity; // the activity being played
    currentActivity = "";
    
    // methods
    
    this.setMapID = function (map) {
        mapID = map
    };
    
    // return the activity scene to be played by cc.director
    this.getActivityScene = function (activityID) {
        currentActivity = activityID;
        var activityData = Utils.copyObject(
            WORLD[mapID].activities[activityID]
        );
        
        var scene = new GameScene();
        var background = new BackgroundLayer();
        activityData.backgroundImgs.forEach(function (path) {
            background.addBackgroundImage(path);
        });
        scene.background = background;
        scene.addChild(background, -1);

        // create new activity and pass it to the layer
        // add the layer to the scene and return it
        var activityObject = new Activity(activityData);
                
        var gameLayer = this.getGameLayer(
            activityData.activityType,
            activityObject
        );
        scene.gameLayer = gameLayer;
        gameLayer.setName("gameLayer");
        scene.addChild(gameLayer);

        return scene;
    };
};