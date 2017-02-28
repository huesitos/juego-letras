var audioManager = {
    stimuliId: '',
    playStimuli: function (res) {
        cc.audioEngine.stopEffect(this.stimuliId);
        this.stimuliId = cc.audioEngine.setEffectsVolume(config.stimuliVolume);
        
        cc.audioEngine.playEffect(res);
    },
    playEffect: function (res) {
        cc.audioEngine.stopEffect(this.stimuliId);
        cc.audioEngine.setEffectsVolume(config.effectsVolume);
        
        cc.audioEngine.playEffect(res);
    }
};