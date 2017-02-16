var audioManager = {
    playStimuli: function (res) {
        cc.audioEngine.setEffectsVolume(config.stimuliVolume);
        
        return cc.audioEngine.playEffect(res);
    },
    playEffect: function (res) {
        cc.audioEngine.setEffectsVolume(config.effectsVolume);
        
        return cc.audioEngine.playEffect(res);
    }
};