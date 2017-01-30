var Effects = new function() {
    this.createSimpleParticles = function (pos) {
        var particles = new cc.ParticleSystem(effectsRes.particles_plist)
        particles.setScale(0.5);
        particles.setPosition(pos);
        
        return particles;
    };
};