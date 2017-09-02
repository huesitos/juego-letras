var audioManager = {
    playStimuli: function (res) {
        cc.audioEngine.stopAllEffects();
        this.stimuliId = cc.audioEngine.setEffectsVolume(config.stimuliVolume);
        
        cc.audioEngine.playEffect(res);
    },
    playEffect: function (res) {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.setEffectsVolume(config.effectsVolume);
        
        cc.audioEngine.playEffect(res);
    }
};