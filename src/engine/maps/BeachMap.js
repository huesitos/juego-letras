var BeachMap = new Map("beach");
BeachMap.getGameLayer = function (activityType, activity) {
    var gameLayer;
    var size = cc.winSize;
    
    switch (activityType) {
        case "crabs":
            var xPos = size.width * .27;
            var yPos = [150, 180, 150];
            
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
            
        case "buckets":
            var xPos = size.width * .27;
            var yPos = [100, 130, 100];
            
            gameLayer = new GameLayer(
                {
                    initState: beachImgRes.bucketNormal_png,
                    clickedState: beachImgRes.bucketSelected_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            
            break;
            
        case "turtles":
            var xPos = size.width * .27;
            var yPos = [150, 180, 150];
            var res = {
                initState: beachImgRes.turtleNormal_png,
                clickedState: beachImgRes.turtleSelected_png
            };
            
            if (activity.isTimedActivity()) {
                res = {
                    initState: beachImgRes.turtleTimedNormal_png,
                    clickedState: beachImgRes.turtleTimedSelected_png
                };
            }
            
            gameLayer = new GameLayer(
                res,
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity,
                DOWN_DIRECTION
            );
            
            break;
    }
    
    return gameLayer;
};