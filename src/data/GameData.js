var mapTransitions = {
//    sea: "beach",
//    beach: "sky",
//    sky: "space"
};

var TIMED_LEVEL = "T";
var UNIQUE_ANSWER = "UR";

var world = {
    sea: [
        {
            activities: [
//                {
//                    "presentation": ["a", "e", "i", "o", "u"],
//                    "stimuli": ["a", "e", "i", "o", "u"],
//                    "distractions": ["a", "e", "i", "o", "u"],
//                    "activity": "rocks",
//                    "type": "UR",
//                    "goal": 100
//                },
                {
                    "presentation": ["a", "e", "i", "o", "u"],
                    "stimuli": ["a", "e", "i", "o", "u"],
                    "distractions": ["a", "e", "i", "o", "u"],
                    "type": UNIQUE_ANSWER,
                    "activity": "oysters",
                    "goal": 50
                },
                {
                    "presentation": ["ae", "ai", "ao", "au"],
                    "stimuli": ["ae", "ai", "ao", "au"],
                    "distractions": ["a", "e", "i", "o", "u"],
                    "activity": "oysters",
                    "type": TIMED_LEVEL,
                    "time": 10,
                    "goal": 50
                },
//                {
//                    "presentation": ["ea", "ei", "eo", "eu"],
//                    "stimuli": ["ea", "ei", "eo", "eu"],
//                    "distractions": ["ae", "ai", "ao", "au"],
//                    "activity": "chests",
//                    "type": "UR",
//                    "goal": 100
//                },
//                {
//                    "presentation": ["ia", "ie", "io", "iu"],
//                    "stimuli": ["ia", "ie", "io", "iu"],
//                    "distractions": ["ea", "ei", "eo", "eu"],
//                    "type": "UR",
//                    "goal": 100
//                },
//                {
//                    "presentation": ["oa", "oe", "oi", "ou"],
//                    "stimuli": ["oa", "oe", "oi", "ou"],
//                    "distractions": ["ia", "ie", "io", "iu"],
//                    "type": "UR",
//                    "goal": 100
//                },
//                {
//                    "presentation": ["ua", "ue", "ui", "uo"],
//                    "stimuli": ["ua", "ue", "ui", "uo"],
//                    "distractions": ["oa", "oe", "oi", "ou"],
//                    "type": "UR",
//                    "goal": 100
//                }
            ]
        }
//        
    ]
//    beach: [
//        {
//    		"presentation": ["m", "n", "s"],
//            "stimuli": ["m", "n", "s"],
//    		"distractions": ['a', 'e', 'i', 'o', 'u'],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//                "sa", "se", "si", "so", "su"
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"presentation": ["m", "n", "s", "l", "f", "p"],
//            "stimuli": ["m", "n", "s", "l", "f", "p"],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "la", "le", "li", "lo", "lu",
//                "fa", "fe", "fi", "fo", "fu",
//                "pa", "pe", "pi", "po", "pu"
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ma", "me", "mi", "mo", "mu",
//                "na", "ne", "ni", "no", "nu",
//                "sa", "se", "si", "so", "su",
//                "la", "le", "li", "lo", "lu",
//                "fa", "fe", "fi", "fo", "fu",
//                "pa", "pe", "pi", "po", "pu"
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"presentation": ["t", "b", "d"],
//    		"stimuli": ["t", "b", "d"],
//    		"distractions": ['l', 'f', 'p', 'm', 'n'],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                "ta", "te", "ti", 'to', 'tu',
//                'ba', 'be', 'bi', 'bo', 'bu',
//                'da', 'de', 'di', 'do', 'du'
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
//        {
//    		"stimuli": [
//                'am', 'em', 'im', 'om', 'um',
//                'as', 'es', 'is', 'os', 'us',
//                'ap', 'ep', 'ip', 'op', 'up'
//            ],
//    		"distractions": [".."],
//    		"type": "UR",
//    		"goal": 100
//    	},
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
//    ],
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
//    		"presentation": ["c", "q"],
//            "stimuli": [
//                "m", "n", "s", "l", "f", "p",
//                "a", "e", "i", "o", "u"
//            ],
//    		"distractions": [".."],
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
//    		"presentation": ['v', 'll', 'h', 'y'],
//    		"stimuli": [
//                "m", "n", "s", "l", "f", "p",
//                "a", "e", "i", "o", "u", 't',
//                'b', 'd', 'c', 'q'
//            ],
//    		"distractions": [".."],
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
//                'g'
//            ],
//    		"distractions": [
//                "m", "n", "s", "l", "f", "p",
//                "a", "e", "i", "o", "u"
//            ],
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
//            "stimuli": ['r', 'j', 'z'],
//    		"distractions": [
//                "m", "n", "s", "l", "f", "p",
//                "a", "e", "i", "o", "u", 'v',
//                'y', 'd', 'b'
//            ],
//    		"type": "UR",
//    		"goal": 100
//    	},
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
//                "ñ", 'k', 'w', 'x',
//            ],
//    		"distractions": [
//                'r', 'j', 'z', 'a', 'm', 'e',
//                'n', 'o', 's', 'i', 'l', 'f',
//                'p', 'v', 'll', 'y', 'd', 'b'
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
//    ]
};
