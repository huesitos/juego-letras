var Effects = new function() {
    /*
    * Returns a particle system that can be added to a node
    * @param {cc.p} position of the particle
    */
    this.createSimpleParticles = function (pos) {
        var particles = new cc.ParticleSystem(effectsRes.particles_plist)
        particles.setScale(0.5);
        particles.setPosition(pos);
        
        return particles;
    };
    
    /*
    * Returns jerk animation that can be run on a node
    */
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