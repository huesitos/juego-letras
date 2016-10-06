var GameLayer = cc.Layer.extend({
    pause: function () {
        this._super();
        
        for (var i = 0; i < this.optionButtons.length; i++) {
            this.optionButtons[i].pause();
        }
    },
    resume: function () {
        this._super();
        
        for (var i = 0; i < this.optionButtons.length; i++) {
            this.optionButtons[i].resume();
        }
    }
});