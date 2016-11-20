var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        
        this.hudLayer = new HUDLayer();
        this.hudLayer.setVisible(false);
        this.addChild(this.hudLayer, 100);
        
        this.gameLayer.beginActivity();
        
        this.scheduleUpdate();
    },
    update: function (dt) {
        GD.update(dt);
    }
});