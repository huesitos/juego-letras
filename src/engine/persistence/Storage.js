var Storage = new function () {
    /*
    * Loads a saved item
    * @param {String} saved item key
    */
    this.loadItem = function (id) {
        return cc.sys.localStorage.getItem(id);
    };
    
    /*
    * Save an item
    * @param {String} key for the item to save
    * @param {object} item to save
    */
    this.saveItem = function (id, value) {
        cc.sys.localStorage.setItem(id, value);
    };
    
    /*
    * Loads a js object from storage
    * @param {String} saved object key
    */
    this.loadObject = function (id) {
        var data = cc.sys.localStorage.getItem(id);
        
        if (data)
            data = JSON.parse(data);
        
        return data;
    };
    
    /*
    * Saves a json object into storage
    * @param {String} key for the object
    * @param {object} object to save
    */
    this.saveObject = function (id, object) {
        cc.sys.localStorage.setItem(id, JSON.stringify(object));
    };
};