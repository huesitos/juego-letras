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
    this.gameCompleted = false;
    
    var checkUnlockMap = function () {
        // check if the map is completed
        var activitiesID = Object.keys(
            WORLD[GameState.getOpenedMapID()].activities
        );
        
        var mapCompleted = activitiesID.map(function (id) {
            return GameState.isActivityPlayed(id);
        }).reduce(function (x, y) { return x && y; });
        
        if (mapCompleted && !GameState.isGameWon()) {
            var mapUnlock = MAP_TRANSITIONS[GameState.getOpenedMapID()];
            
            if (mapUnlock) {
                GameState.unlockMap(mapUnlock);
                this.openMap(GameState.getOpenedMapID());
            } else {
                this.gameCompleted = true;
                GameState.setGameCompleted();
            }
        }
    }.bind(this);
    
    this.openMap = function (mapID) {
        var mapType;
        if (!mapType)
            mapType = WORLD[GameState.getOpenedMapID()].type;
        else
            mapType = WORLD[mapID].type;
        
        currentMap = Maps[mapType];
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
        if (activityUnlock && !GameState.isActivityUnlocked(activityUnlock)) {
            GameState.unlockActivity(activityUnlock);
        }
        
        checkUnlockMap();
    };
}

var GD = new GameDirector();