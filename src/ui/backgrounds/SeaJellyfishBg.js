var SeaJellyfishBg = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        var size = cc.winSize;
        
        var waterBackground = new cc.Sprite(seaImgRes.seaWater_png);
        waterBackground.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(waterBackground);
        
        this.background = new cc.Sprite(seaImgRes.jellyfish_png);
        this.background.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(this.background);
    }
});