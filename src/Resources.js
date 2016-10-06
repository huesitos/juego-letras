var imgRes = {
    oyster: "res/oyster.png",
    chest: "res/chest.png",
    pause: "res/pause.png",
    resume: "res/resume.png",
    replay: "res/replay.png",
    help: "res/help.png",
    fuelBar: "res/fuelBar.png"
};

var audioRes = {
    success: "res/audio/success.mp3",
    failure: "res/audio/failure.mp3"
};

var stimuliRes = {
	"a": "res/audio/stimuli.ogg",
	"e": "res/audio/stimuli.ogg",
	"i": "res/audio/stimuli.ogg",
	"o": "res/audio/stimuli.ogg",
	"u": "res/audio/stimuli.ogg",
	"b": "res/audio/stimuli.ogg",
	"c": "res/audio/stimuli.ogg",
	"d": "res/audio/stimuli.ogg",
	"f": "res/audio/stimuli.ogg",
	"g": "res/audio/stimuli.ogg",
	"h": "res/audio/stimuli.ogg",
	"j": "res/audio/stimuli.ogg",
	"k": "res/audio/stimuli.ogg",
	"l": "res/audio/stimuli.ogg",
	"m": "res/audio/stimuli.ogg",
	"n": "res/audio/stimuli.ogg",
	"p": "res/audio/stimuli.ogg",
	"q": "res/audio/stimuli.ogg",
	"r": "res/audio/stimuli.ogg",
	"s": "res/audio/stimuli.ogg",
	"t": "res/audio/stimuli.ogg",
	"v": "res/audio/stimuli.ogg",
	"w": "res/audio/stimuli.ogg",
	"x": "res/audio/stimuli.ogg",
	"y": "res/audio/stimuli.ogg",
	"z": "res/audio/stimuli.ogg",
    "ae": "res/audio/stimuli.ogg",
    "ai": "res/audio/stimuli.ogg",
    "ao": "res/audio/stimuli.ogg",
    "au": "res/audio/stimuli.ogg"
}

var g_resources = [];
for (var i in imgRes) {
    g_resources.push(imgRes[i]);
}

for (var i in audioRes) {
    g_resources.push(audioRes[i]);
}

for (var i in stimuliRes) {
    g_resources.push(stimuliRes[i]);
}