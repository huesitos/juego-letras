var SavedGameButton = ccui.Button.extend({
    ctor: function (number, isRecordsScreen) {
        this.number = number;
        
        // load game based on number
        var gameProgress = GameState.getSavedGameProgress(number);
        
        // set icon based on the farthest unlocked map
        var iconResNormal, iconResSelected;
        var currentMap = gameProgress.currentMapID;
        
        switch (WORLD[currentMap].type) {
            case "sea":
                iconResNormal = seaImgRes.chestClosed_png;
                iconResSelected = seaImgRes.chestSelected_png;
                break;
            case "beach":
                iconResNormal = beachImgRes.crabNormal_png;
                iconResSelected = beachImgRes.crabSelected_png;
                break;
            case "earth":
                iconResNormal = earthImgRes.topoNormal_png;
                iconResSelected = earthImgRes.topoSelected_png;
                break;
        }
        
        this.iconResSelected = iconResSelected;
        
        // set button image based on the current map
        this._super(iconResNormal, iconResSelected);
        
        var labelRibbon = new cc.Sprite(res.starsBgM_png);
        labelRibbon.attr({
            x: this.width / 2,
            y: 0
        });
        this.addChild(labelRibbon);
        
        var numberLabel = new cc.LabelTTF(
            number,
            _b_getFontName(fonts.gameFont),
            40
        );
        numberLabel.attr({
            x: labelRibbon.width / 2,
            y: labelRibbon.height / 2,
            color: staticRes.textColor
        });
        labelRibbon.addChild(numberLabel);
        
        this.setScale(.7);
        
        if (isRecordsScreen)
            this.addTouchEventListener(this.onLoadRecordScreen, this);
        else
            this.addTouchEventListener(this.onLoadSelectedGame, this);
        
        return true;
    },
    onLoadSelectedGame: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            sender.loadTextureNormal(sender.iconResSelected);
            
            GameState.setSelectedSavedGame(sender.number);
            GD.openCurrentMap();
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    ActivityMenuLayer.getScene(GameState.getCurrentMapID())
                )
            );
        }
    },
    onLoadRecordScreen: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type) {
            sender.loadTextureNormal(sender.iconResSelected);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    new RecordsScene(this.number)
                )
            );
        }
    }
});