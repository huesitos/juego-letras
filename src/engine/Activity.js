var FUEL_CHANGED_EVENT = "fuelChanged";
var QUESTION_CHECKED = "questionChecked";

function Activity(activityData) {
    //////////////////////////////
    // 2. create members and initialize
    var activityScore; // max is activity goal
    var scorePerAnswer; // score for each right answer
    var wrongsCount; // determines stars for activities
    var rightAnswer; // changes for each question
    var questionOptions; // array with distractions and answer
    var numberOfQuestions; // number of questions to answer complete activity
    var progress; // keeps track of time for timed activities
    
    activityScore = 0;
    numberOfQuestions = 2;
    scorePerAnswer = activityData.goal / numberOfQuestions;
    wrongsCount = 0;
    rightAnswer = "";
    progress = 0; // for timed activities
    
    var that = this;
    
    //////////////////////////////
    // 2. create methods
    
    // returns a new stimulus to be tested
    // return String
    function getRandomStimulus() {
        var randomPick = Math.random() * activityData["stimuli"].length;
        randomPick = Math.floor(randomPick); // only integers
        
        return activityData["stimuli"][randomPick];
    };
    
    // returns an array with two stimulus differnt from the right answer
    // @param stimulus - the chosen right answer
    // @param amount - number of distractions
    // return Array - array of distractions
    function getRandomDistractions(stimulus, amount = 2) {
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
    
    // picks a right answer, the distractions, and returns
    // a shuffled list with all that
    function setQuestion() {
        var stimulus = getRandomStimulus();
        rightAnswer = stimulus;
        
        var distractions = getRandomDistractions(stimulus);
        distractions.push(stimulus);
        
        questionOptions = distractions;
        shuffle(questionOptions);
    };
    setQuestion();
    
    function onRightAnswer() {
        activityScore += scorePerAnswer;
        GD.gameState.currentFuelScore += scorePerAnswer;
        
        if (that.isTimedActivity()) {
            progress = 0;
        }
    };
    
    function onWrongAnswer() {
        wrongsCount++;
    };
    
    // TODO: write a get activity summary for saving
    // move saving to the map, and the map to a game
    // storage
//    function saveActivityResults() {
//        var earnedStars;
//        
//        if (wrongsCount === 0) {
//            earnedStars = 3;
//        } else if (wrongsCount <= 3) {
//            earnedStars = 2;
//        } else if (wrongsCount <= 5) {
//            earnedStars = 1;
//        } else {
//            earnedStars = 0;
//        }
//        
//        var results = {
//            stars: earnedStars
//        }
//        var itemKey = map + levelNum;
//        
////        cc.sys.localStorage.setItem(
////            JSON.stringify(itemKey), 
////            JSON.stringify(results)
////        );
//    };
    
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
        progress = 0; // reset timer because question was answered
        
        var event; // to be dispatched at the end
        
        if (correctness) {
            onRightAnswer();
        } else {
            onWrongAnswer();
        }
        
        setQuestion();
        
        // notify that the question has been checked
        event = new cc.EventCustom(QUESTION_CHECKED);
        event.setUserData({correctness: correctness});
        cc.eventManager.dispatchEvent(event);
    };
        
    this.isTimedActivity = function () {
        return activityData["type"] === TIMED_LEVEL;
    };

    this.skipQuestion = function () {
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
    
    this.isActivityCompleted = function () {
        return activityScore >= activityData["goal"];
    }
};
