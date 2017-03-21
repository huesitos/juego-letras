// possible timed activity options directions
var DOWN_DIRECTION = 0;
var RIGHT_DIRECTION = 1;

var TIMED_LEVEL = "T";
var UNIQUE_ANSWER = "UR";

// 94 activities
var WORLD = {
    sea1: {
        type: 'sea',
        activities: {
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

            },
            rocks3: {
                stimuli: ["a", "e", "i", "o", "u"],
                review: ["a", "e", "i", "o", "u"],
                distractions: [
                    "ua", "ue", "ui", "uo",
                    "ao", "eo", "ui", "uo",
                    "oa", "oe", "oi", "ou",
                    "ia", "ei", "eo", "eu",
                    "ae", "ai", "ao", "au",
                    "ea", "ei", "eo", "eu"
                ],
                activityID: "rocks3",
                activityType: "rocks",
                backgroundImgs: [
                    seaImgRes.seaWater_png,
                    seaImgRes.seaFloor_png
                ],
                type: UNIQUE_ANSWER,

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
                type: UNIQUE_ANSWER
            },
            bubbles1: {
                stimuli: ["sa", "se", "si", "so", "su"],
                review: ["a", "e", "i", "o", "u"],
                distractions: [
                    "ma", "me", "mi", "mo", "mu",
                    "na", "ne", "ni", "no", "nu"
                ],
                activityID: "bubbles1",
                activityType: "bubbles",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            }
        }
    },
    sea2: {
        type: 'sea',
        activities: {
            octopus1: {
                stimuli: [
                    "ma", "me", "mi", "mo", "mu",
                    "na", "ne", "ni", "no", "nu",
                    "sa", "se", "si", "so", "su"
                ],
                review: [
                    "a", "e", "i", "o", "u"
                ],
                distractions: [
                    "ma", "me", "mi", "mo", "mu",
                    "na", "ne", "ni", "no", "nu",
                    "sa", "se", "si", "so", "su"
                ],
                activityID: "octopus1",
                activityType: "octopus",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            fisherman1: {
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
                activityID: "fisherman1",
                activityType: "fisherman",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            jellyfish1: {
                stimuli: ["fa", "fe", "fi", "fo", "fu"],
                review: [
                    "sa", "se", "si", "so", "su"
                ],
                distractions: ["sa", "se", "si", "so", "su"],
                activityID: "jellyfish1",
                activityType: "jellyfish",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png,
                    seaImgRes.jellyfish_png
                ],
                type: TIMED_LEVEL,
                time: 10
            },
            bubbles2: {
                stimuli: ["pa", "pe", "pi", "po", "pu"],
                review: [
                    "ma", "me", "mi", "mo", "mu",
                    "na", "ne", "ni", "no", "nu",
                    "sa", "se", "si", "so", "su"
                ],
                distractions: ["fa", "fe", "fi", "fo", "fu"],
                activityID: "bubbles2",
                activityType: "bubbles",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            octopus2: {
                stimuli: ["ma", "me", "mi", "mo", "mu"],
                review: ["la", "le", "li", "lo", "lu"],
                distractions: ["na", "ne", "ni", "no", "nu"],
                activityID: "octopus2",
                activityType: "octopus",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            fisherman2: {
                stimuli: ["na", "ne", "ni", "no", "nu"],
                review: ["fa", "fe", "fi", "fo", "fu"],
                distractions: ["ma", "me", "mi", "mo", "mu"],
                activityID: "fisherman2",
                activityType: "fisherman",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            jellyfish2: {
                stimuli: ["sa", "se", "si", "so", "su"],
                review: ["pa", "pe", "pi", "po", "pu"],
                distractions: ["fa", "fe", "fi", "fo", "fu"],
                activityID: "jellyfish2",
                activityType: "jellyfish",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png,
                    seaImgRes.jellyfish_png
                ],
                type: TIMED_LEVEL,
                time: 10
            },
            bubbles3: {
                stimuli: ["la", "le", "li", "lo", "lu"],
                review: ["sa", "se", "si", "so", "su"],
                distractions: [
                    "ma", "me", "mi", "mo", "mu",
                    "na", "ne", "ni", "no", "nu"
                ],
                activityID: "bubbles3",
                activityType: "bubbles",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            octopus3: {
                stimuli: ["fa", "fe", "fi", "fo", "fu"],
                review: ["na", "ne", "ni", "no", "nu"],
                distractions: ["sa", "se", "si", "so", "su"],
                activityID: "octopus3",
                activityType: "octopus",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            fisherman3: {
                stimuli: ["pa", "pe", "pi", "po", "pu"],
                review: ["ma", "me", "mi", "mo", "mu"],
                distractions: ["fa", "fe", "fi", "fo", "fu"],
                activityID: "fisherman3",
                activityType: "fisherman",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            }
        }
    },
    sea3: {
        type: 'sea',
        activities: {
            chests4: {
                stimuli: ["ta", "te", "ti", "to", "tu"],
                review: ["a", "e", "i", "o", "u"],
                distractions: ["pa", "pe", "pi", "po", "pu"],
                activityID: "chests4",
                activityType: "chests",
                backgroundImgs: [
                    seaImgRes.seaWater_png,
                    seaImgRes.seaFloor_png
                ],
                type: UNIQUE_ANSWER
            },
            oysters4: {
                stimuli: ["ba", "be", "bi", "bo", "bu"],
                review: ["ta", "te", "ti", "to", "tu"],
                distractions: ["pa", "pe", "pi", "po", "pu"],
                activityID: "oysters4",
                activityType: "oysters",
                backgroundImgs: [
                    seaImgRes.seaWater_png,
                    seaImgRes.seaFloor_png
                ],
                type: UNIQUE_ANSWER
            },
            jellyfish3: {
                stimuli: ["da", "de", "di", "do", "du"],
                review: ["ba", "be", "bi", "bo", "bu"],
                distractions: ["pa", "pe", "pi", "po", "pu"],
                activityID: "jellyfish3",
                activityType: "jellyfish",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png,
                    seaImgRes.jellyfish_png
                ],
                type: TIMED_LEVEL,
                time: 10
            },
            octopus4: {
                stimuli: ["am", "em", "im", "om", "um"],
                review: ["na", "ne", "ni", "no", "nu"],
                distractions: ["da", "de", "di", "do", "du"],
                activityID: "octopus4",
                activityType: "octopus",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            rocks4: {
                stimuli: ["as", "es", "is", "os", "us"],
                review: ["fa", "fe", "fi", "fo", "fu"],
                distractions: ["la", "le", "li", "lo", "lu"],
                activityID: "rocks4",
                activityType: "rocks",
                backgroundImgs: [
                    seaImgRes.seaWater_png,
                    seaImgRes.seaFloor_png
                ],
                type: UNIQUE_ANSWER
            },
            fisherman4: {
                stimuli: ["ap", "ep", "ip", "op", "up"],
                review: ["ba", "be", "bi", "bo", "bu"],
                distractions: ["ma", "me", "mi", "mo", "mu"],
                activityID: "fisherman4",
                activityType: "fisherman",
                backgroundImgs: [
                    seaImgRes.seaTop_png
                ],
                type: TIMED_LEVEL,
                time: 10
            },
            bubbles5: {
                stimuli: ["am", "em", "im", "om", "um"],
                review: ["ap", "ep", "ip", "op", "up"],
                distractions: ["ma", "me", "mi", "mo", "mu"],
                activityID: "bubbles5",
                activityType: "bubbles",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            octopus5: {
                stimuli: ["as", "es", "is", "os", "us"],
                review: ["am", "em", "im", "om", "um"],
                distractions: ["sa", "se", "si", "so", "su"],
                activityID: "octopus5",
                activityType: "octopus",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png
                ],
                type: UNIQUE_ANSWER
            },
            jellyfish4: {
                stimuli: ["ap", "ep", "ip", "op", "up"],
                review: ["as", "es", "is", "os", "us"],
                distractions: ["pa", "pe", "pi", "po", "pu"],
                activityID: "jellyfish4",
                activityType: "jellyfish",
                backgroundImgs: [
                    seaImgRes.seaMiddle_png,
                    seaImgRes.seaMiddleFg_png,
                    seaImgRes.jellyfish_png
                ],
                type: TIMED_LEVEL,
                time: 10
            },
            fisherman5: {
                stimuli: ["an", "en", "in", "on", "un"],
                review: ["ap", "ep", "ip", "op", "up"],
                distractions: ["as", "es", "is", "os", "us"],
                activityID: "fisherman5",
                activityType: "fisherman",
                backgroundImgs: [
                    seaImgRes.seaTop_png
                ],
                type: TIMED_LEVEL,
                time: 10
            }
        }
    },
    beach1: {
        type: 'beach',
        activities: {
            buckets1: {
                stimuli: ["al", "el", "il", "ol", "ul"],
                review: ["as", "es", "is", "os", "us"],
                distractions: ["am", "em", "im", "om", "um"],
                activityID: "buckets1",
                activityType: "buckets",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            crabs1: {
                stimuli: ["ab", "eb", "ib", "ob", "ub"],
                review: ["am", "em", "im", "om", "um"],
                distractions: ["ap", "ep", "ip", "op", "up"],
                activityID: "crabs1",
                activityType: "crabs",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: TIMED_LEVEL,
                time: 10
            },
            beach_pool1: {
                stimuli: ["ad", "ed", "id", "od", "ud"],
                review: ["as", "es", "is", "os", "us"],
                distractions: ["ap", "ep", "ip", "op", "up"],
                activityID: "beach_pool1",
                activityType: "beach_pool",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            star1: {
                stimuli: ["an", "en", "in", "on", "un"],
                review: ["al", "el", "il", "ol", "ul"],
                distractions: ["na", "ne", "ni", "no", "nu"],
                activityID: "star1",
                activityType: "star",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            turtles1: {
                stimuli: ["al", "el", "il", "ol", "ul"],
                review: ["ab", "eb", "ib", "ob", "ub"],
                distractions: ["la", "le", "li", "lo", "lu"],
                activityID: "turtles1",
                activityType: "turtles",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: TIMED_LEVEL,
                time: 10
            },
            buckets2: {
                stimuli: ["ab", "eb", "ib", "ob", "ub"],
                review: ["ad", "ed", "id", "od", "ud"],
                distractions: ["ba", "be", "bi", "bo", "bu"],
                activityID: "buckets2",
                activityType: "buckets",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            beach_pool2: {
                stimuli: ["ad", "ed", "id", "od", "ud"],
                review: ["an", "en", "in", "on", "un"],
                distractions: ["da", "de", "di", "do", "du"],
                activityID: "beach_pool2",
                activityType: "beach_pool",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            star2: {
                stimuli: ["bla", "ble", "bli", "blo", "blu"],
                review: ["fa", "fe", "fi", "fo", "fu"],
                distractions: [
                    "ba", "be", "bi", "bo", "bu",
                    "pa", "pe", "pi", "po", "pu"
                ],
                activityID: "star2",
                activityType: "star",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: UNIQUE_ANSWER
            },
            crabs2: {
                stimuli: ["fla", "fle", "fli", "flo", "flu"],
                review: ["pa", "pe", "pi", "po", "pu"],
                distractions: ["fa", "fe", "fi", "fo", "fu"],
                activityID: "crabs2",
                activityType: "crabs",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: TIMED_LEVEL,
                time: 10
            },
            turtles2: {
                stimuli: ["pla", "ple", "pli", "plo", "plu"],
                review: ["ca", "ce", "ci", "co", "cu"],
                distractions: ["pa", "pe", "pi", "po", "pu"],
                activityID: "turtles2",
                activityType: "turtles",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: UNIQUE_ANSWER
            }
        }
    },
    beach2: {
        type: 'beach',
        activities: {
            buckets3: {
                stimuli: ["ca", "que", "qui", "co", "cu"],
                review: ["ba", "be", "bi", "bo", "bu"],
                distractions: [
                    "ma", "me", "mi", "mo", "mu",
                    "na", "ne", "ni", "no", "nu"
                ],
                activityID: "buckets3",
                activityType: "buckets",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            crabs3: {
                stimuli: ["va", "ve", "vi", "vo", "vu"],
                review: ["la", "le", "li", "lo", "lu"],
                distractions: ["fa", "fe", "fi", "fo", "fu"],
                activityID: "crabs3",
                activityType: "crabs",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: UNIQUE_ANSWER
            },
            beach_pool3: {
                stimuli: ["lla", "lle", "lli", "llo", "llu"],
                review: ["ba", "be", "bi", "bo", "bu"],
                distractions: ["fla", "fle", "fli", "flo", "flu"],
                activityID: "beach_pool3",
                activityType: "beach_pool",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            turtles3: {
                stimuli: ["ha", "he", "hi", "ho", "hu"],
                review: ["fa", "fe", "fi", "fo", "fu"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "turtles3",
                activityType: "turtles",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: TIMED_LEVEL,
                time: 10
            },
            star3: {
                stimuli: ["ya", "ye", "yi", "yo", "yu"],
                review: ["pla", "ple", "pli", "plo", "plu"],
                distractions: ["sa", "se", "si", "so", "su"],
                activityID: "star3",
                activityType: "star",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: UNIQUE_ANSWER
            },
            buckets4: {
                stimuli: ["cha", "che", "chi", "cho", "chu"],
                review: ["sa", "se", "si", "so", "su"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "buckets4",
                activityType: "buckets",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            beach_pool4: {
                stimuli: ["cla", "cle", "cli", "clo", "clu"],
                review: ["bla", "ble", "bli", "blo", "blu"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "beach_pool4",
                activityType: "beach_pool",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            crabs4: {
                stimuli: ["fla", "fle", "fli", "flo", "flu"],
                review: ["pa", "pe", "pi", "po", "pu"],
                distractions: ["fa", "fe", "fi", "fo", "fu"],
                activityID: "crabs4",
                activityType: "crabs",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: TIMED_LEVEL,
                time: 10
            },
            star4: {
                stimuli: ["pla", "ple", "pli", "plo", "plu"],
                review: ["ca", "ce", "ci", "co", "cu"],
                distractions: ["pa", "pe", "pi", "po", "pu"],
                activityID: "star4",
                activityType: "star",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            turtles4: {
                stimuli: ["ca", "que", "qui", "co", "cu"],
                review: ["ba", "be", "bi", "bo", "bu"],
                distractions: ["sa", "se", "si", "so", "su"],
                activityID: "turtles4",
                activityType: "turtles",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: TIMED_LEVEL,
                time: 10
            }
        }
    },
    beach3: {
        type: 'beach',
        activities: {
            buckets5: {
                stimuli: ["va", "ve", "vi", "vo", "vu"],
                review: ["la", "le", "li", "lo", "lu"],
                distractions: ["fa", "fe", "fi", "fo", "fu"],
                activityID: "buckets5",
                activityType: "buckets",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: UNIQUE_ANSWER
            },
            crabs5: {
                stimuli: ["lla", "lle", "lli", "llo", "llu"],
                review: ["ba", "be", "bi", "bo", "bu"],
                distractions: ["fla", "fle", "fli", "flo", "flu"],
                activityID: "crabs5",
                activityType: "crabs",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: TIMED_LEVEL,
                time: 10
            },
            beach_pool5: {
                stimuli: ["ha", "he", "hi", "ho", "hu"],
                review: ["fa", "fe", "fi", "fo", "fu"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "beach_pool5",
                activityType: "beach_pool",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            star5: {
                stimuli: ["ya", "ye", "yi", "yo", "yu"],
                review: ["pla", "ple", "pli", "plo", "plu"],
                distractions: ["sa", "se", "si", "so", "su"],
                activityID: "star5",
                activityType: "star",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: UNIQUE_ANSWER
            },
            turtles5: {
                stimuli: ["cha", "che", "chi", "cho", "chu"],
                review: ["sa", "se", "si", "so", "su"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "turtles5",
                activityType: "turtles",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: TIMED_LEVEL,
                time: 10
            },
            buckets6: {
                stimuli: ["cla", "cle", "cli", "clo", "clu"],
                review: ["bla", "ble", "bli", "blo", "blu"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "buckets6",
                activityType: "buckets",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            beach_pool6: {
                stimuli: ["ga", "gue", "gui", "go", "gu"],
                review: ["va", "ve", "vi", "vo", "vu"],
                distractions: ["ba", "be", "bi", "bo", "bu"],
                activityID: "beach_pool6",
                activityType: "beach_pool",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            star6: {
                stimuli: ["ga", "gue", "gui", "go", "gu"],
                review: ["va", "ve", "vi", "vo", "vu"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "star6",
                activityType: "star",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: UNIQUE_ANSWER
            },
            crabs6: {
                stimuli: ["ga", "gue", "gui", "go", "gu"],
                review: ["va", "ve", "vi", "vo", "vu"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "crabs6",
                activityType: "crabs",
                backgroundImgs: [beachImgRes.beachFront_png],
                type: TIMED_LEVEL,
                time: 10
            },
            turtles6: {
                stimuli: ["ga", "gue", "gui", "go", "gu"],
                review: ["va", "ve", "vi", "vo", "vu"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "turtles6",
                activityType: "turtles",
                backgroundImgs: [beachImgRes.beachTop_png],
                type: TIMED_LEVEL,
                time: 10
            }
        }
    },
    earth1: {
        type: 'earth',
        activities: {
            hidden_chests1: {
                stimuli: ["gue", "gui", "que", "qui"],
                review: ["ga", "gue", "gui", "go", "gu"],
                distractions: ["je", "ji", "se", "si"],
                activityID: "hidden_chests1",
                activityType: "hidden_chests",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_rocks1: {
                stimuli: ["güe", "güi"],
                review: ["ga", "gue", "gui", "go", "gu"],
                distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
                activityID: "earth_rocks1",
                activityType: "earth_rocks",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            plant1: {
                stimuli: ["ra", "re", "ri", "ro", "ru"],
                review: ["güe", "güi"],
                distractions: ["la", "li", "le", "lo", "lu"],
                activityID: "plant1",
                activityType: "plant",
                backgroundImgs: [earthImgRes.mainLand_png]
            },
            earth_crabs1: {
                stimuli: ["ja", "je", "ji", "jo", "ju"],
                review: ["ra", "re", "ri", "ro", "ru"],
                distractions: ["sa", "se", "si", "so", "su"],
                activityID: "earth_crabs1",
                activityType: "earth_crabs",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: TIMED_LEVEL,
                time: 10
            },
            pool1: {
                stimuli: ["za", "ze", "zi", "zo", "zu"],
                review: ["ja", "je", "ji", "jo", "ju"],
                distractions: ["la", "li", "le", "lo", "lu"],
                activityID: "pool1",
                activityType: "pool",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            snail1: {
                stimuli: ["ara", "are", "ari", "aro", "aru"],
                review: ["za", "ze", "zi", "zo", "zu"],
                distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
                activityID: "snail1",
                activityType: "snail",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            topo1: {
                stimuli: ["era", "ere", "eri", "ero", "eru"],
                review: ["ara", "are", "ari", "aro", "aru"],
                distractions: ["ira", "ire", "iri", "iro", "iru"],
                activityID: "topo1",
                activityType: "topo",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_crabs2: {
                stimuli: ["ira", "ire", "iri", "iro", "iru"],
                review: ["era", "ere", "eri", "ero", "eru"],
                distractions: ["ara", "are", "ari", "aro", "aru"],
                activityID: "earth_crabs2",
                activityType: "earth_crabs",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: TIMED_LEVEL,
                time: 10
            },
            hidden_chests2: {
                stimuli: ["ara", "ere", "iri", "oro", "uru"],
                review: ["ra", "re", "ri", "ro", "ru"],
                distractions: ["la", "le", "li", "lo", "lu"],
                activityID: "hidden_chests2",
                activityType: "hidden_chests",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_rocks2: {
                stimuli: ["arra", "arre", "arri", "arro", "urru"],
                review: ["ra", "re", "ri", "ro", "ru"],
                distractions: ["ara", "ere", "iri", "oro", "uru"],
                activityID: "earth_rocks2",
                activityType: "earth_rocks",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            }
        }
    },
    earth2: {
        type: 'earth',
        activities: {
            plant2: {
                stimuli: ["ga", "gi", "ce", "ci"],
                review: ["a", "e", "i", "o", "u"],
                distractions: [
                    "va", "ve", "vi", "vo", "vu",
                    "lla", "lle", "lli", "llo", "llu",
                    "ha", "he", "hi", "ho", "hu"
                ],
                activityID: "plant2",
                activityType: "plant",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_crabs3: {
                stimuli: ["ga", "gi", "ce", "ci"],
                review: ["a", "e", "i", "o", "u"],
                distractions: [
                    "gue", "gui", "que", "qui", "ga",
                    "go", "gu", "ca", "co", "cu"
                ],
                activityID: "earth_crabs3",
                activityType: "earth_crabs",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: TIMED_LEVEL,
                time: 10
            },
            pool2: {
                stimuli: ["ra", "re", "ri", "ro", "ru"],
                review: ["güe", "güi"],
                distractions: ["la", "li", "le", "lo", "lu"],
                activityID: "pool2",
                activityType: "pool",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            snail2: {
                stimuli: ["ja", "je", "ji", "jo", "ju"],
                review: ["ra", "re", "ri", "ro", "ru"],
                distractions: ["sa", "se", "si", "so", "su"],
                activityID: "snail2",
                activityType: "snail",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            topo2: {
                stimuli: ["za", "ze", "zi", "zo", "zu"],
                review: ["ja", "je", "ji", "jo", "ju"],
                distractions: ["la", "li", "le", "lo", "lu"],
                activityID: "topo2",
                activityType: "topo",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_crabs4: {
                stimuli: ["ara", "are", "ari", "aro", "aru"],
                review: ["za", "ze", "zi", "zo", "zu"],
                distractions: ["gue", "gui", "que", "qui", "ga", "go", "gu"],
                activityID: "earth_crabs4",
                activityType: "earth_crabs",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: TIMED_LEVEL,
                time: 10
            },
            hidden_chests3: {
                stimuli: ["ga", "gue", "gui", "go", "gu"],
                review: ["va", "ve", "vi", "vo", "vu"],
                distractions: ["ca", "que", "qui", "co", "cu"],
                activityID: "hidden_chests3",
                activityType: "hidden_chests",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_rocks3: {
                stimuli: ["arra", "arre", "arri", "arro", "urru"],
                review: ["ra", "re", "ri", "ro", "ru"],
                distractions: ["ara", "ere", "iri", "oro", "uru"],
                activityID: "earth_rocks3",
                activityType: "earth_rocks",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            plant3: {
                stimuli: ["bra", "bre", "bri", "bro", "bru"],
                review: ["ga", "gue", "gui", "go", "gu"],
                distractions: ["ba", "be", "bi", "bo", "bu"],
                activityID: "plant3",
                activityType: "plant",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_crabs5: {
                stimuli: ["cra", "cre", "cri", "cro", "cru"],
                review: ["da", "de", "di", "do", "du"],
                distractions: ["ca", "co", "cu"],
                activityID: "earth_crabs5",
                activityType: "earth_crabs",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: TIMED_LEVEL,
                time: 10
            }
        }
    },
    earth3: {
        type: 'earth',
        activities: {
            pool3: {
                stimuli: ["dra", "dre", "dri", "dro", "dru"],
                review: ["pa", "pe", "pi", "po", "pu"],
                distractions: ["da", "de", "di", "do", "du"],
                activityID: "pool3",
                activityType: "pool",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            snail3: {
                stimuli: ["fra", "fre", "fri", "fro", "fru"],
                review: ["dra", "dre", "dri", "dro", "dru"],
                distractions: ["fa", "fe", "fi", "fo", "fu"],
                activityID: "snail3",
                activityType: "snail",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            topo3: {
                stimuli: ["gra", "gre", "gri", "gro", "gru"],
                review: ["cra", "cre", "cri", "cro", "cru"],
                distractions: ["ga", "gue", "gui", "go", "gu"],
                activityID: "topo3",
                activityType: "topo",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_crabs6: {
                stimuli: ["pra", "pre", "pri", "pro", "pru"],
                review: ["bra", "bre", "bri", "bro", "bru"],
                distractions: ["pa", "pe", "pi", "po", "pu"],
                activityID: "earth_crabs6",
                activityType: "earth_crabs",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: TIMED_LEVEL,
                time: 10
            },
            hidden_chests4: {
                stimuli: ["tra", "tre", "tri", "tro", "tru"],
                review: ["ca", "que", "qui", "co", "cu"],
                distractions: ["ta", "te", "ti", "to", "tu"],
                activityID: "hidden_chests4",
                activityType: "hidden_chests",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_rocks4: {
                stimuli: ["ña", "ñe", "ñi", "ño", "ñu"],
                review: ["tra", "tre", "tri", "tro", "tru"],
                distractions: ["na", "ne", "ni", "no", "nu"],
                activityID: "earth_rocks4",
                activityType: "earth_rocks",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            plant4: {
                stimuli: ["ka", "ke", "ki", "ko", "ku"],
                review: ["cra", "cre", "cri", "cro", "cru"],
                distractions: ["ga", "gue", "gui", "go", "gu"],
                activityID: "plant4",
                activityType: "plant",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            pool4: {
                stimuli: ["wa", "we", "wi", "wo"],
                review: ["ya", "ye", "yi", "yo", "yu"],
                distractions: ["pa", "pe", "pi", "po", "pu"],
                activityID: "pool4",
                activityType: "pool",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            snail4: {
                stimuli: ["ax", "ex", "ix", "ox", "ux"],
                review: ["wa", "we", "wi", "wo"],
                distractions: [
                    "as", "es", "is", "os", "us",
                    "ap", "ep", "ip", "op", "up"
                ],
                activityID: "snail4",
                activityType: "snail",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: UNIQUE_ANSWER
            },
            earth_crabs7: {
                stimuli: ["ac", "ec", "ic", "oc", "uc"],
                review: ["ña", "ñe", "ñi", "ño", "ñu"],
                distractions: [
                    "as", "es", "is", "os", "us",
                    "ap", "ep", "ip", "op", "up"
                ],
                activityID: "earth_crabs7",
                activityType: "earth_crabs",
                backgroundImgs: [earthImgRes.mainLand_png],
                type: TIMED_LEVEL,
                time: 10
            }
        }
    }
};

var ACTIVITY_TRANSITIONS = {};
var prev;
[].concat.apply([], Object.keys(WORLD).map(function (map) {
    var activities = Object.keys(WORLD[map].activities).map(
        function (activity) {
            return WORLD[map].activities[activity].activityID;
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

var MAP_TRANSITIONS = {};
var prevMap;
Object.keys(WORLD).forEach(function (map) {
    if (!prevMap) {
        prevMap = map;
        return;
    } else {
        MAP_TRANSITIONS[prevMap] = map;
        prevMap = map;
    }
});
MAP_TRANSITIONS = Object.freeze(MAP_TRANSITIONS);
