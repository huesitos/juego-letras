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
            
            gameLayer.customIntroAnimation = function () {
                this.optionButtons.forEach(function (button) {
                    var startPos = button.getPosition();
                    button.setVisible(true);
                    button.attr({
                        x: cc.winSize.width * .205,
                        y: cc.winSize.height * .128
                    });
                    button.runAction(new cc.MoveTo(0.5, startPos));
                });
            };
            break;
        case "bubbles":
            var xPos = size.width * .27;
            var yPos = [250, 270, 250];
            
            gameLayer = new GameLayer(
                {
                    initState: seaImgRes.bubble_png,
                    clickedState: seaImgRes.bubble_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                activity
            );
            
            gameLayer.optionButtons.forEach(function (button) {
                button.setVisible(false);
            });
            
            gameLayer.customIntroAnimation = function () {
                this.optionButtons.forEach(function (button) {
                    var startPos = button.getPosition();
                    button.setVisible(true);
                    button.setPositionY(-button.height);
                    button.runAction(new cc.MoveTo(1, startPos));
                });
            };
            break;
        case "jellyfish":
            break;
        case "fisherman":
            break;
    }
    
    return gameLayer;
};