function OptionButton(spriteNormal, spriteClicked, option) {
    var size = cc.winSize;
    
    var optionButton = new ccui.Button(spriteNormal);
    
    optionButton.getOption = function () {
        return option;
    };
    optionButton.setPosition(cc.p(0, 0));

    var label = new cc.LabelTTF(option, _b_getFontName(fonts.gameFont), 60);
    label.setColor(cc.color.BLACK);
    optionButton.addChild(label);
    label.setPosition(
        cc.p(optionButton.width / 2, optionButton.height * 1.25)
    );
    
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
        label.setVisible(false);
    };
    
    optionButton.showLabel = function () {
        label.setVisible(true);
    };
    
    return optionButton;
};