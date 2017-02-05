var ActivityMenuLayer = cc.Layer.extend({
    ctor: function (mapID) {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        //////////////////////////////
        // 2. add the activity btns
        var activitiesIDs = Object.keys(world[mapID]);
        
        var positions = [
            cc.p(200, 125), cc.p(512, 125), cc.p(830, 125),
            cc.p(830, 325), cc.p(512, 325), cc.p(200, 325),
            cc.p(200, 475), cc.p(512, 475)
        ];
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
            prevMapBtn.addTouchEventListener(this.onNavigateToMap, this);
            this.addChild(prevMapBtn);
        };
        
        // animate the opened activity
        if (GameState.openedActivity) {
            var particles = Effects.createSimpleParticles(
                btns[GameState.openedActivity].getPosition()
            );
            this.addChild(particles);
            
            btns[GameState.openedActivity].runAction(
                new cc.Sequence(
                    new cc.ScaleTo(0.2, 1.2),
                    new cc.ScaleTo(0.2, 1)
                )
            );
            
            GameState.openedActivity = null;
        }
        
        var backBtn = new ccui.Button(uiImgRes.back_png);
        backBtn.setPosition(
            cc.p(this.size.width * .05, this.size.height * .9)
        );
        backBtn.addTouchEventListener(this.onBackBtn, this);
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
                ActivityMenuLayer.getScene(mapID)
            );
        }
    },
    onBackBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            cc.audioEngine.playEffect(audioRes.click);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    1,
                    new MenuScene()
                )
            );
        }
    }
});