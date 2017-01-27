var SeaMap = new Map("sea");
SeaMap.getGameLayer = function (activityType, activity) {
    var gameLayer;
    var size = cc.winSize;
    
    switch (activityType) {
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
                cc.winSize.width * .14,
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
                cc.winSize.width * .14,
                activity
            );
            break;
            
        case "chests":
            var xPos = size.width * .27;
            var yPos = [100, 130, 100];
            
            gameLayer = new GameLayer(
                {
                    initState: seaImgRes.chestClosed_png,
                    clickedState: seaImgRes.chestOpened_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
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
                cc.winSize.width * .14,
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
                cc.winSize.width * .14,
                activity
            );
            
            gameLayer.optionButtons.forEach(function (button) {
                button.setVisible(false);
            });
            
            gameLayer.customIntroAnimation = function () {
                this.optionButtons.forEach(function (button) {
                    button.hideLabel();
                    var startPos = button.getPosition();
                    button.setVisible(true);
                    button.setPositionY(-button.height);
                    button.runAction(
                        new cc.Sequence(
                            new cc.MoveTo(1, startPos),
                            new cc.DelayTime(0.5),
                            new cc.CallFunc(button.showLabel, button)
                        )
                    );
                });
            };
            break;
            
        case "jellyfish":
            var xPos = size.width * .32;
            var yPos = [250, 250, 250];
            
            gameLayer = new GameLayer(
                {
                    initState: seaImgRes.volt_png,
                    clickedState: seaImgRes.volt_png
                },
                {
                    xPos: xPos,
                    yPos: yPos
                },
                85,
                activity
            );
            
            gameLayer.optionButtons.forEach(function (button) {
                button.setVisible(false);
            });
            
            gameLayer.customIntroAnimation = function () {
                this.optionButtons.forEach(function (button) {
                    button.hideLabel();
                    var startPos = button.getPosition();
                    button.setVisible(true);
                    button.runAction(
                        new cc.Sequence(
                            new cc.MoveTo(2, cc.p(startPos.x, -startPos.y)),
                            new cc.DelayTime(0.5),
                            new cc.Place(startPos),
                            new cc.CallFunc(button.showLabel, button)
                        )
                    );
                });
            };
            break;
            
        case "fisherman":
            var xPos = size.width * .27;
            var yPos = [200, 220, 200];
            
            gameLayer = new FishermanLayer(
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            
            gameLayer.optionButtons.forEach(function (button) {
                button.setVisible(false);
            });
            
            // appearance delay between fishes
            var delay = 0.5;
            
            gameLayer.customIntroAnimation = function () {
                this.optionButtons.forEach(function (button) {
                    button.hideLabel();
                    var startPos = button.getPosition();
                    button.setVisible(true);
                    button.runAction(
                        new cc.Sequence(
                            new cc.Place(cc.p(-button.width, startPos.y)),
                            new cc.DelayTime(delay),
                            new cc.MoveTo(2, cc.p(startPos.x, startPos.y)),
                            new cc.DelayTime(1+delay),
                            new cc.CallFunc(button.showLabel, button)
                        )
                    );
                    
                    delay += .5;
                });
            };
            
            break;
    }
    
    return gameLayer;
};