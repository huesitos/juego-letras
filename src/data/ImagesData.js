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
    earth_rocks: seaImgRes.rockIcon_png,
    oysters: seaImgRes.oysterIcon_png,
    chests: seaImgRes.chestIcon_png,
    jellyfish: seaImgRes.jellyfishIcon_png,
    octopus: seaImgRes.inkIcon_png,
    bubbles: seaImgRes.bubbleIcon_png,
    fisherman: seaImgRes.fishermanIcon_png,
    buckets: beachImgRes.bucketIcon_png,
    crabs: beachImgRes.crabIcon_png,
    earth_crabs: beachImgRes.crabIcon_png,
    turtles: beachImgRes.turtleIcon_png,
    topo: earthImgRes.topoIcon_png,
    plant: earthImgRes.plantIcon_png,
    pool: earthImgRes.poolIcon_png,
    snail: earthImgRes.snailIcon_png,
    hidden_chests: earthImgRes.chestIcon_png
};

var mapsImgRes = {
    sea: seaImgRes.seaMapBtn_png,
    beach: beachImgRes.beachMapBtn_png,
    earth: earthImgRes.earthMapBtn_png
};

var screenHeight = cc.winSize.height;
var seaPositions = [
    cc.p(160, screenHeight - 110),
    cc.p(165, screenHeight - 255),
    cc.p(114, screenHeight - 410),
    cc.p(200, screenHeight - 517),
    cc.p(355, screenHeight - 478),
    cc.p(451, screenHeight - 306),
    cc.p(372, screenHeight - 190),
    cc.p(327, screenHeight - 337),
    cc.p(505, screenHeight - 438),
    cc.p(620, screenHeight - 380),
    cc.p(640, screenHeight - 144),
    cc.p(502, screenHeight - 142),
    cc.p(925, screenHeight - 297),
    cc.p(890, screenHeight - 490),
    cc.p(760, screenHeight - 380),
    cc.p(883, screenHeight - 148)
];

var beachPositions = [
    cc.p(825, screenHeight - 350),
    cc.p(650, screenHeight - 400),
    cc.p(760, screenHeight - 510),
    cc.p(960, screenHeight - 295),
    cc.p(875, screenHeight - 145),
    cc.p(680, screenHeight - 150),
    cc.p(585, screenHeight - 280),
    cc.p(510, screenHeight - 490),
    cc.p(350, screenHeight - 540),
    cc.p(290, screenHeight - 415),
    cc.p(435, screenHeight - 300),
    cc.p(510, screenHeight - 135),
    cc.p(380, screenHeight - 60),
    cc.p(100, screenHeight - 220),
    cc.p(260, screenHeight - 270),
    cc.p(230, screenHeight - 140)
];

var earthPositions = [
    cc.p(80, screenHeight - 475),
    cc.p(170, screenHeight - 355),
    cc.p(325, screenHeight - 322),
    cc.p(490, screenHeight - 460),
    cc.p(330, screenHeight - 460),
    cc.p(575, screenHeight - 380),
    cc.p(665, screenHeight - 510),
    cc.p(840, screenHeight - 515),
    cc.p(860, screenHeight - 250),
    cc.p(690, screenHeight - 285),
    cc.p(785, screenHeight - 415),
    cc.p(880, screenHeight - 130),
    cc.p(650, screenHeight - 100),
    cc.p(450, screenHeight - 170),
    cc.p(265, screenHeight - 230),
    cc.p(180, screenHeight - 110)
];