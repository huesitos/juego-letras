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
                positions = seaPositions;
                break;
            case "beach":
                positions = beachPositions;
                break;
            case "earth":
                positions = earthPositions;
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
        if (nextMap && GameState.isMapUnlocked(nextMap)) {
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
            var prevScale = btns[GameState.openedActivity].getScale();
            var particles = Effects.createSimpleParticles(
                btns[GameState.openedActivity].getPosition()
            );
            
            btns[GameState.openedActivity].runAction(
                new cc.Sequence(
                    new cc.DelayTime(config.sceneTransitionSpeed),
                    new cc.CallFunc(function () {
                        this.addChild(particles);
                    }.bind(this)),
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
    onEnter: function () {
        this._super();
        
        if (GameState.firstTime) {
            audioManager.playEffect(audioRes.instructions);
            GameState.completeFirstTime();
        }
    },
    onExitTransitionDidStart: function () {
        this._super();
        
        // if instructions is playing
        cc.audioEngine.stopAllEffects();
    },
    onNavigateToMap: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            audioManager.playEffect(audioRes.click);
            
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
            audioManager.playEffect(audioRes.click);
            
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
            audioManager.playEffect(audioRes.click);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    new MenuScene()
                )
            );
        }
    }
});