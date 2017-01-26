var GameScene = cc.Scene.extend({
    onEnter: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        //////////////////////////////
        // 2. add hud layer
        this.hudLayer = new HUDLayer();
        this.hudLayer.setVisible(false);
        this.addChild(this.hudLayer, 100);
        
        //////////////////////////////
        // 3. begin layer activity
        this.gameLayer.beginActivity();
    }
});