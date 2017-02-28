var GAME_PROGRESS_PROTOTYPE = {
    records: {},
    maps: {}, // data for each map
    activities: {}, // data for each activity
    firstTime: true,
    currentMapID: "sea1" // map that is being played
};
var MAX_SAVED_GAMES = 15;

function GameState() {
    // the last visited map
    var openedMapID;
    this.openedActivityID;
    this.currentActivity;
    var selectedSavedGame;
    var statisticsRecord;
    var that = this;
    
    var todaysDate = new Date().toDateString();
    
    function createGameProgressObject() {
        var gameProgress = Utils.copyObject(GAME_PROGRESS_PROTOTYPE);
        
        // create an object with the game progress
        Object.keys(WORLD).forEach(function (map) {
            gameProgress.maps[map] = {};
            gameProgress.maps[map].unlocked = false;
            //unlocked
//             gameProgress.maps[map].unlocked = true;
            
            Object.keys(WORLD[map].activities).forEach(function (activity) {
                gameProgress.activities[activity] = {};
                gameProgress.activities[activity].unlocked = false;
                gameProgress.activities[activity].played = false;
                gameProgress.activities[activity].score = 0;
                // unlocked
//                 gameProgress.activities[activity].unlocked = true;
//                 gameProgress.activities[activity].played = true;
//                 gameProgress.activities[activity].score = 3;
            });
        });

        // the default unlocked activity and map
        gameProgress.maps["sea1"].unlocked = true;
        gameProgress.activities["rocks1"].unlocked = true;
        
        return gameProgress;
    }
    
    function isTodaysRecordCreated() {
        // check if there are records for today
        var todaysDate = new Date().toDateString();
        
        return that.savedGames[
            selectedSavedGame
        ].records.hasOwnProperty(todaysDate);
    }
    
    function createRecordObject() {
        that.savedGames[
            selectedSavedGame
        ].records[todaysDate] = {
            "stimuli": {},
            "playedActivities": []
        };
        
        that.saveGames();
    }
    
    function isStimulusRecordCreated(st) {
        // check if there are records for today        
        return that.savedGames[
            selectedSavedGame
        ].records[
            todaysDate
        ].stimuli.hasOwnProperty(st);
    }
    
    function createStimuliRecord(st) {
        that.savedGames[
            selectedSavedGame
        ].records[todaysDate].stimuli[st] = {
            "tries": 0,
            "successes": 0
        };
        
        that.saveGames();
    }
    
    this.resetGameProgress = function () {
        openedMapID = "sea1";
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
        this.savedGames = Storage.loadObject("savedGames");
        
        if (!this.savedGames)
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
        
        // record the activity as played today
        if (!isTodaysRecordCreated()) {
            createRecordObject();
        }
        
        this.savedGames[
            selectedSavedGame
        ].records[
            todaysDate
        ].playedActivities.push(activity);
        
        this.saveGames();
    };
    
    this.unlockActivity = function (activity) {
        this.savedGames[
            selectedSavedGame
        ].activities[activity].unlocked = true;
        this.openedActivityID = activity;
        
        this.saveGames();
    };
    
    this.addStimulusTryRecord = function (stimulus) {
        // record the activity as played today
        if (!isTodaysRecordCreated()) {
            createRecordObject();
        }
        
        if (!isStimulusRecordCreated(stimulus)) {
            createStimuliRecord(stimulus)
        }
        
        this.savedGames[
            selectedSavedGame
        ].records[
            todaysDate
        ].stimuli[stimulus].tries += 1;
        
        this.saveGames();
    };
    
    this.addStimulusSuccessRecord = function (stimulus) {
        // record the activity as played today
        if (!isTodaysRecordCreated()) {
            createRecordObject();
        }
        
        if (!isStimulusRecordCreated(stimulus)) {
            createStimuliRecord(stimulus)
        }
        
        this.savedGames[
            selectedSavedGame
        ].records[
            todaysDate
        ].stimuli[stimulus].successes += 1;
        
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
    
    this.getRecord = function (recordNumber) {
        return this.savedGames[
            recordNumber
        ].records;
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