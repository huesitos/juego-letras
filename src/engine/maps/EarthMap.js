var EarthMap = new Map("earth");
EarthMap.getGameLayer = function (activityType, activity) {
    var gameLayer;
    var size = cc.winSize;
    
    switch (activityType) {
        case "earth_crabs":
            var xPos = size.width * .27;
            var yPos = [180, 210, 180];
            
            gameLayer = new GameLayer(
                {
                    initState: beachImgRes.crabNormal_png,
                    clickedState: beachImgRes.crabSelected_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity,
                DOWN_DIRECTION
            );
            
            break;
        
        case "earth_rocks":
            var xPos = size.width * .27;
            var yPos = [180, 210, 180];
            
            gameLayer = new RocksLayer(
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            break;
            
        case "hidden_chests":
            var xPos = size.width * .27;
            var yPos = [180, 210, 180];
            
            gameLayer = new GameLayer(
                {
                    initState: earthImgRes.chestNormal_png,
                    clickedState: earthImgRes.chestSelected_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity,
                DOWN_DIRECTION
            );
            
            break;
            
        case "plant":
            var xPos = size.width * .27;
            var yPos = [180, 210, 180];
            
            gameLayer = new GameLayer(
                {
                    initState: earthImgRes.plantNormal_png,
                    clickedState: earthImgRes.plantSelected_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            
            break;
            
        case "pool":
            var xPos = size.width * .27;
            var yPos = [180, 210, 180];
            
            gameLayer = new GameLayer(
                {
                    initState: earthImgRes.poolNormal_png,
                    clickedState: earthImgRes.poolSelected_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            
            break;
        
        case "snail":
            var xPos = size.width * .27;
            var yPos = [180, 210, 180];
            
            gameLayer = new GameLayer(
                {
                    initState: earthImgRes.snailNormal_png,
                    clickedState: earthImgRes.snailSelected_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            
            break;
            
        case "topo":
            var xPos = size.width * .27;
            var yPos = [180, 210, 180];
            
            gameLayer = new GameLayer(
                {
                    initState: earthImgRes.topoNormal_png,
                    clickedState: earthImgRes.topoSelected_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            
            break;
    }
    
    return gameLayer;
};