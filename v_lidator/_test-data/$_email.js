const user_schema = require('../../v_lidator/src/user/schema.js');

const $_email = (string) => {
    return [
        {
            "confirm": undefined,
            "input_value": string,
            "msg": user_schema.email.msg.error.format,
            "suggest": "Try removing special characters.",
            "type": "error"
        }
    ];
};

exports.$_email = $_email;