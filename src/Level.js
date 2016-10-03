var TIMED_LEVEL = "T";

function Level(map, levelNum) {
    // load level
    var levelData = copyObject(world[map][levelNum]);
    cc.log(levelData);
    // cc.log(cc.sys.localStorage.getItem(JSON.stringify(map+levelNum)));
    
    // initialize variables
    var score; // max is level goal
    var scorePerAnswer; // score for each right answer
    var wrongsCount; // determines stars
    var currentRightAnswer; // changes for each question
    var questionOptions; // array with distractions and answer
    score = 0;
    scorePerAnswer = 10;
    wrongsCount = 0;
    currentRightAnswer = "";
    
    var that = this;
    
    function getRandomStimulus() {
        var randomPick = Math.random() * levelData["stimuli"].length;
        randomPick = Math.floor(randomPick); // only integers
        
        return levelData["stimuli"][randomPick];
    };
    
    function getRandomDistractions(stimulus, amount = 0) {
        // copy list
        var distractions = levelData["distractions"].slice();
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
        currentRightAnswer = stimulus;
        cc.log("answer: " + currentRightAnswer);
        
        var distractions = getRandomDistractions(stimulus, 2);
        distractions.push(stimulus);
        
        questionOptions = distractions;
        shuffle(questionOptions);
    };
    setQuestion();
    
    function onRightAnswer() {
        score += scorePerAnswer;
        
        if (that.isTimedLevel()) {
            progress = 0;
        }
        cc.log("score: " + score);
    };
    
    function onWrongAnswer() {
        wrongsCount++;
        cc.log("wrongs: " + wrongsCount);
    };
    
    function saveLevelResults() {
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
        
        cc.sys.localStorage.setItem(
            JSON.stringify(itemKey), 
            JSON.stringify(results)
        );
    };
    
    this.isLevelCompleted = function () {
        return score >= levelData["goal"];
    };
    
    this.getQuestionOptions = function () {    
        return questionOptions;
    };
    
    this.checkAnswer = function (option) {
        var correctness = option === currentRightAnswer;
        
        if (correctness) {
            onRightAnswer();
            
            if (this.isLevelCompleted()) {
                cc.log("level is completed");
                saveLevelResults();
            }
        } else {
            onWrongAnswer();
        }
        
        setQuestion();
        
        return correctness;
    };
    
    this.isTimedLevel = function () {
        return levelData["type"] === TIMED_LEVEL;
    }
    
    if (levelData["type"] === TIMED_LEVEL) {
        cc.log("timed level");
        var progress = 0;
        
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
            return progress >= levelData["time"];
        };
    }
};
