var errorList = [];



validate = async (data, content) => {
    const len = String(content).length;

    if (typeof data.min !== 'undefined') if (len < data.min) errorList.push(data.msg.error.min);
    if (typeof data.min !== 'undefined') if (len < data.max) errorList.push(data.msg.error.max);
    if (typeof data.format !== 'undefined') if (!data.format.test(content)) errorList.push(data.msg.error.format);
    return;
};


const used_schema = {
    email: {
        format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        msg: {
            success: "✅ Success\n📫 Email verification successful.",
            error: {
                format: "❌Error\n📑 Email verification failed."
            }
        }
    },
    password: {
        min: 6,
        max: 32,
        format: /^[A-Za-z0-9!@#$%^&*()_.]{0,255}$/,
        msg: {
            success: "✅ Success\n🔓 Password verification successful.",
            error: {
                min: "❌ Error\n❓ Password minimum length is [ " + used_schema.password.min + " ]",
                max: "❌ Error\n📛 Password maximum length is [ " + used_schema.password.max + " ]",
                format: "❌ Error\n🔓 Password does not meet the requirements.",
                confirm: "❌ Error\n🚨 Password Confirmation Entry Does Not Match Password Provided."
            }
        },
        validate = (password, password_confirm) => {
            await validate(user_schema.password, password);
            if (password !== password_confirm) errorList.push(validator_messages.password.error.confirm);
            return (errorList.length === 0) ? validator_messages.password.success : { type: "ERROR", items: errorList };
        },
    },
    username: {
        min: 6,
        max: 32,
        format: /^[A-Za-z][A-Za-z0-9_.]{0,255}$/,
        msg: {
            success: "✅ Success\n🤪 Username verification successful.",
            error: {
                format: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.",
                min: "🤯 Username minimum length is [ " + used_schema.username.min + " ]",
                max: "💥 Username maximum length is [ " + used_schema.username.max + " ]",
            }
        },
        validate = async (username) => {
            await validate(user_schema.username, username);
            return (errorList.length === 0) ? used_schema.username.msg.success : { type: "ERROR", items: errorList };
        }
    }
}

module.exports = used_schema;