var MAP_TRANSITIONS = Object.freeze({
    sea: "beach",
    beach: "earth",
//    beach: "sky",
//    sky: "space"
});

// possible timed activity options directions
var DOWN_DIRECTION = 0;
var RIGHT_DIRECTION = 1;

var TIMED_LEVEL = "T";
var UNIQUE_ANSWER = "UR";

// 94 activities
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
            distractions: ["ea", "ia", "oa", "ua"],
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
            review: ["a", "e", "i", "o", "u"],
            distractions: ["ae", "ia", "oe", "ue"],
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
            stimuli: ["ia", "ei", "eo", "eu"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["ai", "ie", "oe", "ue"],
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
            stimuli: ["oa", "oe", "oi", "ou"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["ao", "eo", "ui", "uo"],
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
            stimuli: ["ua", "ue", "ui", "uo"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["au", "eu", "ou", "ea"],
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
//            stimuli: ["m", "n", "s"],
            stimuli: ["a", "e", "i", "o", "u"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["a", "e", "i", "o", "u"],
            activityID: "fisherman1",
            activityType: "fisherman",
            backgroundImgs: [seaImgRes.seaTop_png],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        fisherman2: {
            stimuli: ["ma", "me", "mi", "mo", "mu"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["na", "ne", "ni", "no", "nu"],
            activityID: "fisherman2",
            activityType: "fisherman",
            backgroundImgs: [seaImgRes.seaTop_png],
            type: TIMED_LEVEL,
            time: 10,
            goal: 10
        },
//        crabs1: {
//    		stimuli: ["na", "ne", "ni", "no", "nu"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["ma", "me", "mi", "mo", "mu"],
//            activityID: "crabs1",
//            activityType: "crabs",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        turtles: {
//    		stimuli: ["sa", "se", "si", "so", "su"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu"
//            ],
//            activityID: "turtles",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        crabs2: {
//    		stimuli: ["l", "f", "p"],
//            review: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//                "sa", "se", "si", "so", "su"
//            ],
//            distractions: ["m", "n", "s"],
//            activityID: "crabs2",
//            activityType: "crabs",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        buckets: {
//    		stimuli: ["la", "le", "li", "lo", "lu"],
//            review: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//                "sa", "se", "si", "so", "su"
//            ],
//            distractions: [
//                "ma", "me", "mi", "mo", "mu", 
//                "na", "ne", "ni", "no", "nu"
//            ],
//            activityID: "buckets",
//            activityType: "buckets",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        turtles2: {
//    		stimuli: ["fa", "fe", "fi", "fo", "fu"],
//            review: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//                "sa", "se", "si", "so", "su"
//            ],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        oyster: {
//    		stimuli: ["pa", "pe", "pi", "po", "pu"],
//            review: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//                "sa", "se", "si", "so", "su"
//            ],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ma", "me", "mi", "mo", "mu"],
//            review: ["la", "le", "li", "lo", "lu"],
//            distractions: ["na", "ne", "ni", "no", "nu"],,
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["na", "ne", "ni", "no", "nu"],
//            review: ["fa", "fe", "fi", "fo", "fu"],
//            distractions: ["ma", "me", "mi", "mo", "mu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["sa", "se", "si", "so", "su"],
//            review: ["pa", "pe", "pi", "po", "pu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["la", "le", "li", "lo", "lu"],
//            review: ["sa", "se", "si", "so", "su"],
//            distractions: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu"
//            ],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["fa", "fe", "fi", "fo", "fu"],
//            review: ["na", "ne", "ni", "no", "nu"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["pa", "pe", "pi", "po", "pu"],
//            review: ["ma", "me", "mi", "mo", "mu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["t", "b", "d"],
//            review: ["l", "f", "p", "m", "n"],
//            distractions: ["l", "f", "p", "m", "n"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ta", "te", "ti", "to", "tu"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ba", "be", "bi", "bo", "bu"],
//            review: ["ta", "te", "ti", "to", "tu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["da", "de", "di", "do", "du"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["am", "em", "im", "om", "um"],
//            review: ["na", "ne", "ni", "no", "nu"],
//            distractions: ["da", "de", "di", "do", "du"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["as", "es", "is", "os", "us"],
//            review: ["fa", "fe", "fi", "fo", "fu"],
//            distractions: ["la", "le", "li", "lo", "lu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ap", "ep", "ip", "op", "up"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["ma", "me", "mi", "mo", "mu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["am", "em", "im", "om", "um"],
//            review: ["ap", "ep", "ip", "op", "up"],
//            distractions: ["ma", "me", "mi", "mo", "mu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["as", "es", "is", "os", "us"],
//            review: ["am", "em", "im", "om", "um"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ap", "ep", "ip", "op", "up"],
//            review: ["as", "es", "is", "os", "us"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["an", "en", "in", "on", "un"],
//            review: ["ap", "ep", "ip", "op", "up"],
//            distractions: ["as", "es", "is", "os", "us"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	}
    },
    beach: {
        crabs1: {
    		stimuli: ["al", "el", "il", "ol", "ul"],
            review: ["as", "es", "is", "os", "us"],
            distractions: ["am", "em", "im", "om", "um"],
            activityID: "crabs1",
            activityType: "crabs",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
        turtles1: {
    		stimuli: ["ab", "eb", "ib", "ob", "ub"],
            review: ["am", "em", "im", "om", "um"],
            distractions: ["ap", "ep", "ip", "op", "up"],
            activityID: "turtles1",
            activityType: "turtles",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
        crabs2: {
    		stimuli: ["ad", "ed", "id", "od", "ud"],
            review: ["as", "es", "is", "os", "us"],
            distractions: ["ap", "ep", "ip", "op", "up"],
            activityID: "crabs2",
            activityType: "crabs",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
        buckets: {
    		stimuli: ["an", "en", "in", "on", "un"],
            review: ["al", "el", "il", "ol", "ul"],
            distractions: ["na", "ne", "ni", "no", "nu"],
            activityID: "buckets",
            activityType: "buckets",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
        turtles2: {
    		stimuli: ["al", "el", "il", "ol", "ul"],
            review: ["ab", "eb", "ib", "ob", "ub"],
            distractions: ["la", "le", "li", "lo", "lu"],
            activityID: "turtles2",
            activityType: "turtles",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
//        oyster: {
//    		stimuli: ["ab", "eb", "ib", "ob", "ub"],
//            review: ["ad", "ed", "id", "od", "ud"],
//            distractions: ["ba", "be", "bi", "bo", "bu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ad", "ed", "id", "od", "ud"],
//            review: ["an", "en", "in", "on", "un"],
//            distractions: ["da", "de", "di", "do", "du"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["bla", "ble", "bli", "blo", "blu"],
//            review: ["fa", "fe", "fi", "fo", "fu"],
//            distractions: [
//                "ba", "be", "bi", "bo", "bu",
//                "pa", "pe", "pi", "po", "pu"
//            ],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["fla", "fle", "fli", "flo", "flu"],
//            review: ["pa", "pe", "pi", "po", "pu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["pla", "ple", "pli", "plo", "plu"],
//            review: ["ca", "ce", "ci", "co", "cu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["c", "q"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["m", "n", "s", "l", "f", "p"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ca", "que", "qui", "co", "cu"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu"
//            ],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["c", "q"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["m", "n", "s", "l", "f", "p"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["va", "ve", "vi", "vo", "vu"],
//            review: ["la", "le", "li", "lo", "lu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["lla", "lle", "lli", "llo", "llu"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["fla", "fle", "fli", "flo", "flu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ha", "he", "hi", "ho", "hu"],
//            review: ["fa", "fe", "fi", "fo", "fu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ya", "ye", "yi", "yo", "yu"],
//            review: ["pla", "ple", "pli", "plo", "plu"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["cha", "che", "chi", "cho", "chu"],
//            review: ["sa", "se", "si", "so", "su"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["cla", "cle", "cli", "clo", "clu"],
//            review: ["bla", "ble", "bli", "blo", "blu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["fla", "fle", "fli", "flo", "flu"],
//            review: ["pa", "pe", "pi", "po", "pu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["pla", "ple", "pli", "plo", "plu"],
//            review: ["ca", "ce", "ci", "co", "cu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ca", "que", "qui", "co", "cu"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["va", "ve", "vi", "vo", "vu"],
//            review: ["la", "le", "li", "lo", "lu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["lla", "lle", "lli", "llo", "llu"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["fla", "fle", "fli", "flo", "flu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ha", "he", "hi", "ho", "hu"],
//            review: ["fa", "fe", "fi", "fo", "fu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ya", "ye", "yi", "yo", "yu"],
//            review: ["pla", "ple", "pli", "plo", "plu"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["cha", "che", "chi", "cho", "chu"],
//            review: ["sa", "se", "si", "so", "su"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["cla", "cle", "cli", "clo", "clu"],
//            review: ["bla", "ble", "bli", "blo", "blu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["g"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["m", "n", "s", "l", "f", "p", "c", "q"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ga", "gue", "gui", "go", "gu"],
//            review: ["va", "ve", "vi", "vo", "vu"],
//            distractions: ["ba", "be", "bi", "bo", "bu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ga", "gue", "gui", "go", "gu"],
//            review: ["va", "ve", "vi", "vo", "vu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	}
    },
    earth: {
        hidden_chests: {
    		stimuli: ["gue", "gui", "que", "qui"],
            review: ["ga", "gue", "gui", "go", "gu"],
            distractions: ["je", "ji", "se", "si"],
            activityID: "hidden_chests",
            activityType: "hidden_chests",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
        plant: {
    		stimuli: ["güe", "güi"],
            review: ["ga", "gue", "gui", "go", "gu"],
            distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
            activityID: "plant",
            activityType: "plant",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
//        oyster: {
//    		stimuli: ["r", "j", "z"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["m", "n", "s", "l", "f", "p", "c", "q", "g"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
        pool: {
    		stimuli: ["ra", "re", "ri", "ro", "ru"],
            review: ["güe", "güi"],
            distractions: ["la", "li", "le", "lo", "lu"],
            activityID: "pool",
            activityType: "pool",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
        snail: {
    		stimuli: ["ja", "je", "ji", "jo", "ju"],
            review: ["ra", "re", "ri", "ro", "ru"],
            distractions: ["sa", "se", "si", "so", "su"],
            activityID: "snail",
            activityType: "snail",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
        topo: {
    		stimuli: ["za", "ze", "zi", "zo", "zu"],
            review: ["ja", "je", "ji", "jo", "ju"],
            distractions: ["la", "li", "le", "lo", "lu"],
            activityID: "topo",
            activityType: "topo",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 100
    	},
//        oyster: {
//    		stimuli: ["ara", "are", "ari", "aro", "aru"],
//            review: ["za", "ze", "zi", "zo", "zu"],
//            distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["era", "ere", "eri", "ero", "eru"],
//            review: ["ara", "are", "ari", "aro", "aru"],
//            distractions: ["ira", "ire", "iri", "iro", "iru"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ira", "ire", "iri", "iro", "iru"],
//            review: ["era", "ere", "eri", "ero", "eru"],
//            distractions: ["ara", "are", "ari", "aro", "aru"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ara", "ere", "iri", "oro", "uru"],
//            review: ["ra", "re", "ri", "ro", "ru"],
//            distractions: ["la", "le", "li", "lo", "lu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["arra", "arre", "arri", "arro", "urru"],
//            review: ["ra", "re", "ri", "ro", "ru"],
//            distractions: ["ara", "ere", "iri", "oro", "uru"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ga", "gi", "ce", "ci"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: [
//                "va", "ve", "vi", "vo", "vu",
//                "lla", "lle", "lli", "llo", "llu",
//                "ha", "he", "hi", "ho", "hu"
//            ],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ga", "gi", "ce", "ci"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: [
//                "gue", "gui", "que", "qui", "ga",
//                "go", "gu", "ca", "co", "cu"
//            ],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ra", "re", "ri", "ro", "ru"],
//            review: ["güe", "güi"],
//            distractions: ["la", "li", "le", "lo", "lu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ja", "je", "ji", "jo", "ju"],
//            review: ["ra", "re", "ri", "ro", "ru"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["za", "ze", "zi", "zo", "zu"],
//            review: ["ja", "je", "ji", "jo", "ju"],
//            distractions: ["la", "li", "le", "lo", "lu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ara", "are", "ari", "aro", "aru"],
//            review: ["za", "ze", "zi", "zo", "zu"],
//            distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ga", "gue", "gui", "go", "gu"],
//            review: ["va", "ve", "vi", "vo", "vu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["arra", "arre", "arri", "arro", "urru"],
//            review: ["ra", "re", "ri", "ro", "ru"],
//            distractions: ["ara", "ere", "iri", "oro", "uru"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["bra", "bre", "bri", "bro", "bru"],
//            review: ["ga", "gue", "gui", "go", "gu"],
//            distractions: ["ba", "be", "bi", "bo", "bu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["cra", "cre", "cri", "cro", "cru"],
//            review: ["da", "de", "di", "do", "du"],
//            distractions: ["ca", "co", "cu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["dra", "dre", "dri", "dro", "dru"],
//            review: ["pa", "pe", "pi", "po", "pu"],
//            distractions: ["da", "de", "di", "do", "du"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["fra", "fre", "fri", "fro", "fru"],
//            review: ["dra", "dre", "dri", "dro", "dru"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["gra", "gre", "gri", "gro", "gru"],
//            review: ["cra", "cre", "cri", "cro", "cru"],
//            distractions: ["ga", "gue", "gui", "go", "gu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["pra", "pre", "pri", "pro", "pru"],
//            review: ["bra", "bre", "bri", "bro", "bru"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["tra", "tre", "tri", "tro", "tru"],
//            review: ["ca", "que", "qui", "co", "cu"],
//            distractions: ["ta", "te", "ti", "to", "tu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["r", "j", "z"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: [
//                "m", "n", "s", "l", "f", "p",
//                "c", "q", "g", "r", "j", "z",
//                "ll", "y", "d", "b"
//            ],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ña", "ñe", "ñi", "ño", "ñu"],
//            review: ["tra", "tre", "tri", "tro", "tru"],
//            distractions: ["na", "ne", "ni", "no", "nu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ka", "ke", "ki", "ko", "ku"],
//            review: ["cra", "cre", "cri", "cro", "cru"],
//            distractions: ["ga", "gue", "gui", "go", "gu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["wa", "we", "wi", "wo"],
//            review: ["ya", "ye", "yi", "yo", "yu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ax", "ex", "ix", "ox", "ux"],
//            review: ["wa", "we", "wi", "wo"],
//            distractions: [
//                "as", "es", "is", "os", "us",
//                "ap", "ep", "ip", "op", "up"
//            ],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	},
//        oyster: {
//    		stimuli: ["ac", "ec", "ic", "oc", "uc"],
//            review: ["ña", "ñe", "ñi", "ño", "ñu"],
//            distractions: [
//                "as", "es", "is", "os", "us",
//                "ap", "ep", "ip", "op", "up"
//            ],
//            activityID: "turtles2",
//            activityType: "turtles",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 100
//    	}
    }
};

var ACTIVITY_TRANSITIONS = {};

var prev;
[].concat.apply([], Object.keys(world).map(function (map) {
    var activities = Object.keys(map).map(function (activity) {
        return activity;
    });

    return activities;
})).forEach(function (activity) {
    if (!prev)
        return;
    else
        ACTIVITY_TRANSITIONS[prev] = activity;
    
    prev = activity;
});

ACTIVITY_TRANSITIONS = Object.freeze(ACTIVITY_TRANSITIONS);
cc.log(ACTIVITY_TRANSITIONS);
cc.log("hola");
