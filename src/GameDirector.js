function GameDirector() {
    var level = 0;
    var map = "sea";
    
    // load current level
    this.currentLevel = new Level(map, level);
    
    this.loadNextLevel = function () {
        level++;
        cc.log("next level: " + level);
        
        // length of the object is the same as the level
        // means that there are no more levels
        // refactor...
        if (level < world[map].length) {
            cc.log("change level");
            this.currentLevel = new Level(map, level);
        } else if (level === world[map].length) {
            cc.log("no more levels");
            cc.log("change map to: " + mapTransitions[map]);

            var nextMap = mapTransitions[map];

            if (world.hasOwnProperty(nextMap)) {
                map = mapTransitions[map];
                level = 0;
                this.currentLevel = new Level(map, level);
            } else {
                cc.log("game completed");
                this.currentLevel = null;
            }
        }
    };
    
    this.getNextScene = function () {
        var activity = this.currentLevel ? this.currentLevel.getActivity() : "end";
        var scene = new GameScene();
        
        switch (activity) {
            case "oysters":
                scene = OystersLayer.getScene();
                break;
            case "end":
                scene = new cc.Scene();
                
                var layer = new cc.Layer();
                var label = new cc.LabelTTF("End", "Arial", 50);
                label.setPosition(cc.p(cc.winSize.width / 2, cc.winSize.height / 2));
                layer.addChild(label);
                
                scene.addChild(layer)
                break;
        };
        
        return scene;
    };
}

var GD = new GameDirector();