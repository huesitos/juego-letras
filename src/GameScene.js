var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        
        this.addChild(new UILayer(), 100);
    }
});