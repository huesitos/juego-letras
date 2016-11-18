// map objects linked to their id
var Maps = {
    "sea": SeaMap,
    "beach": null,
    "sky": null,
    "space": null
};

function GameDirector() {
    // load current map
    var mapID = "sea";
    var currentMap = Maps[mapID];
    this.gameState = new GameState(currentMap.layerGoal);
    
    this.getNextScene = function () {
        var nextScene = currentMap.getActivityScene();
        
        if (!nextScene) {
            nextScene = new cc.Scene();

            var layer = new cc.Layer();
            var label = new cc.LabelTTF("End", "Arial", 50);
            label.setPosition(cc.p(cc.winSize.width / 2, cc.winSize.height / 2));
            layer.addChild(label);

            nextScene.addChild(layer)
        }
        
        return nextScene;
    };
        
    this.update = function (dt) {
        if (currentMap && !currentMap.isMapCompleted()) {
            currentMap.update();
        
            // if map is completed, change to the next
            if (currentMap.isMapCompleted()) {
                var newMapID = mapTransitions[mapID];
                
                if (newMapID) {
                    currenMap = Maps[newMapID];
                    
                    tthis.onNewLayer();
                }
            }
        }
    };
    
    this.onNewLayer = function () {
        this.gameState.setFuelGoal(
            currentMap.layerGoal
        );
    };
}

var GD = new GameDirector();