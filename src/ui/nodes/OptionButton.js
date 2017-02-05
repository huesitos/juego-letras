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
    label.attr({
        x: optionButton.width / 2,
        y: optionButton.height + 50
    });
    
    var labelRibbon = new cc.Sprite(uiImgRes.labelRibbon_png);
    labelRibbon.attr({
        x: optionButton.width / 2,
        y: optionButton.height + 50,
        scale: .5
    });
    optionButton.addChild(labelRibbon, 1);
    
    var setLabelsPositions = function () {
        // reset labels positions
        labelRibbon.attr({
            x: optionButton.width / 2,
            y: optionButton.height + 50
        });
        label.attr({
            x: optionButton.width / 2,
            y: optionButton.height + 50
        });
    };
    
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
        
        // reset labels positions
        setLabelsPositions();
    };
    
    optionButton.changeToNormal = function () {
        this.loadTextures(spriteNormal, spriteNormal);
        
        // reset labels positions
        setLabelsPositions();
    };
    
    optionButton.hideLabel = function () {
        labelRibbon.setVisible(false);
        label.setVisible(false);
    };
    
    optionButton.showLabel = function () {
        labelRibbon.setVisible(true);
        label.setVisible(true);
    };
    
    optionButton.getCrystalPosition = function () {
        var posX = optionButton.x;
        var posY = optionButton.y + optionButton.height + label.height + 50;
        return cc.p(posX, posY);
    };
    
    return optionButton;
};