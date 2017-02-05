var QUESTION_CHECKED = "questionChecked";
var ACTIVITY_COMPLETED = "activityCompleted";

function Activity(activityData) {    
    //////////////////////////////
    // 1. create members and initialize
    var activityScore; // max is activity goal
    var scorePerAnswer; // score for each right answer
    var wrongsCount; // determines stars for activities
    var rightAnswer; // changes for each question
    var questionOptions; // array with distractions and answer
    var numberOfQuestions; // number of questions to answer complete activity
    var progress; // keeps track of time for timed activities
    
    // set stimuli picker for the activity
    var stimuliPicker = new StimuliPicker();
    stimuliPicker.buildStimuliList(
        activityData["stimuli"],
        activityData["review"]
    );
    
    activityScore = 0;
    // the minimum amount of questions is determined
    // by the amount of repetitions
    numberOfQuestions = stimuliPicker.getStimuliLength();
    scorePerAnswer = activityData["goal"] / numberOfQuestions;
    wrongsCount = 0;
    rightAnswer = "";
    progress = 0; // for timed activities
    
    var that = this;
    
    //////////////////////////////
    // 2. create methods
    
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
    this.changeQuestion = function () {
        var stimulus = stimuliPicker.getNextStimuli();
        rightAnswer = stimulus;
        
        var distractions = getRandomDistractions(stimulus);
        distractions.push(stimulus);
        
        questionOptions = distractions;
        shuffle(questionOptions);
    };
    
    function onRightAnswer() {
        activityScore += scorePerAnswer;
        
        if (that.isTimedActivity()) {
            progress = 0;
        }
    };
    
    function onWrongAnswer() {
        wrongsCount++;
    };
    
    // get earned stars based on the wrong answers cout
    this.getEarnedStars = function () {
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
        
        return earnedStars;
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
        progress = 0; // reset timer because question was answered
        
        var event; // to be dispatched at the end
        
        if (correctness) {
            onRightAnswer();
        } else {
            onWrongAnswer();
        }
        
        this.changeQuestion();
        
        // notify that the question has been checked
        event = new cc.EventCustom(QUESTION_CHECKED);
        event.setUserData({correctness: correctness});
        cc.eventManager.dispatchEvent(event);
        
        if (this.isActivityCompleted())
            cc.eventManager.dispatchCustomEvent(ACTIVITY_COMPLETED);
    };
        
    this.isTimedActivity = function () {
        return activityData["type"] === TIMED_LEVEL;
    };

    this.skipQuestion = function () {
        progress = 0;
        
        onWrongAnswer();
        this.changeQuestion();
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
    };
    
    this.getActivityGoal = function () {
        return activityData["goal"];
    };
    
    this.getActivityScore = function () {
        return activityScore;
    };
};
