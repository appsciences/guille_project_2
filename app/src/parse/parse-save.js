var ParseSave = function(objectName, data, success, error) {
    var ParseObject = Parse.Object.extend(objectName);
    var _parseObject = new ParseObject();

    _parseObject.save(data, {
        success: function (contactInfo) {
            success(contactInfo);
        },
        error: function (contactInfo, err) {
            error(contactInfo, err);
        }
    });
};

module.exports = ParseSave;