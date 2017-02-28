var RecordPage = ccui.ScrollView.extend({
    ctor: function (date, data) {
        this._super();
        
        var totalHeight = Object.keys(data.stimuli).length * 20;
        totalHeight += 300;
        
        this.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this.setBackGroundImage(res.recordPageBg_png);
        this.setContentSize(cc.size(384, 384));
        this.setInnerContainerSize(cc.size(250, totalHeight));
        this.setAnchorPoint(0.5, 0.5);
        
        var containerSize = this.getInnerContainerSize();
        
        var dateLabel = new cc.LabelTTF(
            date,
            _b_getFontName(fonts.gameFont),
            30
        );
        dateLabel.attr({
            x: containerSize.width / 2,
            y: containerSize.height * .95,
            color: cc.color.BLACK
        });
        this.addChild(dateLabel);
        
        var stimuli = new cc.LabelTTF(
            "Stimuli",
            _b_getFontName(fonts.gameFont),
            20
        );
        stimuli.attr({
            x: containerSize.width / 2,
            y: containerSize.height * .84,
            color: cc.color.BLACK
        });
        this.addChild(stimuli);
        
        var yPos = containerSize.height * .76,
            yGap = 20;
        Object.keys(data.stimuli).forEach(function (stimulus) {
            var str = stimulus + " - Tries: " + 
                data.stimuli[stimulus].tries + 
                " Successes: " + data.stimuli[stimulus].successes;
            
            var stimulusLabel = new cc.LabelTTF(
                str,
                _b_getFontName(fonts.gameFont),
                18
            );
            stimulusLabel.attr({
                x: containerSize.width / 2,
                y: yPos,
                color: cc.color.BLACK
            });
            this.addChild(stimulusLabel);
            
            yPos -= yGap;
        }.bind(this));
        
        yPos -= yGap;
        
        var playedActivities = new cc.LabelTTF(
            "Played activities",
            _b_getFontName(fonts.gameFont),
            20
        );
        playedActivities.attr({
            x: containerSize.width / 2,
            y: yPos,
            color: cc.color.BLACK
        });
        this.addChild(playedActivities);
        
        yPos -= yGap * 1.5;
        
        data.playedActivities.forEach(function (activity) {    
            var activityLabel = new cc.LabelTTF(
                activity,
                _b_getFontName(fonts.gameFont),
                18
            );
            activityLabel.attr({
                x: containerSize.width / 2,
                y: yPos,
                color: cc.color.BLACK
            });
            this.addChild(activityLabel);
            
            yPos -= yGap;
        }.bind(this));
        
        return true;
    }
});