var GetRefs = function (component, processSimple) {
    var result = {};

    Object.keys(component.refs).forEach(function (refName) {
        if (component.refs[refName].props.simple !== undefined) {
            result[refName] = GetRefs(component.refs[refName], true);
        } else if (component.refs[refName].props.complex !== undefined) {
            result[refName] = GetRefs(component.refs[refName], false);
        } else if (component.refs[refName].props.collection !== undefined) {
            result[refName] = component.refs[refName].state.collection;
        } else if (component.refs[refName].props.file !== undefined) {
            result[refName] = component.refs[refName].state.fileContent;
        }
        else {
            if (processSimple) {
                result = component.refs[refName].getValue();
            }
            else {
                result[refName] = component.refs[refName].getValue();
            }
        }
    });

    return result;
};

module.exports = GetRefs;