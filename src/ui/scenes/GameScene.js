var GameScene = cc.Scene.extend({
    onEnter: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        
        //////////////////////////////
        // 2. add hud layer
        this.hudLayer = new HUDLayer();
        this.addChild(this.hudLayer, 100);
        
        //////////////////////////////
        // 3. begin layer activity
        this.gameLayer.beginActivity();
    }
});