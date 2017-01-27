// map objects linked to their id
var Maps = {
    "sea": SeaMap,
    "beach": null,
    "sky": null,
    "space": null
};

function GameDirector() {
    // load current map
    // defaults to "sea"
    this.currentMapID = "sea";
    this.currentActivity = "";
    
    var currentMap = Maps[this.currentMapID];
    
    this.setCurrentMap = function (mapID) {
        this.currentMapID = mapID;
        currentMap = Maps[this.currentMapID];
    };
    
    this.getActivityScene = function (activity) {
        this.currentActivity = activity;
        return currentMap.getActivityScene(activity);
    };
    
    this.completeActivity = function (activityScore) {
        GameState.saveActivityProgress(this.currentActivity, activityScore);
        
        var activityUnlock = ACTIVITY_TRANSITIONS[this.currentActivity];
        if (activityUnlock) {
            GameState.unlockActivity(activityUnlock);
        }
    };
}

var GD = new GameDirector();