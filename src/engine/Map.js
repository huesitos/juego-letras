function Map(mapID) {
    // load map
    this.mapActivities = copyObject(world[mapID]);
    var currentActivity; // the activity being played
    currentActivity = "";
    
    // methods
    
    // return the activity scene to be played by cc.director
    this.getActivityScene = function (activity) {
        currentActivity = activity;
        var activityData; // the data of the activity being played
        activityData = this.mapActivities[activity];
        
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
            activityData,
            activityObject
        );
        scene.gameLayer = gameLayer;
        gameLayer.setName("gameLayer");
        scene.addChild(gameLayer);

        return scene;
    };
    
    // returns if the map has been completed
//    this.isMapCompleted = function () {
//        return currentLayer >= this.mapActivities.length;
//    };
};