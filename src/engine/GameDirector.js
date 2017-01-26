// map objects linked to their id
var Maps = {
    "sea": SeaMap,
    "beach": null,
    "sky": null,
    "space": null
};

function GameDirector() {
    // load current map
    this.currentMapID = "sea";
    
    var currentMap = Maps[this.currentMapID];
    
    this.setCurrentMap = function (mapID) {
        this.currentMapID = mapID;
        currentMap = Maps[this.currentMapID];
    };
    
    this.getActivityScene = function (activity) {
        return currentMap.getActivityScene(activity);
    };
}

var GD = new GameDirector();