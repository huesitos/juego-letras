var MAP_LAYER_COMPLETED_EVENT = "mapLayerCompleted";
var ACTIVITY_FINISHED_EVENT = "activityFinished";

var BACKGROUNDS = Object.freeze({
    "seaBottom": SeaBottomBg,
    "seaMiddle": SeaMiddleBg,
    "seaJellyfish": SeaJellyfishBg,
    "seaTop": SeaTopBg,
    "seaOctopus": SeaOctopusBg
});

function Map(mapID) {
    // load map
    var mapData = copyObject(world[mapID]);
    var currentLayer; // the layer from which to get the activities
    var currentActivity; // the activity being played
    currentLayer = 0;
    currentActivity = 0;
    
    // load map layer data
    this.layerGoal; // score needed to advance to the next layer
    
    this.layerGoal = mapData[currentLayer].activities.map(
        function (activity) {
            return activity.goal;
        }
    ).reduce(function (pre, cur) {
        return pre + cur;
    });
    
    var activityObject; // copy of the object sent to the scene
    
    // methods
    
    // return the activity scene to be played by cc.director
    this.getActivityScene = function () {
        if (!this.isMapCompleted()) {
            var activityData; // the data of the activity being played
            activityData = mapData[currentLayer].activities[currentActivity];

            // if there is another activity, load scene and return
            var scene = new GameScene();
            var mapLayerBgO = BACKGROUNDS[activityData.background];
            var background = new mapLayerBgO();
            scene.background = background;
            scene.addChild(background, 0);
            
            // create new activity and pass it to the layer
            // add the layer to the scene and return it
            activityObject = new Activity(activityData);
            
            var gameLayer = this.getGameLayer(
                activityData,
                activityObject
            );
            scene.gameLayer = gameLayer;
            scene.addChild(gameLayer);

            return scene;
        }
        
        return null;
    };
    
    // returns if the map has been completed
    this.isMapCompleted = function () {
        return currentLayer >= mapData.length;
    };
    
    // update map
    this.update = function (dt) {
        if (activityObject.isActivityCompleted()) {
            currentActivity++;

            // if there are no more activities, change layer
            if (currentActivity >= mapData[currentLayer].activities.length) {
                currentActivity = 0;
                currentLayer++;
                
                if (!this.isMapCompleted()) {
                    cc.eventManager.dispatchCustomEvent(
                        MAP_LAYER_COMPLETED_EVENT
                    );
                    
                    this.layerGoal = mapData[currentLayer].activities.map(
                        function (activity) {
                            return activity.goal;
                        }
                    ).reduce(function (pre, cur) {
                        return pre + cur;
                    });
                    
                    GD.onNewLayer();
                }
            }

            // notify whether the layer or activity is completed
            if (this.isMapCompleted()) {
                cc.eventManager.dispatchCustomEvent(
                    MAP_LAYER_COMPLETED_EVENT
                );
            } else {
                cc.eventManager.dispatchCustomEvent(
                    ACTIVITY_FINISHED_EVENT
                );
            }
        }
    };
};