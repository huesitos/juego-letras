var RecordsScene = cc.Scene.extend({
    ctor: function (number) {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.size = cc.winSize;
        this.recordPages = [];
        this.shownPage1;
        this.shownPage2;
        
        var bg = new BackgroundLayer();
        bg.addBackgroundImage(seaImgRes.seaMiddle_png);
        bg.addBackgroundImage(seaImgRes.seaMiddleFg_png);
        this.addChild(bg);
        
        //////////////////////////////
        // 2. nav btns
        var backBtn = new ccui.Button(uiImgRes.back_png);
        backBtn.setPosition(
            cc.p(-backBtn.width, this.size.height * .9)
        );
        backBtn.addTouchEventListener(this.onBackBtn, this);
        backBtn.runAction(
            new cc.Sequence(
                new cc.DelayTime(config.mapTransitionSpeed),
                new cc.EaseBackOut(
                    new cc.MoveTo(
                        0.25,
                        cc.p(this.size.width * .05, this.size.height * .9)
                    )
                )
            )
        );
        this.addChild(backBtn);
        
        //////////////////////////////
        // 3. record pages
        this.records = GameState.getRecord(number);
        var rCount = 1;
        
        // each page shows the stats for a day
        if (Object.keys(this.records).length > 0) {
            Object.keys(this.records).forEach(function (day) {
                var recordPage = new RecordPage(day, this.records[day]);
                var x,
                    y = this.size.height / 2;

                if (rCount % 2 === 0) {
                    x = this.size.width * .65;
                } else {
                    x = this.size.width * .25;
                }

                recordPage.setPosition(cc.p(x, y));
                recordPage.setVisible(false);
                this.recordPages.push(recordPage);
                this.addChild(recordPage);

                rCount += 1;
            }.bind(this));

            this.shownPage1 = this.recordPages.length - 1;
            this.recordPages[this.shownPage1].setVisible(true);

            if (this.recordPages.length > 1) {
                this.shownPage2 = this.recordPages.length - 2;
                this.recordPages[this.shownPage2].setVisible(true);
            }

            var upBtn = new ccui.Button(uiImgRes.up_png);
            upBtn.setPosition(
                cc.p(this.size.width * .9, this.size.height * .8)
            );
            upBtn.addTouchEventListener(this.onUpBtn, this);
            this.addChild(upBtn);

            var downBtn = new ccui.Button(uiImgRes.down_png);
            downBtn.setPosition(
                cc.p(this.size.width * .9, this.size.height * .3)
            );
            downBtn.addTouchEventListener(this.onDownBtn, this);
            this.addChild(downBtn);
        }
        
        return true;
    },
    onBackBtn: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            audioManager.playEffect(audioRes.click);
            
            cc.director.runScene(
                new cc.TransitionFade(
                    config.sceneTransitionSpeed,
                    SavedSelectionLayer.getScene(true)
                )
            );
        }
    },
    onUpBtn: function (sender, type) {
        // show the previous two pages
        if (type === ccui.Widget.TOUCH_ENDED) {
            var length = Object.keys(this.records).length;
            
            this.recordPages[this.shownPage1].setVisible(false);
            if (this.shownPage2 < length && this.shownPage2 >= 0)
                this.recordPages[this.shownPage2].setVisible(false);
            
            if (this.shownPage1 + 2 < length) {
                this.shownPage1 = this.shownPage1 + 2;
                this.shownPage2 = this.shownPage2 + 2;
            }
            
            if (this.shownPage1 < length) {
                this.recordPages[this.shownPage1].setVisible(true);
            }
            if (this.shownPage2 < length) {
                this.recordPages[this.shownPage2].setVisible(true);
            }
        }
    },
    onDownBtn: function (sender, type) {
        // show the next two pages
        if (type === ccui.Widget.TOUCH_ENDED) {
            var length = Object.keys(this.records).length;
            
            this.recordPages[this.shownPage1].setVisible(false);
            if (this.shownPage2 >= 0) {
                this.recordPages[this.shownPage2].setVisible(false);
            }
            
            if (this.shownPage1 - 2 >= 0) {
                this.shownPage1 = this.shownPage1 - 2;
                this.shownPage2 = this.shownPage2 - 2;
            }
                        
            if (this.shownPage1 >= 0) {
                this.recordPages[this.shownPage1].setVisible(true);
            }
            if (this.shownPage2 >= 0) {
                this.recordPages[this.shownPage2].setVisible(true);
            }
        }
    }
});