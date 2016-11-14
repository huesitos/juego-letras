var uiImgRes = {
    pause_png: "res/pause.png",
    resume_png: "res/resume.png",
    replay_png: "res/replay.png",
    help_png: "res/help.png",
    fuelBarEmpty_png: "res/fuel_bar_empty.png",
    fuelBarFull_png: "res/fuel_bar_full.png"
};

var seaImgRes = {
    oysterOpened_png: "res/sea/oyster_opened.png",
    oysterClosed_png: "res/sea/oyster_closed.png",
    rock1Normal_png: "res/sea/rock1_normal.png",
    rock1Cracked_png: "res/sea/rock1_cracked.png",
    rock2Normal_png: "res/sea/rock2_normal.png",
    rock2Cracked_png: "res/sea/rock2_cracked.png",
    rock3Normal_png: "res/sea/rock3_normal.png",
    rock3Cracked_png: "res/sea/rock3_cracked.png",
    seaFloor_png: "res/sea/sea_floor.png",
    seaWater_png: "res/sea/sea_water.png",
    chest_png: "res/chest.png",
}

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
for (var i in uiImgRes) {
    g_resources.push(uiImgRes[i]);
}

for (var i in seaImgRes) {
    g_resources.push(seaImgRes[i]);
}

for (var i in audioRes) {
    g_resources.push(audioRes[i]);
}

for (var i in stimuliRes) {
    g_resources.push(stimuliRes[i]);
}