var Utils = {};

Utils.copyObject = function (object) {
    return JSON.parse(JSON.stringify(object));
}

/*
* Return a random number within the range [start, end)
* @param {int} start Left most boundary
* @param {int} end Right most boundary and not inclusive
*/

Utils.randomNumber = function (start, end) {
	
	if (start > end) {
		throw "Start must be less than end";
	} else {
		var r = Math.floor(Math.random() * (end - start)) + start;
		
		return r;
	}
};

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
Utils.shuffle = function (a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}