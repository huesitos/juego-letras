var ActivityMenuLayer = cc.Layer.extend({
    ctor: function (mapID) {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        //////////////////////////////
        // 2. add the activity btns
        var activitiesIDs = Object.keys(world[mapID]);
        
        var positions;
        switch(mapID) {
            case "sea":
                positions = [
                    cc.p(160, this.size.height - 110),
                    cc.p(165, this.size.height - 255),
                    cc.p(114, this.size.height - 410),
                    cc.p(200, this.size.height - 517),
                    cc.p(355, this.size.height - 478),
                    cc.p(451, this.size.height - 306),
                    cc.p(372, this.size.height - 190),
                    cc.p(327, this.size.height - 337),
                    cc.p(505, this.size.height - 438),
                    cc.p(620, this.size.height - 380),
                    cc.p(640, this.size.height - 144),
                    cc.p(502, this.size.height - 142),
                    cc.p(925, this.size.height - 297),
                    cc.p(890, this.size.height - 490),
                    cc.p(760, this.size.height - 380),
                    cc.p(883, this.size.height - 148)
                ];
                break;
            case "beach":
                positions = [
                    cc.p(825, this.size.height - 350),
                    cc.p(650, this.size.height - 400),
                    cc.p(760, this.size.height - 510),
                    cc.p(960, this.size.height - 295),
                    cc.p(875, this.size.height - 145),
                    cc.p(680, this.size.height - 150),
                    cc.p(585, this.size.height - 280),
                    cc.p(510, this.size.height - 490),
                    cc.p(350, this.size.height - 540),
                    cc.p(290, this.size.height - 415),
                    cc.p(435, this.size.height - 300),
                    cc.p(510, this.size.height - 135),
                    cc.p(380, this.size.height - 60),
                    cc.p(100, this.size.height - 220),
                    cc.p(260, this.size.height - 270),
                    cc.p(230, this.size.height - 140)
                ];
                break;
            case "earth":
                positions = [
                    cc.p(80, this.size.height - 475),
                    cc.p(170, this.size.height - 355),
                    cc.p(325, this.size.height - 322),
                    cc.p(490, this.size.height - 460),
                    cc.p(330, this.size.height - 460),
                    cc.p(575, this.size.height - 380),
                    cc.p(665, this.size.height - 510),
                    cc.p(840, this.size.height - 515),
                    cc.p(860, this.size.height - 250),
                    cc.p(690, this.size.height - 285),
                    cc.p(785, this.size.height - 415),
                    cc.p(880, this.size.height - 130),
                    cc.p(650, this.size.height - 100),
                    cc.p(450, this.size.height - 170),
                    cc.p(265, this.size.height - 230),
                    cc.p(180, this.size.height - 110)
                ];
                break;
        }
        
        var btnCount = 0;
        
        var btns = {};
        
        activitiesIDs.forEach(function (activityID) {
            var button = new ActivityButton(activityID);
            button.attr({
                x: positions[btnCount].x,
                y: positions[btnCount].y
            });            
            btns[activityID] = button;
            this.addChild(button);
            
            btnCount++;
        }.bind(this));
        
        //////////////////////////////
        // 3. add navigation btn to other maps
        var nextMap = MAP_TRANSITIONS[mapID];
        if (nextMap && GameState.gameProgress.maps[nextMap].unlocked) {
            var nextMapBtn = new ccui.Button(mapsImgRes[nextMap]);
            nextMapBtn.attr({
                x: this.size.width * .95,
                y: this.size.height * .9
            });
            nextMapBtn.setUserData({mapID: nextMap});
            nextMapBtn.addTouchEventListener(this.onNavigateToMap, this);
            this.addChild(nextMapBtn);
        }
        
        var prevMap = Object.keys(MAP_TRANSITIONS).filter(function (map) {
            // get the map that leads to the current one
            if (MAP_TRANSITIONS[map] === mapID) {
                return map;
            }
        });
        
        if (prevMap) {
            prevMap = prevMap[0];
            
            var prevMapBtn = new ccui.Button(mapsImgRes[prevMap]);
            prevMapBtn.attr({
                x: this.size.width * .95,
                y: this.size.height * .1
            });
            prevMapBtn.setUserData({mapID: prevMap});
            prevMapBtn.addTouchEventListener(this.onNavigateToPrevMap, this);
            this.addChild(prevMapBtn);
        };
        
        // animate the opened activity
        if (GameState.openedActivity) {
            var particles = Effects.createSimpleParticles(
                btns[GameState.openedActivity].getPosition()
            );
            this.addChild(particles);
            
            var prevScale = btns[GameState.openedActivity].getScale();
            btns[GameState.openedActivity].runAction(
                new cc.Sequence(
                    new cc.ScaleTo(0.2, prevScale + 0.2),
                    new cc.ScaleTo(0.2, prevScale)
                )
            );
            
            GameState.openedActivity = null;
        }
        
        var backBtn = new ccui.Button(uiImgRes.back_png);
        backBtn.setPosition(
            cc.p(this.size.width * .05, this.size.height * .9)
        );
        backBtn.addTouchEventListener(this.onBackBtn, this);
        backBtn.setVisible(false);
        // delay the apperance of the btn until the transition is over
        backBtn.runAction(
            new cc.Sequence(
                new cc.DelayTime(config.mapTransitionSpeed),
                new cc.CallFunc(function () {
                    this.setVisible(true)
                }, backBtn)
            )
        );
        this.addChild(backBtn);
        
        return true;
    },
    onNavigateToMap: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            cc.audioEngine.playEffect(audioRes.click);
            
            var mapID = sender.getUserData().mapID;
            GameState.openedMapID = mapID;
            GD.openMap();
                
            cc.director.runScene(
                new cc.TransitionSlideInT(
                    config.mapTransitionSpeed,
                    ActivityMenuLayer.getScene(mapID)
                )
            );
        }
    },
    onNavigateToPrevMap: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            cc.audioEngine.playEffect(audioRes.click);
            
            var mapID = sender.getUserData().mapID;
            GameState.openedMapID = mapID;
            GD.openMap();
                
            cc.director.runScene(
                new cc.TransitionSlideInB(
                    config.mapTransitionSpeed,
                    ActivityMenuLayer.getScene(mapID)
                )
            );
        }
    },
    onBackBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            cc.audioEngine.playEffect(audioRes.click);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    new MenuScene()
                )
            );
        }
    }
});