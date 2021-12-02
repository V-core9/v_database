const version = { 
    $_value : "1.0.1",
    get : async () => {
        try {
            return version.$_value;
        } catch (error) {
            return false;
        }
    },
    set: async (value) => {
        try {
            var array_help = value.split('.');
            if ( (value === undefined) || (array_help.length !== 3) || array_help.indexOf('') > -1) return false;
            array_help.forEach(element => { 
                if (isNaN(element)) return false;
            });

            version.$_value = value;
            return true;
        } catch (error) {
            return false;
        }
    }
};

exports.version = version;