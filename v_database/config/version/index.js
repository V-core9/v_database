const version = {
    get: async () => {
        return (version.$_value !== undefined) ? version.$_value : false;
    },
    set: async (value) => {
        try {
            var errors = [];
            if (value === undefined) errors.push('Version Undefined [version set fail]');

            var array_help = value.split('.');
                if (array_help.length !== 3) errors.push(`Version Array Length Error [ 12.34.56 < expected format ][version set fail]`);
                if (array_help.indexOf('') > -1) errors.push(`Version Section Can Not Be Empty [version set fail]`);

            if (errors.length === 0) {
                array_help.forEach(element => {
                    if (isNaN(element)) errors.push(`Version Array Can Only Contain Numbers [version set fail]`);
                });
            }

            if (errors.length === 0) {
                version.$_value = value;
                return true;
            } else {
                //console.log (errors) ;
                return false;
            }

        } catch (error) {
            return false;
        }
    }
};

exports.version = version;