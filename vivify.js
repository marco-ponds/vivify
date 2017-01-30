const vivify = {
    set: function(_key, _value, _obj) {
        var obj = _obj || {},
            key = _key || "",
            value = _value || {},
            splitted = (typeof key == "string" && key !== '') ? key.split('.') : [];
        if (splitted.length == 1) {
            obj[splitted[0]] = value;
            return;
        }
        var k = splitted.shift();
        obj[k] = obj[k] ? obj[k] : {};
        var v = vivify.set(splitted.join('.'), value, obj[k]);
        return obj;
    },

    get: function(key, obj) {
        if (!obj) {
            new TypeError('[vivify] Object must be defined.');
            return;
        }
        var splitted = (typeof key == "string" && key !== '') ? key.split('.') : [];
        if (splitted.length == 1) {
          return obj[splitted[0]];
        }
        var k = splitted.shift();
        var v = obj[k] ? vivify.get(splitted.join('.'), obj[k]) : false;
        return v;
    }
};

module.exports = vivify;
