// images

var uiImgRes = {
    pause_png: "res/imgs/pause.png",
    resume_png: "res/imgs/resume.png",
    replay_png: "res/imgs/replay.png",
    help_png: "res/imgs/help.png",
    fuelBarEmpty_png: "res/imgs/fuel_bar_empty.png",
    fuelBarFull_png: "res/imgs/fuel_bar_full.png",
    labelRibbon_png: "res/imgs/label_ribbon.png",
    
    starOn_png: "res/imgs/activityMenu/starOn.png",
    starOff_png: "res/imgs/activityMenu/starOff.png",
    
    beachMapBtn_png: "res/imgs/activityMenu/beach_map.png",
    seaMapBtn_png: "res/imgs/activityMenu/sea_map.png"
};

var seaImgRes = {
    oysterOpened_png: "res/imgs/sea/oyster_opened.png",
    oysterClosed_png: "res/imgs/sea/oyster_closed.png",
    
    rock1Normal_png: "res/imgs/sea/rock1_normal.png",
    rock1Cracked_png: "res/imgs/sea/rock1_cracked.png",
    rock2Normal_png: "res/imgs/sea/rock2_normal.png",
    rock2Cracked_png: "res/imgs/sea/rock2_cracked.png",
    rock3Normal_png: "res/imgs/sea/rock3_normal.png",
    rock3Cracked_png: "res/imgs/sea/rock3_cracked.png",
    
    chestClosed_png: "res/imgs/sea/chest_closed.png",
    chestOpened_png: "res/imgs/sea/chest_opened.png",
    
    bubble_png: "res/imgs/sea/bubble.png",
    
    ink1_png: "res/imgs/sea/ink1.png",
    ink2_png: "res/imgs/sea/ink2.png",
    ink3_png: "res/imgs/sea/ink3.png",
    
    octopus_png: "res/imgs/sea/octopus.png",
    tentacle1_png: "res/imgs/sea/octopus_tentacle_1.png",
    tentacle2_png: "res/imgs/sea/octopus_tentacle_2.png",
    tentacle3_png: "res/imgs/sea/octopus_tentacle_3.png",
    tentacle4_png: "res/imgs/sea/octopus_tentacle_4.png",
    
    jellyfish_png: "res/imgs/sea/medusa.png",
    volt_png: "res/imgs/sea/volt.png",
    
    fish1Normal_png: "res/imgs/sea/fish1_normal.png",
    fish1Selected_png: "res/imgs/sea/fish1_selected.png",
    fish2Normal_png: "res/imgs/sea/fish2_normal.png",
    fish2Selected_png: "res/imgs/sea/fish2_selected.png",
    fish3Normal_png: "res/imgs/sea/fish3_normal.png",
    fish3Selected_png: "res/imgs/sea/fish3_selected.png",
    
    seaFloor_png: "res/imgs/sea/sea_floor.png",
    seaWater_png: "res/imgs/sea/sea_water.png",
    seaMiddle_png: "res/imgs/sea/sea_middle.png",
    seaTop_png: "res/imgs/sea/sea_top.png",
    seaOctopus_png: "res/imgs/sea/sea_octopus.png",
    
    seaMap_png: "res/imgs/activityMenu/sea_map.png",
    bubbleIcon_png: "res/imgs/activityMenu/bubble_icon.png",
    chestIcon_png: "res/imgs/activityMenu/chest_icon.png",
    fishermanIcon_png: "res/imgs/activityMenu/fisherman_icon.png",
    inkIcon_png: "res/imgs/activityMenu/ink_icon.png",
    jellyfishIcon_png: "res/imgs/activityMenu/jellyfish_icon.png",
    oysterIcon_png: "res/imgs/activityMenu/oyster_icon.png",
    rockIcon_png: "res/imgs/activityMenu/rock_icon.png"
};

