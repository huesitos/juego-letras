var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        
        this.addChild(new HUDLayer(), 100);
        
        this.scheduleUpdate();
    },
    update: function (dt) {
        GD.update(dt);
    }
});