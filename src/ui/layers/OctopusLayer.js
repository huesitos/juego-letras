var OctopusLayer = GameLayer.extend({
    ctor: function (optionsPos, gap, activity) {
        //////////////////////////////
        // 1. super init first
        var ink1 = {
            initState: seaImgRes.ink1_png,
            clickedState: seaImgRes.ink1_png
        }
        
        this._super(ink1, optionsPos, gap, activity);
        
        var size = cc.winSize;
        
        //////////////////////////////
        // 2. modify inks so each is different
        
        this.optionButtons[0].setVisible(false);
        
        this.optionButtons[1].setStatesTextures(
            seaImgRes.ink2_png,
            seaImgRes.ink2_png
        );
        this.optionButtons[1].changeToNormal();
        this.optionButtons[1].setVisible(false);
        
        this.optionButtons[2].setStatesTextures(
            seaImgRes.ink3_png,
            seaImgRes.ink3_png
        );
        this.optionButtons[2].changeToNormal();
        this.optionButtons[2].setVisible(false);
        
        return true;
    }
});