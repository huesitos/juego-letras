var FishermanLayer = GameLayer.extend({
    ctor: function (optionsPos, gap, activity) {
        //////////////////////////////
        // 1. super init first
        var fish1 = {
            initState: fishesImgRes[0].normal,
            clickedState: fishesImgRes[0].selected
        }
        
        this._super(fish1, optionsPos, gap, activity);
        
        //////////////////////////////
        // 2. modify rocks so each is different
        
        this.optionButtons[1].setStatesTextures(
            fishesImgRes[1].normal,
            fishesImgRes[1].selected
        );
        this.optionButtons[1].changeToNormal();
        
        this.optionButtons[2].setStatesTextures(
            fishesImgRes[2].normal,
            fishesImgRes[2].selected
        );
        this.optionButtons[2].changeToNormal();
        
        return true;
    }
});