var Storage = new function () {
    this.loadItem = function (id) {
        return cc.sys.localStorage.getItem(id);
    };
    
    this.saveItem = function (id, value) {
        cc.sys.localStorage.setItem(id, value);
    };
    
    this.loadObject = function (id) {
        var data = cc.sys.localStorage.getItem(id);
        
        if (data)
            data = JSON.parse(data);
        
        return data;
    };
    
    this.saveObject = function (id, object) {
        cc.sys.localStorage.setItem(id, JSON.stringify(object));
    };
};