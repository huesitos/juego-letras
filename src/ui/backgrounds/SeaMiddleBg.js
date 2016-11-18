var SeaMiddleBg = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        var size = cc.winSize;
        
        this.background = new cc.Sprite(seaImgRes.seaWater_png);
        this.background.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(this.background);
    }
});