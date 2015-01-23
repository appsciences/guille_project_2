(function(window){
    window.Utils = (function() {
        return {
            getRefs: function (component, processSimple) {
                var result = {};
                var self = this;

                Object.keys(component.refs).forEach(function (refName) {
                    if (component.refs[refName].props.simple !== undefined) {
                        result[refName] = self.getRefs(component.refs[refName], true);
                    } else if (component.refs[refName].props.complex !== undefined) {
                        result[refName] = self.getRefs(component.refs[refName], false);
                    } else if (component.refs[refName].props.collection !== undefined) {
                        result[refName] = component.refs[refName].refs[refName].props.collection;
                        result[refName].push( Utils.getRefs( component.refs[refName].refs[refName] ) );
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
            }
        }
    })();
})(window);
