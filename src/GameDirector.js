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
            }
        }
    }
}

var GD = new GameDirector();