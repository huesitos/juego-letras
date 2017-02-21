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
        rocks1: {
            stimuli: ["a", "e", "i", "o", "u"],
            distractions: ["a", "e", "i", "o", "u"],
            activityID: "rocks1",
            activityType: "rocks",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        oysters1: {
            stimuli: ["ae", "ai", "ao", "au"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["ea", "ia", "oa", "ua"],
            activityID: "oysters1",
            activityType: "oysters",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        chests1: {
            stimuli: ["ea", "ei", "eo", "eu"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["ae", "ia", "oe", "ue"],
            activityID: "chests1",
            activityType: "chests",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        rocks2: {
            stimuli: ["ia", "ei", "eo", "eu"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["ai", "ie", "oe", "ue"],
            activityID: "rocks2",
            activityType: "rocks",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        oysters2: {
            stimuli: ["oa", "oe", "oi", "ou"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["ao", "eo", "ui", "uo"],
            activityID: "oysters2",
            activityType: "oysters",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            time: 10,
            goal: 10
        },
        chests2: {
            stimuli: ["ua", "ue", "ui", "uo"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["au", "eu", "ou", "ea"],
            activityID: "chests2",
            activityType: "chests",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        rocks3: {
//            stimuli: ["m", "n", "s"],
            stimuli: ["a", "e", "i", "o", "u"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["a", "e", "i", "o", "u"],
            activityID: "rocks3",
            activityType: "rocks",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            goal: 10
        },
        oysters3: {
            stimuli: ["ma", "me", "mi", "mo", "mu"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["na", "ne", "ni", "no", "nu"],
            activityID: "oysters3",
            activityType: "oysters",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
            time: 10,
            goal: 10
        },
        chests3: {
    		stimuli: ["na", "ne", "ni", "no", "nu"],
            review: ["a", "e", "i", "o", "u"],
            distractions: ["ma", "me", "mi", "mo", "mu"],
            activityID: "chests3",
            activityType: "chests",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
    		goal: 10
    	},
        rocks4: {
    		stimuli: ["sa", "se", "si", "so", "su"],
            review: ["a", "e", "i", "o", "u"],
            distractions: [
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu"
            ],
            activityID: "rocks4",
            activityType: "rocks",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
    		goal: 10
    	},
//        oysters4: {
//    		stimuli: ["l", "f", "p"],
//            review: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//                "sa", "se", "si", "so", "su"
//            ],
//            distractions: ["m", "n", "s"],
//            activityID: "oysters4",
//            activityType: "oysters",
//          backgroundImgs: [
//                seaImgRes.seaWater_png,
//                seaImgRes.seaFloor_png
//            ],
//            type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
        chests4: {
    		stimuli: ["la", "le", "li", "lo", "lu"],
            review: [
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "sa", "se", "si", "so", "su"
            ],
            distractions: [
                "ma", "me", "mi", "mo", "mu", 
                "na", "ne", "ni", "no", "nu"
            ],
            activityID: "chests4",
            activityType: "chests",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
    		goal: 10
    	},
        rocks5: {
    		stimuli: ["fa", "fe", "fi", "fo", "fu"],
            review: [
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "sa", "se", "si", "so", "su"
            ],
            distractions: ["sa", "se", "si", "so", "su"],
            activityID: "rocks5",
            activityType: "rocks",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
    		goal: 10
    	},
        oysters5: {
    		stimuli: ["pa", "pe", "pi", "po", "pu"],
            review: [
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu",
                "sa", "se", "si", "so", "su"
            ],
            distractions: ["fa", "fe", "fi", "fo", "fu"],
            activityID: "oysters5",
            activityType: "oysters",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
    		goal: 10
    	},
        chests5: {
    		stimuli: ["ma", "me", "mi", "mo", "mu"],
            review: ["la", "le", "li", "lo", "lu"],
            distractions: ["na", "ne", "ni", "no", "nu"],
            activityID: "chests5",
            activityType: "chests",
            backgroundImgs: [
                seaImgRes.seaWater_png,
                seaImgRes.seaFloor_png
            ],
            type: UNIQUE_ANSWER,
    		goal: 10
    	},
        bubbles1: {
    		stimuli: ["na", "ne", "ni", "no", "nu"],
            review: ["fa", "fe", "fi", "fo", "fu"],
            distractions: ["ma", "me", "mi", "mo", "mu"],
            activityID: "bubbles1",
            activityType: "bubbles",
            backgroundImgs: [
                seaImgRes.seaMiddle_png,
                seaImgRes.seaMiddleFg_png
            ],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        fisherman1: {
    		stimuli: ["sa", "se", "si", "so", "su"],
            review: ["pa", "pe", "pi", "po", "pu"],
            distractions: ["fa", "fe", "fi", "fo", "fu"],
            activityID: "fisherman1",
            activityType: "fisherman",
            backgroundImgs: [
                seaImgRes.seaMiddle_png,
                seaImgRes.seaMiddleFg_png
            ],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
//        octopus1: {
//    		stimuli: ["la", "le", "li", "lo", "lu"],
//            review: ["sa", "se", "si", "so", "su"],
//            distractions: [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu"
//            ],
//            activityID: "octopus1",
//            activityType: "octopus",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//            type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        jellyfish1: {
//    		stimuli: ["fa", "fe", "fi", "fo", "fu"],
//            review: ["na", "ne", "ni", "no", "nu"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "jellyfish1",
//            activityType: "jellyfish",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        bubbles2: {
//            stimuli: ["pa", "pe", "pi", "po", "pu"],
//            review: ["ma", "me", "mi", "mo", "mu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "bubbles2",
//            activityType: "bubbles",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        fisherman2: {
//    		stimuli: ["t", "b", "d"],
//            review: ["l", "f", "p", "m", "n"],
//            distractions: ["l", "f", "p", "m", "n"],
//            activityID: "fisherman2",
//            activityType: "fisherman",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        octopus2: {
//    		stimuli: ["ta", "te", "ti", "to", "tu"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "octopus2",
//            activityType: "octopus",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        jellyfish2: {
//    		stimuli: ["ba", "be", "bi", "bo", "bu"],
//            review: ["ta", "te", "ti", "to", "tu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "jellyfish2",
//            activityType: "jellyfish",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        bubbles3: {
//    		stimuli: ["da", "de", "di", "do", "du"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "bubbles3",
//            activityType: "bubbles",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        fisherman3: {
//    		stimuli: ["am", "em", "im", "om", "um"],
//            review: ["na", "ne", "ni", "no", "nu"],
//            distractions: ["da", "de", "di", "do", "du"],
//            activityID: "fisherman3",
//            activityType: "fisherman",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        octopus3: {
//    		stimuli: ["as", "es", "is", "os", "us"],
//            review: ["fa", "fe", "fi", "fo", "fu"],
//            distractions: ["la", "le", "li", "lo", "lu"],
//            activityID: "octopus3",
//            activityType: "octopus",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        jellyfish3: {
//    		stimuli: ["ap", "ep", "ip", "op", "up"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["ma", "me", "mi", "mo", "mu"],
//            activityID: "jellyfish3",
//            activityType: "jellyfish",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        bubbles4: {
//    		stimuli: ["am", "em", "im", "om", "um"],
//            review: ["ap", "ep", "ip", "op", "up"],
//            distractions: ["ma", "me", "mi", "mo", "mu"],
//            activityID: "bubbles4",
//            activityType: "bubbles",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        octopus4: {
//    		stimuli: ["as", "es", "is", "os", "us"],
//            review: ["am", "em", "im", "om", "um"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "octopus4",
//            activityType: "octopus",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        octopus5: {
//    		stimuli: ["ap", "ep", "ip", "op", "up"],
//            review: ["as", "es", "is", "os", "us"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "octopus5",
//            activityType: "octopus",
//            backgroundImgs: [
//                seaImgRes.seaMiddle_png,
//                seaImgRes.seaMiddleFg_png
//            ],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        fisherman4: {
//    		stimuli: ["an", "en", "in", "on", "un"],
//            review: ["ap", "ep", "ip", "op", "up"],
//            distractions: ["as", "es", "is", "os", "us"],
//            activityID: "fisherman4",
//            activityType: "fisherman",
//            backgroundImgs: [
//                seaImgRes.seaTop_png
//            ],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
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
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        star1: {
    		stimuli: ["ab", "eb", "ib", "ob", "ub"],
            review: ["am", "em", "im", "om", "um"],
            distractions: ["ap", "ep", "ip", "op", "up"],
            activityID: "star1",
            activityType: "star",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        buckets1: {
    		stimuli: ["ad", "ed", "id", "od", "ud"],
            review: ["as", "es", "is", "os", "us"],
            distractions: ["ap", "ep", "ip", "op", "up"],
            activityID: "buckets1",
            activityType: "buckets",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        crabs2: {
    		stimuli: ["an", "en", "in", "on", "un"],
            review: ["al", "el", "il", "ol", "ul"],
            distractions: ["na", "ne", "ni", "no", "nu"],
            activityID: "crabs2",
            activityType: "crabs",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        turtles2: {
    		stimuli: ["al", "el", "il", "ol", "ul"],
            review: ["ab", "eb", "ib", "ob", "ub"],
            distractions: ["la", "le", "li", "lo", "lu"],
            activityID: "turtles2",
            activityType: "turtles",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        buckets2: {
    		stimuli: ["ab", "eb", "ib", "ob", "ub"],
            review: ["ad", "ed", "id", "od", "ud"],
            distractions: ["ba", "be", "bi", "bo", "bu"],
            activityID: "buckets2",
            activityType: "buckets",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        pool1: {
    		stimuli: ["ad", "ed", "id", "od", "ud"],
            review: ["an", "en", "in", "on", "un"],
            distractions: ["da", "de", "di", "do", "du"],
            activityID: "pool1",
            activityType: "sea_pool",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        turtles3: {
    		stimuli: ["bla", "ble", "bli", "blo", "blu"],
            review: ["fa", "fe", "fi", "fo", "fu"],
            distractions: [
                "ba", "be", "bi", "bo", "bu",
                "pa", "pe", "pi", "po", "pu"
            ],
            activityID: "turtles3",
            activityType: "turtles",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        buckets3: {
    		stimuli: ["fla", "fle", "fli", "flo", "flu"],
            review: ["pa", "pe", "pi", "po", "pu"],
            distractions: ["fa", "fe", "fi", "fo", "fu"],
            activityID: "buckets3",
            activityType: "buckets",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        crabs4: {
    		stimuli: ["pla", "ple", "pli", "plo", "plu"],
            review: ["ca", "ce", "ci", "co", "cu"],
            distractions: ["pa", "pe", "pi", "po", "pu"],
            activityID: "crabs4",
            activityType: "crabs",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
//        turtles4: {
//    		stimuli: ["c", "q"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["m", "n", "s", "l", "f", "p"],
//            activityID: "turtles4",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
        buckets4: {
    		stimuli: ["ca", "que", "qui", "co", "cu"],
            review: ["ba", "be", "bi", "bo", "bu"],
            distractions: [
                "ma", "me", "mi", "mo", "mu",
                "na", "ne", "ni", "no", "nu"
            ],
            activityID: "buckets4",
            activityType: "buckets",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
//        crabs5: {
//    		stimuli: ["c", "q"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["m", "n", "s", "l", "f", "p"],
//            activityID: "crabs5",
//            activityType: "crabs",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
        turtles5: {
    		stimuli: ["va", "ve", "vi", "vo", "vu"],
            review: ["la", "le", "li", "lo", "lu"],
            distractions: ["fa", "fe", "fi", "fo", "fu"],
            activityID: "turtles5",
            activityType: "turtles",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        buckets5: {
    		stimuli: ["lla", "lle", "lli", "llo", "llu"],
            review: ["ba", "be", "bi", "bo", "bu"],
            distractions: ["fla", "fle", "fli", "flo", "flu"],
            activityID: "buckets5",
            activityType: "buckets",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        crabs6: {
    		stimuli: ["ha", "he", "hi", "ho", "hu"],
            review: ["fa", "fe", "fi", "fo", "fu"],
            distractions: ["ca", "que", "qui", "co", "cu"],
            activityID: "crabs6",
            activityType: "crabs",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        turtles6: {
    		stimuli: ["ya", "ye", "yi", "yo", "yu"],
            review: ["pla", "ple", "pli", "plo", "plu"],
            distractions: ["sa", "se", "si", "so", "su"],
            activityID: "turtles6",
            activityType: "turtles",
            backgroundImgs: [beachImgRes.beachTop_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        buckets6: {
    		stimuli: ["cha", "che", "chi", "cho", "chu"],
            review: ["sa", "se", "si", "so", "su"],
            distractions: ["ca", "que", "qui", "co", "cu"],
            activityID: "buckets6",
            activityType: "buckets",
            backgroundImgs: [beachImgRes.beachFront_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
//        crabs7: {
//    		stimuli: ["cla", "cle", "cli", "clo", "clu"],
//            review: ["bla", "ble", "bli", "blo", "blu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "crabs7",
//            activityType: "crabs",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        turtles7: {
//    		stimuli: ["fla", "fle", "fli", "flo", "flu"],
//            review: ["pa", "pe", "pi", "po", "pu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles7",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        buckets7: {
//    		stimuli: ["pla", "ple", "pli", "plo", "plu"],
//            review: ["ca", "ce", "ci", "co", "cu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "buckets7",
//            activityType: "buckets",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        crabs8: {
//    		stimuli: ["ca", "que", "qui", "co", "cu"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "crabs8",
//            activityType: "crabs",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        turtles8: {
//    		stimuli: ["va", "ve", "vi", "vo", "vu"],
//            review: ["la", "le", "li", "lo", "lu"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "turtles8",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        buckets8: {
//    		stimuli: ["lla", "lle", "lli", "llo", "llu"],
//            review: ["ba", "be", "bi", "bo", "bu"],
//            distractions: ["fla", "fle", "fli", "flo", "flu"],
//            activityID: "buckets8",
//            activityType: "buckets",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        crabs9: {
//    		stimuli: ["ha", "he", "hi", "ho", "hu"],
//            review: ["fa", "fe", "fi", "fo", "fu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "crabs9",
//            activityType: "crabs",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        turtles9: {
//    		stimuli: ["ya", "ye", "yi", "yo", "yu"],
//            review: ["pla", "ple", "pli", "plo", "plu"],
//            distractions: ["sa", "se", "si", "so", "su"],
//            activityID: "turtles9",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        buckets9: {
//    		stimuli: ["cha", "che", "chi", "cho", "chu"],
//            review: ["sa", "se", "si", "so", "su"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "buckets9",
//            activityType: "buckets",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        crabs10: {
//    		stimuli: ["cla", "cle", "cli", "clo", "clu"],
//            review: ["bla", "ble", "bli", "blo", "blu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "crabs10",
//            activityType: "crabs",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        turtles10: {
//    		stimuli: ["g"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["m", "n", "s", "l", "f", "p", "c", "q"],
//            activityID: "turtles10",
//            activityType: "turtles",
//            backgroundImgs: [beachImgRes.beachTop_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        buckets10: {
//    		stimuli: ["ga", "gue", "gui", "go", "gu"],
//            review: ["va", "ve", "vi", "vo", "vu"],
//            distractions: ["ba", "be", "bi", "bo", "bu"],
//            activityID: "buckets10",
//            activityType: "buckets",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        crabs11: {
//    		stimuli: ["ga", "gue", "gui", "go", "gu"],
//            review: ["va", "ve", "vi", "vo", "vu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "crabs11",
//            activityType: "crabs",
//            backgroundImgs: [beachImgRes.beachFront_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	}
    },
    earth: {
        earth_rocks1: {
    		stimuli: ["gue", "gui", "que", "qui"],
            review: ["ga", "gue", "gui", "go", "gu"],
            distractions: ["je", "ji", "se", "si"],
            activityID: "earth_rocks1",
            activityType: "earth_rocks",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        hidden_chests1: {
    		stimuli: ["güe", "güi"],
            review: ["ga", "gue", "gui", "go", "gu"],
            distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
            activityID: "hidden_chests1",
            activityType: "hidden_chests",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
//        pool1: {
//    		stimuli: ["r", "j", "z"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: ["m", "n", "s", "l", "f", "p", "c", "q", "g"],
//            activityID: "pool1",
//            activityType: "pool",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
        earth_crabs1: {
    		stimuli: ["ra", "re", "ri", "ro", "ru"],
            review: ["güe", "güi"],
            distractions: ["la", "li", "le", "lo", "lu"],
            activityID: "earth_crabs1",
            activityType: "earth_crabs",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        snail1: {
    		stimuli: ["ja", "je", "ji", "jo", "ju"],
            review: ["ra", "re", "ri", "ro", "ru"],
            distractions: ["sa", "se", "si", "so", "su"],
            activityID: "snail1",
            activityType: "snail",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        topo1: {
    		stimuli: ["za", "ze", "zi", "zo", "zu"],
            review: ["ja", "je", "ji", "jo", "ju"],
            distractions: ["la", "li", "le", "lo", "lu"],
            activityID: "topo1",
            activityType: "topo",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        plant1: {
    		stimuli: ["ara", "are", "ari", "aro", "aru"],
            review: ["za", "ze", "zi", "zo", "zu"],
            distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
            activityID: "plant1",
            activityType: "plant",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        earth_crabs2: {
    		stimuli: ["era", "ere", "eri", "ero", "eru"],
            review: ["ara", "are", "ari", "aro", "aru"],
            distractions: ["ira", "ire", "iri", "iro", "iru"],
            activityID: "earth_crabs2",
            activityType: "crabs",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        earth_rocks2: {
    		stimuli: ["ira", "ire", "iri", "iro", "iru"],
            review: ["era", "ere", "eri", "ero", "eru"],
            distractions: ["ara", "are", "ari", "aro", "aru"],
            activityID: "earth_rocks2",
            activityType: "earth_rocks",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        hidden_chests2: {
    		stimuli: ["ara", "ere", "iri", "oro", "uru"],
            review: ["ra", "re", "ri", "ro", "ru"],
            distractions: ["la", "le", "li", "lo", "lu"],
            activityID: "hidden_chests2",
            activityType: "hidden_chests",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        pool2: {
    		stimuli: ["arra", "arre", "arri", "arro", "urru"],
            review: ["ra", "re", "ri", "ro", "ru"],
            distractions: ["ara", "ere", "iri", "oro", "uru"],
            activityID: "pool2",
            activityType: "pool",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        earth_crabs3: {
    		stimuli: ["ga", "gi", "ce", "ci"],
            review: ["a", "e", "i", "o", "u"],
            distractions: [
                "va", "ve", "vi", "vo", "vu",
                "lla", "lle", "lli", "llo", "llu",
                "ha", "he", "hi", "ho", "hu"
            ],
            activityID: "earth_crabs3",
            activityType: "earth_crabs",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        snail2: {
    		stimuli: ["ga", "gi", "ce", "ci"],
            review: ["a", "e", "i", "o", "u"],
            distractions: [
                "gue", "gui", "que", "qui", "ga",
                "go", "gu", "ca", "co", "cu"
            ],
            activityID: "snail2",
            activityType: "snail",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        topo2: {
    		stimuli: ["ra", "re", "ri", "ro", "ru"],
            review: ["güe", "güi"],
            distractions: ["la", "li", "le", "lo", "lu"],
            activityID: "topo2",
            activityType: "topo",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        plant2: {
    		stimuli: ["ja", "je", "ji", "jo", "ju"],
            review: ["ra", "re", "ri", "ro", "ru"],
            distractions: ["sa", "se", "si", "so", "su"],
            activityID: "plant2",
            activityType: "plant",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
        earth_crabs4: {
    		stimuli: ["za", "ze", "zi", "zo", "zu"],
            review: ["ja", "je", "ji", "jo", "ju"],
            distractions: ["la", "li", "le", "lo", "lu"],
            activityID: "oyster26",
            activityType: "earth_crabs",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: TIMED_LEVEL,
            time: 10,
    		goal: 10
    	},
        earth_rocks3: {
    		stimuli: ["ara", "are", "ari", "aro", "aru"],
            review: ["za", "ze", "zi", "zo", "zu"],
            distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
            activityID: "earth_rocks3",
            activityType: "earth_rocks",
            backgroundImgs: [earthImgRes.mainLand_png],
    		type: UNIQUE_ANSWER,
    		goal: 10
    	},
//        hidden_chests3: {
//    		stimuli: ["ga", "gue", "gui", "go", "gu"],
//            review: ["va", "ve", "vi", "vo", "vu"],
//            distractions: ["ca", "que", "qui", "co", "cu"],
//            activityID: "hidden_chests3",
//            activityType: "hidden_chests",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        pool3: {
//    		stimuli: ["arra", "arre", "arri", "arro", "urru"],
//            review: ["ra", "re", "ri", "ro", "ru"],
//            distractions: ["ara", "ere", "iri", "oro", "uru"],
//            activityID: "pool3",
//            activityType: "pool",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        earth_crabs5: {
//    		stimuli: ["bra", "bre", "bri", "bro", "bru"],
//            review: ["ga", "gue", "gui", "go", "gu"],
//            distractions: ["ba", "be", "bi", "bo", "bu"],
//            activityID: "earth_crabs5",
//            activityType: "earth_crabs",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        snail3: {
//    		stimuli: ["cra", "cre", "cri", "cro", "cru"],
//            review: ["da", "de", "di", "do", "du"],
//            distractions: ["ca", "co", "cu"],
//            activityID: "snail3",
//            activityType: "snail",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        topo3: {
//    		stimuli: ["dra", "dre", "dri", "dro", "dru"],
//            review: ["pa", "pe", "pi", "po", "pu"],
//            distractions: ["da", "de", "di", "do", "du"],
//            activityID: "topo3",
//            activityType: "topo",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        plant3: {
//    		stimuli: ["fra", "fre", "fri", "fro", "fru"],
//            review: ["dra", "dre", "dri", "dro", "dru"],
//            distractions: ["fa", "fe", "fi", "fo", "fu"],
//            activityID: "plant3",
//            activityType: "plant",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        earth_crabs6: {
//    		stimuli: ["gra", "gre", "gri", "gro", "gru"],
//            review: ["cra", "cre", "cri", "cro", "cru"],
//            distractions: ["ga", "gue", "gui", "go", "gu"],
//            activityID: "earth_crabs6",
//            activityType: "earth_crabs",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        earth_rocks4: {
//    		stimuli: ["pra", "pre", "pri", "pro", "pru"],
//            review: ["bra", "bre", "bri", "bro", "bru"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "earth_rocks4",
//            activityType: "earth_rocks",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        hidden_chests4: {
//    		stimuli: ["tra", "tre", "tri", "tro", "tru"],
//            review: ["ca", "que", "qui", "co", "cu"],
//            distractions: ["ta", "te", "ti", "to", "tu"],
//            activityID: "hidden_chests4",
//            activityType: "hidden_chests",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        pool4: {
//    		stimuli: ["r", "j", "z"],
//            review: ["a", "e", "i", "o", "u"],
//            distractions: [
//                "m", "n", "s", "l", "f", "p",
//                "c", "q", "g", "r", "j", "z",
//                "ll", "y", "d", "b"
//            ],
//            activityID: "pool4",
//            activityType: "pool",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        earth_crabs7: {
//    		stimuli: ["ña", "ñe", "ñi", "ño", "ñu"],
//            review: ["tra", "tre", "tri", "tro", "tru"],
//            distractions: ["na", "ne", "ni", "no", "nu"],
//            activityID: "earth_crabs7",
//            activityType: "earth_crabs",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	},
//        snail4: {
//    		stimuli: ["ka", "ke", "ki", "ko", "ku"],
//            review: ["cra", "cre", "cri", "cro", "cru"],
//            distractions: ["ga", "gue", "gui", "go", "gu"],
//            activityID: "snail4",
//            activityType: "snail",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        topo4: {
//    		stimuli: ["wa", "we", "wi", "wo"],
//            review: ["ya", "ye", "yi", "yo", "yu"],
//            distractions: ["pa", "pe", "pi", "po", "pu"],
//            activityID: "topo4",
//            activityType: "topo",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        plant4: {
//    		stimuli: ["ax", "ex", "ix", "ox", "ux"],
//            review: ["wa", "we", "wi", "wo"],
//            distractions: [
//                "as", "es", "is", "os", "us",
//                "ap", "ep", "ip", "op", "up"
//            ],
//            activityID: "plant4",
//            activityType: "plant",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: UNIQUE_ANSWER,
//    		goal: 10
//    	},
//        earth_crabs8: {
//    		stimuli: ["ac", "ec", "ic", "oc", "uc"],
//            review: ["ña", "ñe", "ñi", "ño", "ñu"],
//            distractions: [
//                "as", "es", "is", "os", "us",
//                "ap", "ep", "ip", "op", "up"
//            ],
//            activityID: "earth_crabs8",
//            activityType: "earth_crabs",
//            backgroundImgs: [earthImgRes.mainLand_png],
//    		type: TIMED_LEVEL,
//            time: 10,
//    		goal: 10
//    	}
    }
};

var ACTIVITY_TRANSITIONS = {};

var prev;
[].concat.apply([], Object.keys(world).map(function (map) {
    var activities = Object.keys(world[map]).map(
        function (activity) {
            return world[map][activity].activityID;
        }
    );

    return activities;
})).forEach(function (activity) {
    if (!prev) {
        prev = activity;
        return;
    }
    else {
        ACTIVITY_TRANSITIONS[prev] = activity;
        prev = activity;
    }
});

ACTIVITY_TRANSITIONS = Object.freeze(ACTIVITY_TRANSITIONS);
