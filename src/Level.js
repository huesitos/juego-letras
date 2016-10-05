var TIMED_LEVEL = "T";
var FUEL_CHANGED_EVENT = "fuelChanged";
var LEVEL_COMPLETED_EVENT = "levelCompleted";

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
    
    var score; // max is level goal
    var scorePerAnswer; // score for each right answer
    var wrongsCount; // determines stars for activities
    var rightAnswer; // changes for each question
    var questionOptions; // array with distractions and answer
    score = 0;
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
    
    this.setQuestion = function () {
        var stimulus = getRandomStimulus();
        rightAnswer = stimulus;
        cc.log("answer: " + rightAnswer);
        
        var distractions = getRandomDistractions(stimulus, 2);
        distractions.push(stimulus);
        
        questionOptions = distractions;
        shuffle(questionOptions);
    };
    
    function onRightAnswer() {
        score += scorePerAnswer;
        
        var fuelChangedEvent = new cc.EventCustom(FUEL_CHANGED_EVENT);
        fuelChangedEvent.setUserData({fuel: scorePerAnswer});
        cc.eventManager.dispatchEvent(fuelChangedEvent);
        
        if (that.isTimedActivity()) {
            progress = 0;
        }
        cc.log("score: " + score);
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
    
    this.isActivityCompleted = function () {
        return score >= activityData["goal"];
    };
    
    this.isLevelCompleted = function () {
        return score >= levelGoal;
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
        
        if (correctness) {
            onRightAnswer();
            
            if (this.isActivityCompleted()) {
                saveActivityResults();
                
                // level is completed
                if (score === levelGoal) {
                    var levelCompletedEvent = new cc.EventCustom(LEVEL_COMPLETED_EVENT);
                    cc.eventManager.dispatchEvent(levelCompletedEvent);
                    
                    saveLevelResults();
                } else {
                    currentActivity++;
                    
                    activityData = copyObject(levelData.activities[currentActivity]);
                }
            }
        } else {
            onWrongAnswer();
        }
        
        this.setQuestion();
        
        return correctness;
    };
    
    this.getActivity = function () {
        return activityData["activity"];
    };
    
    this.isTimedActivity = function () {
        return activityData["type"] === TIMED_LEVEL;
    };
    
    if (activityData["type"] === TIMED_LEVEL) {
        cc.log("timed level");
        var progress = 0;
        
        this.skipQuestion = function () {
            cc.log("skipping question");
            progress = 0;
            
            onWrongAnswer();
            this.setQuestion();
        };
        
        this.tick = function (dt) {
            progress += dt;
        };
        
        this.hasTimerFinished = function () {
            return progress >= activityData["time"];
        };
    }
};
