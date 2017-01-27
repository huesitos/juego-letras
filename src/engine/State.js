function GameState() {    
    this.resetGameProgress = function () {
        this.gameProgress = {
            maps: {},
            activities: {}
        };

        // create an object with the game progress
        Object.keys(world).forEach(function (map) {
            this.gameProgress.maps[map] = {};
            this.gameProgress.maps[map].unlocked = false;
            
            Object.keys(world[map]).forEach(function (activity) {
                this.gameProgress.activities[activity] = {};
                this.gameProgress.activities[activity].unlocked = false;
                this.gameProgress.activities[activity].score = 0;
            }.bind(this));
        }.bind(this));

        // the default unlocked activity and map
        this.gameProgress.maps["sea"].unlocked = true;
        this.gameProgress.activities["rocks"].unlocked = true;
        
        this.saveGameProgress();
    };
    
    this.loadGameProgress = function () {
        var progress = Storage.loadObject("gameProgress");
        
        if (progress)
            this.gameProgress = progress;
        else
            this.resetGameProgress();
    };

    this.saveGameProgress = function () {
        Storage.saveObject("gameProgress", this.gameProgress);
    };
    
    this.saveActivityProgress = function (activity, score) {
        var prevScore = this.gameProgress.activities[activity].score;
        
        if(prevScore < score) 
            this.gameProgress.activities[activity].score = score;
        
        this.saveGameProgress();
    };
    
    this.unlockActivity = function (activity) {
        this.gameProgress.activities[activity].unlocked = true;
        
        this.saveGameProgress();
    };
    
    this.unlockMap = function (map) {
        this.gameProgress.maps[map].unlocked = true;
        
        this.saveGameProgress();
    };
};

var GameState = new GameState();



