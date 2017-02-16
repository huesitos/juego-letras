function GameState() {
    // map that is being played
    // defaults to sea
    this.currentMapID;
    // the last visited map
    this.openedMapID;
    this.currentActivity;
    this.openedActivity;
    this.firstTime;
    
    this.resetGameProgress = function () {
        this.firstTime = true;
        this.currentMapID = "sea";
        this.openedMapID = "sea";
        this.openedActivity = "rocks1";
        this.currentActivity = null;
        
        this.gameProgress = {
            maps: {},
            activities: {}
        };

        // create an object with the game progress
        Object.keys(world).forEach(function (map) {
            this.gameProgress.maps[map] = {};
            this.gameProgress.maps[map].unlocked = false;
            //unlocked
//            this.gameProgress.maps[map].unlocked = true;
            
            Object.keys(world[map]).forEach(function (activity) {
                this.gameProgress.activities[activity] = {};
                this.gameProgress.activities[activity].unlocked = false;
                this.gameProgress.activities[activity].played = false;
                this.gameProgress.activities[activity].score = 0;
                // unlocked
//                this.gameProgress.activities[activity].unlocked = true;
//                this.gameProgress.activities[activity].played = true;
//                this.gameProgress.activities[activity].score = 3;
            }.bind(this));
        }.bind(this));

        // the default unlocked activity and map
        this.gameProgress.maps["sea"].unlocked = true;
        this.gameProgress.activities["rocks1"].unlocked = true;
        
        this.saveGameProgress();
    };
    
    this.loadGameProgress = function () {
        this.firstTime = Storage.loadItem("firstTime") === "false" ? 
            false : true;
        
        // load activities progress
        var progress = Storage.loadObject("gameProgress");
        
        if (progress)
            this.gameProgress = progress;
        else
            this.resetGameProgress();
        
        this.currentMapID = Storage.loadItem("currentMapID");
        if (!this.currentMapID) {
            this.currentMapID = "sea";
        }
        
        // open last map
        this.openedMapID = this.currentMapID;
        GD.openMap();
    };

    this.saveGameProgress = function () {
        Storage.saveItem("currentMapID", this.currentMapID);
        Storage.saveObject("gameProgress", this.gameProgress);
    };
    
    this.saveActivityProgress = function (activity, score) {
        var prevScore = this.gameProgress.activities[activity].score;
        
        if(prevScore < score) 
            this.gameProgress.activities[activity].score = score;
        this.gameProgress.activities[activity].played = true;
        
        this.saveGameProgress();
    };
    
    this.unlockActivity = function (activity) {
        this.gameProgress.activities[activity].unlocked = true;
        this.openedActivity = activity;
        
        this.saveGameProgress();
    };
    
    this.unlockMap = function (map) {
        this.gameProgress.maps[map].unlocked = true;
        
        GameState.currentMapID = map;
        GameState.openedMapID = map;
        
        this.saveGameProgress();
    };
    
    this.completeFirstTime = function () {
        this.firstTime = false;
        Storage.saveItem("firstTime", this.firstTime);
    };
    
    this.getActivityScore = function (activityID) {
        return this.gameProgress.activities[activityID].score;
    };
    
    this.isMapUnlocked = function (mapID) {
        return this.gameProgress.maps[mapID].unlocked;
    };
    
    this.isActivityPlayed = function (activityID) {
        return this.gameProgress.activities[activityID].played;
    };
    
    this.isActivityUnlocked = function (activityID) {
        return this.gameProgress.activities[activityID].unlocked;
    };
};

var GameState = new GameState();



