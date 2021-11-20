var errorList = [];

//<[ 🩺 - Data Validator ]>- - - - - - ->
const validate = async (data, content) => {
    const len = String(content).length;
    if (typeof data.min !== 'undefined') if (len < data.min) errorList.push(data.msg.error.min);
    if (typeof data.max !== 'undefined') if (len > data.max) errorList.push(data.msg.error.max);
    if (typeof data.format !== 'undefined') if (!data.format.test(content)) errorList.push(data.msg.error.format);
    return;
};
//<- - - - - - - - - - - - - - - - - - ->


//<[ 🔂 - user_schema ]>- - - - - - ->
const user_schema = {
    email: {
        format: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        msg: {
            success: "✅ Success\n📫 Email Verified Successfully.",
            error: {
                format: "❌Error\n📑 Email verification failed."
            }
        },
        validate: async (email) => {
            errorList = [];
            await validate(user_schema.email, email);

            return (errorList.length === 0) ? user_schema.email.success : { type: "ERROR", items: errorList };
        }
    },
    password: {
        min: 6,
        max: 32,
        format: /^[A-Za-z0-9!@#$%^&*()_.]{0,255}$/,
        msg: {
            success: "✅ Success\n🔓 Password Verified Successfully.",
            error: {
                min: "❌ Error\n❓ Password is too short. Hint: Just make it little longer.",
                max: "❌ Error\n📛 Pasword length exceeded allowed maximum. Hint: Make it shorter.",
                format: "❌ Error\n🔓 Password contains characters that are not allowed. Hint: Try removing special characters.",
                confirm: "❌ Error\n🚨 Confirmation Password Entry Does Not Match Password Provided. Hint: Make them same."
            }
        },
        validate: async (password, password_confirm) => {
            errorList = [];
            await validate(user_schema.password, password);
            if (password !== password_confirm) errorList.push(user_schema.password.error.confirm);
            return (errorList.length === 0) ? user_schema.password.success : { type: "ERROR", items: errorList };
        },
    },
    username: {
        min: 6,
        max: 32,
        format: /^[A-Za-z][A-Za-z0-9_.]{0,255}$/,
        msg: {
            success: "✅ Success\n🤪 Username Verified Successfully.",
            error: {
                min: "❌ Error\n🤯 Username is too short. Hint: Just make it little longer.",
                max: "❌ Error\n💥 Username exceeded allowed maximum. Hint: Make it shorter.",
                format: "❌ Error\n🙋‍♂️ Username can only have letters, numbers, underscore and dot. Hint: Try removing special characters.",
            }
        },
        validate: async (username) => {
            errorList = [];
            await validate(user_schema.username, username);
            return (errorList.length === 0) ? user_schema.username.msg.success : { type: "ERROR", items: errorList };
        }
    }
}

module.exports = user_schema;

console.log(user_schema);