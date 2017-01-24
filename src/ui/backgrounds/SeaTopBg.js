var SeaTopBg = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        var size = cc.winSize;
        
        var waterBackground = new cc.Sprite(seaImgRes.seaTop_png);
        waterBackground.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(waterBackground);
        
        return true;
    }
});