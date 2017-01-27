// map objects linked to their id
var Maps = {
    "sea": SeaMap,
    "beach": BeachMap,
    "sky": null,
    "space": null
};

function GameDirector() {
    // the map that is being played
    var currentMap;
    
    function checkUnlockMap() {
        // check if the map is completed
        var activitiesID = Object.keys(world[GameState.currentMapID]);
        
        var mapCompleted = activitiesID.map(function (id) {
            return GameState.gameProgress.activities[id].played;
        }).reduce(function (x, y) { return x && y; });
        
        if (mapCompleted) {
            var mapUnlock = MAP_TRANSITIONS[GameState.currentMapID];
            
            if (mapUnlock) {
                GameState.unlockMap(mapUnlock);
            } else {
                // finish game
            }
        }
    };
    
    this.loadMap = function (mapID) {
        currentMap = Maps[mapID];
    };
        
    this.getActivityScene = function (activity) {
        GameState.currentActivity = activity;
        return currentMap.getActivityScene(activity);
    };
    
    this.completeActivity = function (activityScore) {
        GameState.saveActivityProgress(
            GameState.currentActivity,
            activityScore
        );
        
        var activityUnlock = ACTIVITY_TRANSITIONS[GameState.currentActivity];
        if (activityUnlock) {
            GameState.unlockActivity(activityUnlock);
        }
        
        checkUnlockMap();
    };    
}

var GD = new GameDirector();