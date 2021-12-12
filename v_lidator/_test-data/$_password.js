const user_schema = require('../../v_lidator/src/user/schema.js');

//? PASSWORD ERRORS 
const $_password = {
    _main(msg, string, confirm = undefined) {
        return [
            {
                "confirm": confirm,
                "input_value": string,
                "msg": msg.err,
                "suggest": msg.hint,
                "type": "error"
            }
        ];
    },

    minErr(string, confirm = undefined) {
        return $_password._main({ err: user_schema.password.msg.error.min, hint: "Minimum Length is [6]" }, string, confirm);
    },

    maxErr(string, confirm = undefined) {
        return $_password._main({ err: user_schema.password.msg.error.max, hint: "Maximum Length is [32]" }, string, confirm);
    },

    formatErr(string, confirm = undefined) {
        return $_password._main({ err: user_schema.password.msg.error.format, hint: "Try removing special characters." }, string, confirm);
    },

    confirmErr(string, confirm = undefined) {
        return $_password._main({ err: user_schema.password.msg.error.confirm, hint: "Make them same." }, string, confirm);
    },

    minConfirmErr(string, confirm = undefined) {
        var minErr = $_password.minErr(string, confirm);
        var confErr = $_password.confirmErr(string, confirm);
        return [minErr[0], confErr[0]];
    },

    minFormatErr(string, confirm = undefined) {
        var minErr = $_password.minErr(string, confirm);
        var formErr = $_password.formatErr(string, confirm);
        return [minErr[0], formErr[0]];
    },

    // maxConfirmErr(string, confirm = undefined) {
    //     var maxErr = $_password.maxErr(string, confirm);
    //     var confErr = $_password.confirmErr(string, confirm);
    //     return [maxErr[0], confErr[0]];
    // }
    
};

exports.$_password = $_password;
