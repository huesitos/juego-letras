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
                    initState: seaImgRes.oysterSelected_png,
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
            
            var rock1 = {
                initState: seaRocksImgRes[0].normal,
                clickedState: seaRocksImgRes[0].selected
            }
            
            gameLayer = new GameLayer(
                rock1,
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            
            gameLayer.optionButtons[1].setStatesTextures(
                seaRocksImgRes[1].normal,
                seaRocksImgRes[1].selected
            );
            gameLayer.optionButtons[1].changeToNormal();

            gameLayer.optionButtons[2].setStatesTextures(
                seaRocksImgRes[2].normal,
                seaRocksImgRes[2].selected
            );
            gameLayer.optionButtons[2].changeToNormal();
            
            break;
            
        case "chests":
            var xPos = size.width * .27;
            var yPos = [100, 130, 100];
            
            gameLayer = new GameLayer(
                {
                    initState: seaImgRes.chestClosed_png,
                    clickedState: seaImgRes.chestSelected_png
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
            var yPos = [290, 310, 290];
            
            gameLayer = new OctopusLayer(
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity
            );
            
            gameLayer.customIntroAnimationDelay = .5;
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
            var yPos = [200, 220, 200];
            
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
            
//            gameLayer.customIntroAnimationDelay = .5;
            gameLayer.customIntroAnimation = function () {
                this.optionButtons.forEach(function (button) {
                    var startPos = button.getPosition();
                    button.setVisible(true);
                    button.setPositionY(-button.height);
                    button.runAction(
                        new cc.Sequence(
                            new cc.MoveTo(1, startPos),
                            new cc.DelayTime(0.5)
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
                activity,
                DOWN_DIRECTION
            );
            
            gameLayer.optionButtons.forEach(function (button) {
                button.setVisible(false);
            });
            
            gameLayer.customIntroAnimationDelay = 2.5;
            gameLayer.customIntroAnimation = function () {
                this.optionButtons.forEach(function (button) {
                    var startPos = button.getPosition();
                    button.setVisible(true);
                    button.runAction(
                        new cc.Sequence(
                            new cc.MoveTo(2, cc.p(startPos.x, -startPos.y)),
                            new cc.DelayTime(0.5),
                            new cc.Place(startPos)
                        )
                    );
                });
            };
            
            break;
            
        case "fisherman":
            var xPos = size.width * .27;
            var yPos = [180, 200, 180];
            
            var fish1 = {
                initState: fishesImgRes[0].normal,
                clickedState: fishesImgRes[0].selected
            }
            
            gameLayer = new GameLayer(
                fish1,
                {
                    xPos: xPos,
                    yPos: yPos
                },
                cc.winSize.width * .14,
                activity,
                DOWN_DIRECTION
            );
            
            gameLayer.optionButtons[1].setStatesTextures(
                fishesImgRes[1].normal,
                fishesImgRes[1].selected
            );
            gameLayer.optionButtons[1].changeToNormal();

            gameLayer.optionButtons[2].setStatesTextures(
                fishesImgRes[2].normal,
                fishesImgRes[2].selected
            );
            gameLayer.optionButtons[2].changeToNormal();
            
            gameLayer.optionButtons.forEach(function (button) {
                button.setVisible(false);
            });
            
            // appearance delay between fishes
            var delay = 0.5;
            
            gameLayer.customIntroAnimationDelay = 1.5 + delay * 2;
            gameLayer.customIntroAnimation = function () {
                this.optionButtons.forEach(function (button) {
                    button.hideLabel();
                    var startPos = button.getPosition();
                    button.setVisible(true);
                    button.runAction(
                        new cc.Sequence(
                            new cc.Place(cc.p(-button.width, startPos.y)),
                            new cc.DelayTime(delay),
                            new cc.MoveTo(1, cc.p(startPos.x, startPos.y)),
                            new cc.DelayTime(0.5+delay)
                        )
                    );
                    
                    delay += 0.5;
                });
            };
            
            break;
    }
    
    return gameLayer;
};