function OptionButton(spriteNormal, spriteClicked, option) {
    var size = cc.winSize;
    
    var optionButton = new ccui.Button(spriteNormal);
    
    optionButton.getOption = function () {
        return option;
    };
    optionButton.setPosition(cc.p(0, 0));

    var label = new cc.LabelTTF(
        option,
        _b_getFontName(fonts.gameFont), 
        50
    );
    label.setColor(cc.color.BLACK);
    optionButton.addChild(label, 2);
    label.setPosition(
        cc.p(optionButton.width / 2, -5)
    );
    
    var labelRibbon = new cc.Sprite(uiImgRes.labelRibbon_png);
    labelRibbon.attr({
        x: optionButton.width / 2,
        y: -5,
        scale: .5
    });
    optionButton.addChild(labelRibbon, 1);
    
    optionButton.setOption = function (new_opt) {
        option = new_opt;
        
        label.setString(new_opt);
    };
    
    optionButton.setStatesTextures = function (normal, clicked) {
        spriteNormal = normal;
        spriteClicked = clicked;
    };
    
    optionButton.onClicked = function () {
        this.loadTextures(spriteClicked, spriteClicked);
    };
    
    optionButton.changeToNormal = function () {
        this.loadTextures(spriteNormal, spriteNormal);
    };
    
    optionButton.hideLabel = function () {
        labelRibbon.setVisible(false);
        label.setVisible(false);
    };
    
    optionButton.showLabel = function () {
        labelRibbon.setVisible(true);
        label.setVisible(true);
    };
    
    return optionButton;
};