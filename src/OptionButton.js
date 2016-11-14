function OptionButton(sprite_res, option) {
    var size = cc.winSize;
    
    var optionButton = new ccui.Button(sprite_res);
    
    optionButton.getOption = function () {
        return option;
    };
    optionButton.setPosition(cc.p(0, 0));

    var label = new cc.LabelTTF(option, "arial", 60);
    label.setColor(cc.color.BLACK);
    optionButton.addChild(label);
    label.setPosition(
        cc.p(optionButton.width / 2, optionButton.height * 1.3)
    );
    
    optionButton.setOption = function (new_opt) {
        option = new_opt;
        
        label.setString(new_opt);
    };
    
    optionButton.hideLabel = function () {
        label.setVisible(false);
    };
    
    optionButton.showLabel = function () {
        label.setVisible(true);
    };
    
    return optionButton;
};