var ActivityMenuLayer = cc.Layer.extend({
    ctor: function (mapID) {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        //////////////////////////////
        // 2. add the activity btns
        var activitiesIDs = Object.keys(WORLD[mapID].activities);
        
        var positions = positionsByMaps[mapID];
        
        var btnCount = 0;
        
        var btns = {};
        
        activitiesIDs.forEach(function (activityID) {
            var button = new ActivityButton(
                activityID,
                WORLD[mapID].activities[activityID].activityType
            );
            button.attr({
                x: positions[btnCount].x,
                y: this.size.height - positions[btnCount].y
            });            
            btns[activityID] = button;
            this.addChild(button);
            
            btnCount++;
        }.bind(this));
        
        //////////////////////////////
        // 3. add navigation btn to other maps
        var nextMap = MAP_TRANSITIONS[mapID];
        if (nextMap && GameState.isMapUnlocked(nextMap)) {
            var nextMapBtn = new ccui.Button(mapsImgRes[nextMap].btn);
            nextMapBtn.attr({
                x: this.size.width * .95,
                y: this.size.height + nextMapBtn.height
            });
            nextMapBtn.setVisible(false);
            nextMapBtn.runAction(
                new cc.Sequence(
                    new cc.DelayTime(config.mapTransitionSpeed),
                    new cc.CallFunc(function () {nextMapBtn.setVisible(true)}),
                    new cc.EaseBackOut(
                        new cc.MoveTo(
                            0.25,
                            cc.p(this.size.width * .95, this.size.height * .9)
                        )
                    )
                )
            );
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
        
        if (prevMap.length > 0) {
            prevMap = prevMap[0];
            
            var prevMapBtn = new ccui.Button(mapsImgRes[prevMap].btn);
            prevMapBtn.attr({
                x: this.size.width * .95,
                y: -prevMapBtn.height
            });
            prevMapBtn.setVisible(false);
            prevMapBtn.runAction(
                new cc.Sequence(
                    new cc.DelayTime(config.mapTransitionSpeed),
                    new cc.CallFunc(function () {prevMapBtn.setVisible(true)}),
                    new cc.EaseBackOut(
                        new cc.MoveTo(
                            0.25,
                            cc.p(this.size.width * .95, this.size.height * .1)
                        )
                    )
                )
            );
            prevMapBtn.setUserData({mapID: prevMap});
            prevMapBtn.addTouchEventListener(this.onNavigateToPrevMap, this);
            this.addChild(prevMapBtn);
        };
        
        // animate the opened activity
        if (GameState.openedActivityID) {
            var prevScale = btns[GameState.openedActivityID].getScale();
            var particles = Effects.createSimpleParticles(
                btns[GameState.openedActivityID].getPosition()
            );
            
            if (!cc.sys.isNative) {
                btns[GameState.openedActivityID].runAction(
                    new cc.Sequence(
                        new cc.DelayTime(config.sceneTransitionSpeed),
                        new cc.CallFunc(function () {
                            this.addChild(particles);
                        }.bind(this)),
                        new cc.ScaleTo(0.2, prevScale + 0.2),
                        new cc.ScaleTo(0.2, prevScale)
                    )
                );
            }
            
            GameState.openedActivityID = null;
        }
        
        var backBtn = new ccui.Button(uiImgRes.back_png);
        backBtn.setPosition(cc.p(-backBtn.width, this.size.height * .9));
        backBtn.addTouchEventListener(this.onBackBtn, this);
        // delay the apperance of the btn until the transition is over
        backBtn.runAction(
            new cc.Sequence(
                new cc.DelayTime(config.mapTransitionSpeed),
                new cc.EaseBackOut(
                    new cc.MoveTo(
                        0.25,
                        cc.p(this.size.width * .05, this.size.height * .9)
                    )
                )
            )
        );
        this.addChild(backBtn);
        
        return true;
    },
    onEnter: function () {
        this._super();
        
        if (GameState.isFirstTime()) {
            audioManager.playEffect(audioRes.instructions);
            GameState.completeFirstTime();
        }
    },
    onExitTransitionDidStart: function () {
        this._super();
        
        // if instructions is playing
        cc.audioEngine.stopAllEffects();
    },
    transitionToTopMap: function (mapID) {
        GameState.setOpenedMapID(mapID);
        GD.openMap(mapID);

        cc.director.runScene(
            new cc.TransitionSlideInT(
                config.mapTransitionSpeed,
                ActivityMenuLayer.getScene(mapID)
            )
        );
    },
    onNavigateToMap: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            audioManager.playEffect(audioRes.click);
            
            var mapID = sender.getUserData().mapID;
            this.transitionToTopMap(mapID);
        }
    },
    onNavigateToPrevMap: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            audioManager.playEffect(audioRes.click);
            
            var mapID = sender.getUserData().mapID;
            GameState.setOpenedMapID(mapID);
            GD.openMap(mapID);
                
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
                    SavedSelectionLayer.getScene()
                )
            );
        }
    }
});