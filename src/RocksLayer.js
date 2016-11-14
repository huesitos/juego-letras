var RocksLayer = GameLayer.extend({
    ctor: function (bg) {
        //////////////////////////////
        // 1. super init first
        var rock1 = {
            initState: rocksImgRes[0].normal,
            clickedState: rocksImgRes[0].cracked
        }
        
        this._super(bg, rock1);
        
        this.optionButtons[1].setStatesTextures(
            rocksImgRes[1].normal,
            rocksImgRes[1].cracked
        );
        this.optionButtons[1].changeToNormal();
        
        this.optionButtons[2].setStatesTextures(
            rocksImgRes[2].normal,
            rocksImgRes[2].cracked
        );
        this.optionButtons[2].changeToNormal();
        return true;
    }
});