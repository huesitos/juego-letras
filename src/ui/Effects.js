var Effects = new function() {
    this.createSimpleParticles = function (pos) {
        var particles = new cc.ParticleSystem(effectsRes.particles_plist)
        particles.setScale(0.5);
        particles.setPosition(pos);
        
        return particles;
    };
    
    this.createJerkAnimation = function () {
        
        var rotateRight = new cc.RotateTo(0.05, 15);
        var rotateLeft = new cc.RotateTo(0.05, -15);
        var rotateBack = new cc.RotateTo(0.05, 0);
        
        var action = new cc.RepeatForever(
            new cc.Sequence(
                rotateRight,
                rotateBack,
                rotateLeft,
                rotateBack,
                new cc.DelayTime(1)
            )
        );
        
        return action;
    }
};