var FUEL_CHANGED_EVENT = "fuelChanged";
var LEVEL_COMPLETED_EVENT = "levelCompleted";
var ACTIVITY_FINISHED_EVENT = "activityFinished";
var QUESTION_CHECKED = "questionChecked";

function Level(map, levelNum) {
    // load level
    var levelData = copyObject(world[map][levelNum]);
    var currentActivity; // the activity being played
    var activityData; // the data of the activity being played
    currentActivity = 0;
    activityData = levelData.activities[currentActivity];
    
    // initialize variables
    var levelGoal = levelData.activities.map(
        function (activity) {
            return activity.goal;
        }
    ).reduce(function (pre, cur) {
        return pre + cur;
    });
    
    var levelScore; // max is level goal
    var activityScore; // max is activity goal
    var scorePerAnswer; // score for each right answer
    var wrongsCount; // determines stars for activities
    var rightAnswer; // changes for each question
    var questionOptions; // array with distractions and answer
    levelScore = 0;
    activityScore = 0;
    /*
    each activity corresponds to:
    100 / 2 = 50
    
    each correct answer adds:
    50 / goal
    */
    scorePerAnswer = (100 / levelData.activities.length) / activityData.goal;
    cc.log(scorePerAnswer);
    wrongsCount = 0;
    rightAnswer = "";
    
    var progress = 0; // for timed activities
    
    var that = this;
    
    function getRandomStimulus() {
        var randomPick = Math.random() * activityData["stimuli"].length;
        randomPick = Math.floor(randomPick); // only integers
        
        return activityData["stimuli"][randomPick];
    };
    
    function getRandomDistractions(stimulus, amount = 0) {
        // copy list
        var distractions = activityData["distractions"].slice();
        var stimulusIndex = distractions.indexOf(stimulus);
        // remove the selected stimulus from the list of distractions
        // in case it exists
        if (stimulusIndex > -1) {
            distractions.splice(stimulusIndex, 1);
        };
        
        var selectedDist = [];
        var pickIndex; // distraction index random pick
        
        for (var i = 0; i < amount; i++) {
            pickIndex = randomNumber(0, distractions.length);
            selectedDist.push(distractions[pickIndex]);
            distractions.splice(pickIndex, 1); // don't repeat distractions
        }
        
        return selectedDist;
    };
    
    function setQuestion() {
        var stimulus = getRandomStimulus();
        rightAnswer = stimulus;
        cc.log("answer: " + rightAnswer);
        
        var distractions = getRandomDistractions(stimulus, 2);
        distractions.push(stimulus);
        
        questionOptions = distractions;
        shuffle(questionOptions);
        cc.log("question has been set");
        cc.log(questionOptions);
    };
    setQuestion();
    
    function onRightAnswer() {
        activityScore += scorePerAnswer;
        levelScore += scorePerAnswer;
        
        var fuelChangedEvent = new cc.EventCustom(FUEL_CHANGED_EVENT);
        fuelChangedEvent.setUserData({fuel: scorePerAnswer});
        cc.eventManager.dispatchEvent(fuelChangedEvent);
        
        if (that.isTimedActivity()) {
            progress = 0;
        }
    };
    
    function onWrongAnswer() {
        wrongsCount++;
        cc.log("wrongs: " + wrongsCount);
    };
    
    function saveActivityResults() {
        var earnedStars;
        
        if (wrongsCount === 0) {
            earnedStars = 3;
        } else if (wrongsCount <= 3) {
            earnedStars = 2;
        } else if (wrongsCount <= 5) {
            earnedStars = 1;
        } else {
            earnedStars = 0;
        }
        
        var results = {
            stars: earnedStars
        }
        var itemKey = map + levelNum;
        
//        cc.sys.localStorage.setItem(
//            JSON.stringify(itemKey), 
//            JSON.stringify(results)
//        );
    };
    
    function saveLevelResults() {}
    
    this.isLevelCompleted = function () {
        return levelScore >= levelGoal;
    };
    
    this.getQuestionOptions = function () {    
        return questionOptions;
    };
    
    this.getRightOption = function () {
        return rightAnswer;
    };
    
    this.playOptionAudio = function () {
        cc.audioEngine.playEffect(stimuliRes[rightAnswer]);
    };
    
    this.checkAnswer = function (option) {
        var correctness = option === rightAnswer;
        progress = 0;
        
        var event; // to be dispatched at the end
        
        if (correctness) {
            onRightAnswer();
        } else {
            onWrongAnswer();
        }
        
        if (activityScore >= activityData["goal"]) {
            saveActivityResults();

            // level is completed
            if (levelScore === levelGoal) {
                cc.log("level completed");
                saveLevelResults();
                GD.loadNextLevel();
                
                event = new cc.EventCustom(LEVEL_COMPLETED_EVENT);
            } else {
                cc.log("activity completed");
                activityScore = 0;
                currentActivity++;
                activityData = copyObject(levelData.activities[currentActivity]);

                event = new cc.EventCustom(ACTIVITY_FINISHED_EVENT);
            }
        } else {
            event = new cc.EventCustom(QUESTION_CHECKED);
            event.setUserData({correctness: correctness});
        }
        
        setQuestion();
        cc.eventManager.dispatchEvent(event);
    };
    
    this.getActivity = function () {
        return activityData["activity"];
    };
    
    this.isTimedActivity = function () {
        return activityData["type"] === TIMED_LEVEL;
    };

    this.skipQuestion = function () {
        cc.log("skipping question");
        progress = 0;
        
        onWrongAnswer();
        setQuestion();
    };

    this.tick = function (dt) {
        progress += dt;
    };

    this.hasTimerFinished = function () {
        return progress >= activityData["time"];
    };
    
    this.getTotalTime = function () {
        return activityData["time"];
    };
    
    this.getLevelScore = function () {
        return levelScore;
    };
};
