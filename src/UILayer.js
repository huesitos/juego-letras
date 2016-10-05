var UILayer = cc.Layer.extend({
    fuelBar: null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        var size = cc.winSize;
        
        //////////////////////////////
        // 2. create fuel bar
        this.fuelBar = new ccui.LoadingBar();
        this.fuelBar.loadTexture(imgRes.fuelBar);
        this.fuelBar.setPosition(
            cc.p(size.width * .07, size.height * .15)
        );
        this.fuelBar.setAnchorPoint(cc.p(0, 0));
        this.fuelBar.setRotation(270);
        this.fuelBar.setPercent(GD.currentLevel.getLevelScore());
        this.addChild(this.fuelBar);
        
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: FUEL_CHANGED_EVENT,
            callback: this.changeFuelBar.bind(this)
        }, this);
        
        cc.eventManager.addListener({
            event: cc.EventListener.CUSTOM,
            eventName: LEVEL_COMPLETED_EVENT,
            callback: this.levelCompleted.bind(this)
        }, this);
        
        return true;
    },
    changeFuelBar: function (event) {
        this.fuelBar.setPercent(
            GD.currentLevel.getLevelScore()
        );
    },
    levelCompleted: function (event) {
        this.fuelBar.setPercent(0);
    }
});