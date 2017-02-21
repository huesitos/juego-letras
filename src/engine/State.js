var GAME_PROGRESS_PROTOTYPE = {
    maps: {}, // data for each map
    activities: {}, // data for each activity
    firstTime: true,
    currentMapID: "sea" // map that is being played
};
var MAX_SAVED_GAMES = 15;

function GameState() {
    // the last visited map
    var openedMapID;
    this.openedActivityID;
    this.currentActivity;
    var selectedSavedGame;
    
    function createGameProgressObject() {
        var gameProgress = copyObject(GAME_PROGRESS_PROTOTYPE);
        
        // create an object with the game progress
        Object.keys(world).forEach(function (map) {
            gameProgress.maps[map] = {};
//            gameProgress.maps[map].unlocked = false;
            //unlocked
            gameProgress.maps[map].unlocked = true;
            
            Object.keys(world[map]).forEach(function (activity) {
                gameProgress.activities[activity] = {};
//                gameProgress.activities[activity].unlocked = false;
//                gameProgress.activities[activity].played = false;
//                gameProgress.activities[activity].score = 0;
                // unlocked
                gameProgress.activities[activity].unlocked = true;
                gameProgress.activities[activity].played = true;
                gameProgress.activities[activity].score = 3;
            });
        });

        // the default unlocked activity and map
        gameProgress.maps["sea"].unlocked = true;
        gameProgress.activities["rocks1"].unlocked = true;
        
        return gameProgress;
    }
    
    this.resetGameProgress = function () {
        openedMapID = "sea";
        this.openedActivityID = "rocks1";
        this.currentActivity = null;
        this.savedGames = {};
        
        for (var i = 1; i <= MAX_SAVED_GAMES; i++) {
            this.savedGames[i] = createGameProgressObject();
        }
        
        this.saveGames();
    };
    
    this.loadSavedGames = function () {        
        // load activities progress
        var savedGames = Storage.loadObject("savedGames");
        
        if (!savedGames)
            this.resetGameProgress();
    };

    this.saveGames = function () {
        Storage.saveObject("savedGames", this.savedGames);
    };
    
    this.saveActivityProgress = function (activity, score) {
        var prevScore = this.savedGames[
            selectedSavedGame
        ].activities[activity].score;
        
        // save new score if it's better than previous one
        if  (prevScore < score)
            this.savedGames[
                selectedSavedGame
            ].activities[activity].score = score;
        
        // set activity as played
        this.savedGames[
            selectedSavedGame
        ].activities[activity].played = true;
        
        this.saveGames();
    };
    
    this.unlockActivity = function (activity) {
        this.savedGames[
            selectedSavedGame
        ].activities[activity].unlocked = true;
        this.openedActivityID = activity;
        
        this.saveGames();
    };
    
    this.unlockMap = function (map) {
        this.savedGames[
            selectedSavedGame
        ].maps[map].unlocked = true;
        
        this.savedGames[
            selectedSavedGame
        ].currentMapID = map;
        openedMapID = map;
        
        this.saveGames();
    };
    
    this.completeFirstTime = function () {
        this.savedGames[
            selectedSavedGame
        ].firstTime = false;
        
        this.saveGames();
    };
    
    this.getActivityScore = function (activityID) {
        return this.savedGames[
            selectedSavedGame
        ].activities[activityID].score;
    };
    
    this.getCurrentMapID = function () {
        return this.savedGames[
            selectedSavedGame
        ].currentMapID;
    };
    
    this.getOpenedMapID = function () {
        return openedMapID;
    };
    
    this.getSavedGameProgress = function (saveID) {
        return this.savedGames[saveID];
    };
    
    this.setOpenedMapID = function (map) {
        openedMapID = map;
    };
    
    this.setSelectedSavedGame = function (savedGameID) {
        selectedSavedGame = savedGameID;
    };
    
    this.isFirstTime = function () {
        return this.savedGames[
            selectedSavedGame
        ].firstTime;
    };
    
    this.isMapUnlocked = function (mapID) {
        return this.savedGames[
            selectedSavedGame
        ].maps[mapID].unlocked;
    };
    
    this.isActivityPlayed = function (activityID) {
        return this.savedGames[
            selectedSavedGame
        ].activities[activityID].played;
    };
    
    this.isActivityUnlocked = function (activityID) {
        return this.savedGames[
            selectedSavedGame
        ].activities[activityID].unlocked;
    };
};

var GameState = new GameState();



