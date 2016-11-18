var SeaMap = new Map("sea");
SeaMap.getGameLayer = function (activityData, activity) {
    var gameLayer;
    var size = cc.winSize;
    
    switch (activityData.activityID) {
        case "oysters":
            var xPos = size.width * .27;
            var yPos = [100, 130, 100];
            
            gameLayer = new GameLayer(
                {
                    initState: seaImgRes.oysterClosed_png,
                    clickedState: seaImgRes.oysterOpened_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                activity
            );
            break;
        case "rocks":
            var xPos = size.width * .27;
            var yPos = [100, 130, 100];
            
            gameLayer = new RocksLayer(
                {
                    xPos: xPos,
                    yPos: yPos
                },
                activity
            );
            break;
        case "chests":
            var xPos = size.width * .27;
            var yPos = [100, 130, 100];
            
            gameLayer = new GameLayer(
                {
                    initState: seaImgRes.oysterClosed_png,
                    clickedState: seaImgRes.oysterOpened_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                activity
            );
            break;
        case "octopus":
            var xPos = size.width * .33;
            var yPos = [350, 370, 350];
            
            gameLayer = new OctopusLayer(
                {
                    xPos: xPos,
                    yPos: yPos
                },
                activity
            );
            break;
        case "bubbles":
            break;
        case "jellyfish":
            break;
        case "fisherman":
            break;
    }
    
    return gameLayer;
};