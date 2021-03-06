function OptionButton(spriteNormal, spriteClicked, option) {
    var size = cc.winSize;
    
    // create button with the stimulus label
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
    label.setColor(staticRes.textColor);
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
    
    /*
    * Set option label position to default
    */
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
    
    /*
    * Set the option text
    * @param {String} position of the particle
    */
    optionButton.setOption = function (new_opt) {
        option = new_opt;
        
        label.setString(new_opt);
    };
    
    /*
    * Set normal and clicked imgs path
    * @param {String} normal img path
    * @param {String} clicked img path
    */
    optionButton.setStatesTextures = function (normal, clicked) {
        spriteNormal = normal;
        spriteClicked = clicked;
    };
    
    /*
    * Trigger clicked status
    */
    optionButton.onClicked = function () {
        this.loadTextures(spriteClicked, spriteClicked);
        
        // reset labels positions
        setLabelsPositions();
    };
    
    /*
    * Trigger normal status
    */
    optionButton.changeToNormal = function () {
        this.loadTextures(spriteNormal, spriteNormal);
        
        // reset labels positions
        setLabelsPositions();
    };
    
    /*
    * Hide the stimulus label
    */
    optionButton.hideLabel = function () {
        labelRibbon.setVisible(false);
        label.setVisible(false);
    };
    
    /*
    * Show the stimulus label
    */
    optionButton.showLabel = function () {
        labelRibbon.setVisible(true);
        label.setVisible(true);
    };
    
    /*
    * Get the position for the energy crystal on top of the option btn
    */
    optionButton.getCrystalPosition = function () {
        var posX = optionButton.x;
        var posY = optionButton.y + optionButton.height + label.height + 50;
        return cc.p(posX, posY);
    };
    
    return optionButton;
};