var beachImgRes = {
    crabNormal_png: "res/imgs/beach/crab_normal.png",
    crabSelected_png: "res/imgs/beach/crab_selected.png",
    bucketNormal_png: "res/imgs/beach/bucket_normal.png",
    bucketSelected_png: "res/imgs/beach/bucket_selected.png",
    turtleNormal_png: "res/imgs/beach/turtle_normal.png",
    turtleSelected_png: "res/imgs/beach/turtle_selected.png",
    
    beachFront_png: "res/imgs/beach/beach_front.png",
    beachTop_png: "res/imgs/beach/beach_top.png",
    beachSand_png: "res/imgs/beach/beach_sand.png",
    
    beachMap_png: "res/imgs/activityMenu/beach_map.png",
    bucketIcon_png: "res/imgs/activityMenu/bucket_icon.png",
    crabIcon_png: "res/imgs/activityMenu/crab_icon.png",
    turtleIcon_png: "res/imgs/activityMenu/turtle_icon.png"
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

var fishesImgRes = [
    {
        normal: seaImgRes.fish1Normal_png,
        selected: seaImgRes.fish1Selected_png
    },
    {
        normal: seaImgRes.fish2Normal_png,
        selected: seaImgRes.fish2Selected_png
    },
    {
        normal: seaImgRes.fish3Normal_png,
        selected: seaImgRes.fish3Selected_png
    }
];

var activitiesImgRes = {
    rocks: seaImgRes.rockIcon_png,
    oysters: seaImgRes.oysterIcon_png,
    chests: seaImgRes.chestIcon_png,
    jellyfish: seaImgRes.jellyfishIcon_png,
    octopus: seaImgRes.inkIcon_png,
    bubbles: seaImgRes.bubbleIcon_png,
    fisherman1: seaImgRes.fishermanIcon_png,
    fisherman2: seaImgRes.fishermanIcon_png,
    buckets: beachImgRes.bucketIcon_png,
    crabs1: beachImgRes.crabIcon_png,
    crabs2: beachImgRes.crabIcon_png,
    turtles: beachImgRes.turtleIcon_png
};

var mapsImgRes = {
    sea: seaImgRes.seaMap_png,
    beach: beachImgRes.beachMap_png
};

// fonts

var fonts = {
    gameFont: {type:"font", name: "AndikaNewBasic-B", srcs: ["res/fonts/AndikaNewBasic-B.tff"]}
}

// audios

var audioRes = {
    success: "res/audio/success.mp3",
    failure: "res/audio/failure.mp3",
    cheering: "res/audio/cheering.mp3"
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
    "ia": "res/audio/stimuli/ia.mp3",
    "ie": "res/audio/stimuli/ie.mp3",
    "io": "res/audio/stimuli/io.mp3",
    "iu": "res/audio/stimuli/iu.mp3",
    "oa": "res/audio/stimuli/oa.mp3",
    "oe": "res/audio/stimuli/oe.mp3",
    "oi": "res/audio/stimuli/oi.mp3",
    "ou": "res/audio/stimuli/ou.mp3",
    "ua": "res/audio/stimuli/ua.mp3",
    "ue": "res/audio/stimuli/ue.mp3",
    "ui": "res/audio/stimuli/ui.mp3",
    "uo": "res/audio/stimuli/uo.mp3",
    "ma": "res/audio/stimuli/ma.mp3",
    "me": "res/audio/stimuli/me.mp3",
    "mi": "res/audio/stimuli/mi.mp3",
    "mo": "res/audio/stimuli/mo.mp3",
    "mu": "res/audio/stimuli/mu.mp3",
    "na": "res/audio/stimuli/na.mp3",
    "ne": "res/audio/stimuli/ne.mp3",
    "ni": "res/audio/stimuli/ni.mp3",
    "no": "res/audio/stimuli/no.mp3",
    "nu": "res/audio/stimuli/nu.mp3",
    "sa": "res/audio/stimuli/sa.mp3",
    "se": "res/audio/stimuli/se.mp3",
    "si": "res/audio/stimuli/si.mp3",
    "so": "res/audio/stimuli/so.mp3",
    "su": "res/audio/stimuli/su.mp3",
    "la": "res/audio/stimuli/la.mp3",
    "le": "res/audio/stimuli/le.mp3",
    "li": "res/audio/stimuli/li.mp3",
    "lo": "res/audio/stimuli/lo.mp3",
    "lu": "res/audio/stimuli/lu.mp3",
    "fa": "res/audio/stimuli/fa.mp3",
    "fe": "res/audio/stimuli/fe.mp3",
    "fi": "res/audio/stimuli/fi.mp3",
    "fo": "res/audio/stimuli/fo.mp3",
    "fu": "res/audio/stimuli/fu.mp3",
    "pa": "res/audio/stimuli/pa.mp3",
    "pe": "res/audio/stimuli/pe.mp3",
    "pi": "res/audio/stimuli/pi.mp3",
    "po": "res/audio/stimuli/po.mp3",
    "pu": "res/audio/stimuli/pu.mp3",
    "ta": "res/audio/stimuli/ta.mp3",
    "te": "res/audio/stimuli/te.mp3",
    "ti": "res/audio/stimuli/ti.mp3",
    "to": "res/audio/stimuli/to.mp3",
    "tu": "res/audio/stimuli/tu.mp3",
    "ba": "res/audio/stimuli/ba.mp3",
    "be": "res/audio/stimuli/be.mp3",
    "bi": "res/audio/stimuli/bi.mp3",
    "bo": "res/audio/stimuli/bo.mp3",
    "bu": "res/audio/stimuli/bu.mp3",
    "da": "res/audio/stimuli/da.mp3",
    "de": "res/audio/stimuli/de.mp3",
    "di": "res/audio/stimuli/di.mp3",
    "do": "res/audio/stimuli/do.mp3",
    "du": "res/audio/stimuli/du.mp3"
}

var g_resources = [];
for (var i in uiImgRes) {
    g_resources.push(uiImgRes[i]);
}

for (var i in seaImgRes) {
    g_resources.push(seaImgRes[i]);
}

for (var i in beachImgRes) {
    g_resources.push(beachImgRes[i]);
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