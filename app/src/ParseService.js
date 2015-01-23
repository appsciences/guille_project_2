(function(window){
    window.ParseService = (function() {
        var _parseObject;

        var init = function (objectName) {
            var ParseObject = Parse.Object.extend(objectName);
            _parseObject = new ParseObject();
        };

        return {
            Save: function (objectName, data, success, error) {
                init(objectName);
                _parseObject.save(data, {
                    success: function (contactInfo) {
                        success(contactInfo);
                    },
                    error: function (contactInfo, error) {
                        error(contactInfo, error);
                    }
                });
            }
        };
    })();
})(window);
