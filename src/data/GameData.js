var MAP_TRANSITIONS = Object.freeze({
    sea: "beach",
//    beach: "sky",
//    sky: "space"
});

var ACTIVITY_TRANSITIONS = Object.freeze({
    rocks: "oysters",
    oysters: "chests",
    chests: "bubbles",
    bubbles: "jellyfish",
    jellyfish: "octopus",
    octopus: "fisherman1",
    fisherman1: "fisherman2",
    fisherman2: "crabs1",
    crabs1: "turtles",
    turtles: "crabs2",
    crabs2: "buckets",
    buckets: "turtles2"
});

// possible timed activity options directions
var DOWN_DIRECTION = 0;
var RIGHT_DIRECTION = 1;

var TIMED_LEVEL = "T";
var UNIQUE_ANSWER = "UR";

// 93 activities
var world = {
    sea: {
        rocks: {
            stimuli: ["a", "e", "i", "o", "u"],
            distractions: ["a", "e", "i", "o", "u"],
            activityID: "rocks",
            activityType: "rocks",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        oysters: {
            stimuli: ["ae", "ai", "ao", "au"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["a", "e", "i", "o", "u"],
            activityID: "oysters",
            activityType: "oysters",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        chests: {
            stimuli: ["ea", "ei", "eo", "eu"],
            review: ["ae", "ai", "ao", "au"],
            distractions: [
                "a", "e", "i", "o", "u",
                "ae", "ai", "ao", "au"
            ],
            activityID: "chests",
            activityType: "chests",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        bubbles: {
            stimuli: ["ia", "ie", "io", "iu"],
            review: [
                "ea", "ei", "eo", "eu"
            ],
            distractions: [
                "ae", "ai", "ao", "au",
                "ea", "ei", "eo", "eu"
            ],
            activityID: "bubbles",
            activityType: "bubbles",
            backgroundImgs: [
                seaImgRes.seaMiddle_png,
                seaImgRes.seaOctopus_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        jellyfish: {
            stimuli: [
                "ia", "ie", "io", "iu",
                "ea", "ei", "eo", "eu",
                "ae", "ai", "ao", "au",
                "a", "e", "i", "o", "u"
            ],
            distractions: [
                "a", "e", "i", "o", "u",
                "ia", "ie", "io", "iu",
                "ae", "ai", "ao", "au",
                "ea", "ei", "eo", "eu"
            ],
            activityID: "jellyfish",
            activityType: "jellyfish",
            backgroundImgs: [
                seaImgRes.seaMiddle_png,
                seaImgRes.jellyfish_png
            ],
            type: TIMED_LEVEL,
            time: 10,
            goal: 10
        },
        octopus: {
            stimuli: ["oa", "oe", "oi", "ou"],
            review: ["ia", "ie", "io", "iu"],
            distractions: [
                "ia", "ie", "io", "iu",
                "ae", "ai", "ao", "au",
                "ea", "ei", "eo", "eu"
            ],
            activityID: "octopus",
            activityType: "octopus",
            backgroundImgs: [
                seaImgRes.seaMiddle_png,
                seaImgRes.seaOctopus_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        fisherman1: {
            stimuli: ["ua", "ue", "ui", "uo"],
            review: ["oa", "oe", "oi", "ou"],
            distractions: ["ia", "ie", "io", "iu"],
            activityID: "fisherman1",
            activityType: "fisherman",
            backgroundImgs: [seaImgRes.seaTop_png],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        fisherman2: {
            stimuli: [
                "a", "e", "i", "o", "u",
                "ua", "ue", "ui", "uo",
                "oa", "oe", "oi", "ou",
                "ia", "ie", "io", "iu",
                "ae", "ai", "ao", "au",
                "ea", "ei", "eo", "eu"
            ],
            distractions: [
                "a", "e", "i", "o", "u",
                "ua", "ue", "ui", "uo",
                "oa", "oe", "oi", "ou",
                "ia", "ie", "io", "iu",
                "ae", "ai", "ao", "au",
                "ea", "ei", "eo", "eu"
            ],
            activityID: "fisherman2",
            activityType: "fisherman",
            backgroundImgs: [seaImgRes.seaTop_png],
            type: TIMED_LEVEL,
            time: 10,
            goal: 10
        }
    },
    beach: {
        crabs1: {
    		stimuli: [
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "sa", "se", "si", "so", "su"
            ],
    		distractions: [
                "a", "e", "i", "o", "u", 
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "sa", "se", "si", "so", "su"
            ],
            activityID: "crabs1",
            activityType: "crabs",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        turtles: {
    		stimuli: [
                "la", "le", "li", "lo", "lu",
                "fa", "fe", "fi", "fo", "fu",
                "pa", "pe", "pi", "po", "pu"
            ],
    		distractions: [
                "a", "e", "i", "o", "u",
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "sa", "se", "si", "so", "su"
            ],
            activityID: "turtles",
            activityType: "turtles",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        crabs2: {
    		stimuli: [
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "sa", "se", "si", "so", "su",
                "la", "le", "li", "lo", "lu",
                "fa", "fe", "fi", "fo", "fu",
                "pa", "pe", "pi", "po", "pu"
            ],
    		distractions: [
                "a", "e", "i", "o", "u",
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "sa", "se", "si", "so", "su",
                "la", "le", "li", "lo", "lu",
                "fa", "fe", "fi", "fo", "fu",
                "pa", "pe", "pi", "po", "pu"
            ],
            activityID: "crabs2",
            activityType: "crabs",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        buckets: {
    		stimuli: [
                "ta", "te", "ti", 'to', 'tu',
                'ba', 'be', 'bi', 'bo', 'bu',
                'da', 'de', 'di', 'do', 'du'
            ],
    		distractions: [
                "a", "e", "i", "o", "u",
                "ta", "te", "ti", "to", "tu",
                "ba", "be", "bi", "bo", "bu",
                "da", "de", "di", "do", "du"
            ],
            activityID: "buckets",
            activityType: "buckets",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        turtles2: {
    		stimuli: [
                'am', 'em', 'im', 'om', 'um',
                'as', 'es', 'is', 'os', 'us',
                'ap', 'ep', 'ip', 'op', 'up'
            ],
    		"distractions": [
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "pa", "pe", "pi", "po", "pu"
            ],
            activityID: "turtles2",
            activityType: "turtles",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	}
//        {
//    		"stimuli": [
//                'am', 'em', 'im', 'om', 'um',
//                'as', 'es', 'is', 'os', 'us',
//                'ap', 'ep', 'ip', 'op', 'up'
//            ],
//    		"distractions": [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//                "sa", "se", "si", "so", "su",
//                "pa", "pe", "pi", "po", "pu"
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'an', 'en', 'in', 'on', 'un',
//                'al', 'el', 'il', 'ol', 'ul',
//                'ab', 'eb', 'ib', 'ob', 'ub',
//                'ad', 'ed', 'id', 'od', 'ud'
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "la", "le", "li", "lo", "lu",
//                "na", "ne", "ni", "no", "nu",
//                'ba', 'be', 'bi', 'bo', 'bu',
//                'da', 'de', 'di', 'do', 'du'
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	}
    }
//    sky: [
//        {
//            "stimuli": ["bla", "ble", "bli", "blo", "blu"],
//    		"distractions": [
//                'ba', 'be', 'bi', 'bo', 'bu'
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "fla", "fle", "fli", "flo", "flu",
//                "pla", "ple", "pli", "plo", "plu"
//            ],
//    		"distractions": [
//                "fa", "fe", "fi", "fo", "fu",
//                "pa", "pe", "pi", "po", "pu"
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'ca', 'que', 'qui', 'co', 'cu'
//            ],
//    		"distractions": [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'va', 've', 'vi', 'vo', 'vu',
//                'lla', 'lle', 'lli', 'llo', 'llu',
//                'ha', 'he', 'hi', 'ho', 'hu',
//                'ya', 'ye', 'yi', 'yo', 'yu'
//            ],
//    		"distractions": [],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'cha', 'che', 'chi', 'cho', 'chu',
//                'cla', 'cle', 'cli', 'clo', 'clu'
//            ],
//    		"distractions": ['ca', 'que', 'qui', 'co', 'cu'],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'fla', 'fle', 'fli', 'flo', 'flu',
//                'pla', 'ple', 'pli', 'plo', 'plu',
//                'ca', 'que', 'qui', 'co', 'cu',
//                'va', 've', 'vi', 'vo', 'vu',
//                'lla', 'lle', 'lli', 'llo', 'llu',
//                'ha', 'he', 'hi', 'ho', 'hu',
//                'ya', 'ye', 'yi', 'yo', 'yu',
//                'cha', 'che', 'chi', 'cho', 'chu',
//                'cla', 'cle', 'cli', 'clo', 'clu'
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ga", "gue", "gui", "go", "gu"
//            ],
//    		"distractions": [
//                'va', 've', 'vi', 'vo', 'vu',
//                'lla', 'lle', 'lli', 'llo', 'llu',
//                'ha', 'he', 'hi', 'ho', 'hu'
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ga", "gue", "gui", "go", "gu",
//                'ca', 'que', 'qui', 'co', 'cu'
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "gue", "gui", 'que', 'qui'
//            ],
//    		"distractions": ['ge', 'gi'],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "güe", "güi"
//            ],
//    		"distractions": [
//                'gue', 'gui', 'que', 'qui',
//                'ga', 'go', 'gu'
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	}
//    ],
//    space: [
//        {
//    		"stimuli": [
//                "ra", "re", "ri", "ro", "ru",
//                "ja", "je", "ji", "jo", "ju",
//                "za", "ze", "zi", "zo", "zu"
//            ],
//    		"distractions": ['..'],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//            "stimuli": [
//                "ara", "are", "ari", "aro", "aru",
//                "era", "ere", "eri", "ero", "eru",
//                "ira", "ire", "iri", "iro", "iru",
//                "ora", "ore", "ori", "oro", "oru",
//                "ura", "ure", "uri", "uro", "uru",
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ara", "ere", "iri", "oro", "uru",
//                "arra", "arre", "arri", "arro", "arru"
//            ],
//    		"distractions": ['..'],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'ge', 'gi', 'ce', 'ci'
//            ],
//    		"distractions": [
//                "va", "ve", "vi", "vo", "vu",
//                "lla", "lle", "lli", "llo", "llu",
//                "ha", "he", "hi", "ho", "hu",
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'ge', 'gi', 'ce', 'ci'
//            ],
//    		"distractions": [
//                'gue', 'gui', 'qui', 'que', 'gu',
//                'ca', 'co', 'cu', 'ga', 'go'
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'ga', 'gue', 'gui', 'go', 'gu',
//                'ja', 'je', 'ji', 'jo', 'ju',
//                'ge', 'gi'
//            ],
//    		"distractions": [
//                "va", "ve", "vi", "vo", "vu",
//                "lla", "lle", "lli", "llo", "llu",
//                "ha", "he", "hi", "ho", "hu",
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ra", "re", "ri", "ro", "ru",
//                "ja", "je", "ji", "jo", "ju",
//                "za", "ze", "zi", "zo", "zu",
//                'ga', 'gue', 'gui', 'go', 'gu',
//                'ja', 'je', 'ji', 'jo', 'ju',
//                'ge', 'gi',
//                "arra", "arre", "arri", "arro", "arru"
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "bra", "bre", "bri", "bro", "bru",
//                "cra", "cre", "cri", "cro", "cru",
//                "dra", "dre", "dri", "dro", "dru"
//            ],
//    		"distractions": [
//                "ba", "be", "bi", "bo", "bu",
//                "da", "de", "di", "do", "du",
//                "ca", 'co', 'cu'
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "fra", "fre", "fri", "fro", "fru",
//                "pra", "pre", "pri", "pro", "pru",
//                "gra", "gre", "gri", "gro", "gru",
//                "tra", "tre", "tri", "tro", "tru"
//            ],
//    		"distractions": [
//                "fa", "fe", "fi", "fo", "fu",
//                "pa", "pe", "pi", "po", "pu",
//                "ga", "gue", "gui", "go", "gu",
//                "ta", "te", "ti", "to", "tu"
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ña", "ñe", "ñi", "ño", "ñu",
//                "ka", "ke", "ki", "ko", "ku",
//                "wa", "we", "wi", "wo"
//            ],
//    		"distractions": ['..'],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ax", "ex", "ix", "ox", "ux",
//                "ac", "ec", "ic", "oc", "uc"
//            ],
//    		"distractions": [
//                "as", "es", "is", "os", "us",
//                "ap", "ep", "ip", "op", "up"
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	}
};
