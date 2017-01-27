var Storage = new function () {
    this.loadItem = function (id) {
        return cc.sys.localStorage.getItem(id);
    };
    
    this.saveItem = function (id, value) {
        cc.sys.localStorage.setItem(id, value);
    };
    
    this.loadObject = function (id) {
        return JSON.parse(cc.sys.localStorage.getItem(id));
    };
    
    this.saveObject = function (id, object) {
        cc.sys.localStorage.setItem(id, JSON.stringify(object));
    };
};