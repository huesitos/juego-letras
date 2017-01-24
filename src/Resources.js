// images

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
    
    chestClosed_png: "res/sea/chest_closed.png",
    chestOpened_png: "res/sea/chest_opened.png",
    
    bubble_png: "res/sea/bubble.png",
    
    ink1_png: "res/sea/ink1.png",
    ink2_png: "res/sea/ink2.png",
    ink3_png: "res/sea/ink3.png",
    
    octopus_png: "res/sea/octopus.png",
    tentacle1_png: "res/sea/octopus_tentacle_1.png",
    tentacle2_png: "res/sea/octopus_tentacle_2.png",
    tentacle3_png: "res/sea/octopus_tentacle_3.png",
    tentacle4_png: "res/sea/octopus_tentacle_4.png",
    
    jellyfish_png: "res/sea/medusa.png",
    volt_png: "res/sea/volt.png",
    
    seaFloor_png: "res/sea/sea_floor.png",
    seaWater_png: "res/sea/sea_water.png",
    seaMiddle_png: "res/sea/sea_middle.png",
    seaOctopus_png: "res/sea/sea_octopus.png"
};

var rocksImgRes = [
    {
        normal: seaImgRes.rock1Normal_png,
        cracked: seaImgRes.rock1Cracked_png
    },
    {
        normal: seaImgRes.rock2Normal_png,
        cracked: seaImgRes.rock2Cracked_png
    },
    {
        normal: seaImgRes.rock3Normal_png,
        cracked: seaImgRes.rock3Cracked_png
    }
];

// fonts

var fonts = {
    gameFont: {type:"font", name: "AndikaNewBasic-B", srcs: ["res/fonts/AndikaNewBasic-B.tff"]}
}

// audios

var audioRes = {
    success: "res/audio/success.mp3",
    failure: "res/audio/failure.mp3"
};

var stimuliRes = {
	"a": "res/audio/stimuli/a.mp3",
	"e": "res/audio/stimuli/e.mp3",
	"i": "res/audio/stimuli/i.mp3",
	"o": "res/audio/stimuli/o.mp3",
	"u": "res/audio/stimuli/u.mp3",
    "ae": "res/audio/stimuli/ae.mp3",
    "ai": "res/audio/stimuli/ai.mp3",
    "ao": "res/audio/stimuli/ao.mp3",
    "au": "res/audio/stimuli/au.mp3",
    "ea": "res/audio/stimuli/ea.mp3",
    "ei": "res/audio/stimuli/ei.mp3",
    "eo": "res/audio/stimuli/eo.mp3",
    "eu": "res/audio/stimuli/eu.mp3",
    "ia": "res/audio/stimuli/ea.mp3",
    "ie": "res/audio/stimuli/ei.mp3",
    "io": "res/audio/stimuli/eo.mp3",
    "iu": "res/audio/stimuli/eu.mp3"
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

for (var i in fonts) {
    g_resources.push(fonts[i]);
}

var _b_getFontName = function(resource) {
    if(cc.sys.isNative) {
        return resource.srcs[0];
    } else {
        return resource.name;
    }
}