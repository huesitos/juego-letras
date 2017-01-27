var BackgroundLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        this.size = cc.winSize;
        
        return true;
    },
    addBackgroundImage: function (path, pos) {
        var image = new cc.Sprite(path);
        
        if (pos)
            image.attr({x: pos.x, y: pos.y});
        else
            image.attr({x: this.size.width / 2, y: this.size.height / 2});
        
        this.addChild(image);
    },
    addBackgroundObject: function (object) {
        this.addChild(object);
    }
});