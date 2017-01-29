var REPETITIONS_DEFAULT = 5,
    REVIEW_REPETITIONS_DEFAULT = 2;

function StimuliPicker() {
    var stimuliList,
        stimuliRepetitions,
        stimuliReviewRep,
        stimuli,
        stimuliReview;
    
    // returns a new stimuli to be tested
    // return String
    function getRandomStimuli() {
        var randomPick = Math.random() * stimuli.length;
        randomPick = Math.floor(randomPick); // only integers
        
        return stimuli[randomPick];
    };
    
    this.buildStimuliList = function (s, sr) {
        if (!stimuliRepetitions)
            stimuliRepetitions = REPETITIONS_DEFAULT;
        if (!stimuliReviewRep)
            stimuliReviewRep = REVIEW_REPETITIONS_DEFAULT;
        
        stimuli = s;
        stimuliReview = sr;
        
        stimuliList = [];
        
        // create a stimuli list with the stimuli repeated
        // the set amount of repetitions
        for (var i = 0; i < stimuliRepetitions; i++) {
            stimuliList = stimuliList.concat(stimuli);
        }
        
        if (sr) {
            for (var i = 0; i < stimuliReviewRep; i++) {
                stimuliList = stimuliList.concat(stimuliReview);
            }
        }
        
        // randomize the order of stimuli
        shuffle(stimuliList);
    };
    
    this.setRepetitionValues = function (rep, revRep) {
        stimuliRepetitions = rep;
        stimuliReviewRep = revRep;
    };
    
    this.getNextStimuli = function () {
        var stimuli = stimuliList.pop();
        
        if (!stimuli)
            stimuli = getRandomStimuli();
        
        return stimuli;
    };
    
    this.getStimuliLength = function () {
        return stimuliList.length;
    };
};