// map objects linked to their id
var Maps = {
    "sea": SeaMap,
    "beach": BeachMap,
    "earth": EarthMap,
    "sky": null,
    "space": null
};

function GameDirector() {
    // the map that is being played
    var currentMap;
    
    var checkUnlockMap = function () {
        // check if the map is completed
        var activitiesID = Object.keys(WORLD[GameState.getCurrentMapID()]);
        
        var mapCompleted = activitiesID.map(function (id) {
            return GameState.isActivityPlayed(id);
        }).reduce(function (x, y) { return x && y; });
        
        if (mapCompleted) {
            var mapUnlock = MAP_TRANSITIONS[GameState.getCurrentMapID()];
            
            if (mapUnlock) {
                GameState.unlockMap(mapUnlock);
                this.openMap(GameState.getOpenedMapID());
            } else {
                // finish game
            }
        }
    }.bind(this);
    
    this.openMap = function (mapID) {
        if (!mapID)
            currentMap = Maps[GameState.getOpenedMapID().replace(/[0-9]/g, '')];
        else
            currentMap = Maps[mapID.replace(/[0-9]/g, '')];
        currentMap.setMapID(mapID);
    };
    
    this.openCurrentMap = function () {
        GameState.setOpenedMapID(GameState.getCurrentMapID());
        this.openMap(GameState.getOpenedMapID());
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