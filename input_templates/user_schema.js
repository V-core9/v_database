const logIt = (msg) => {
  if (process.v.consoleOutput) console.log(msg);
};

var errorList = [];
//<[ 🩺 - Data Validator ]>- - - - - - ->
const validate = async (data, content) => {
  const len = String(content).length;
  if (data.min !== undefined) if (len < data.min) errorList.push(data.msg.error.min);
  if (data.max !== undefined) if (len > data.max) errorList.push(data.msg.error.max);
  if (data.format !== undefined) if (!data.format.test(content)) errorList.push(data.msg.error.format);
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
      return (errorList.length === 0) ? true : { type: "ERROR", items: errorList };
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
      const isSame = (password === password_confirm);
      if (isSame !== true) errorList.push(user_schema.password.msg.error.confirm);
      if (await validate(user_schema.password, password) === isSame) logIt(user_schema.password.msg.success);
      return (errorList.length === 0) ? true : { type: "ERROR", items: errorList };
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
      if (await validate(user_schema.username, username) === process.v.consoleOutput) logIt(user_schema.username.msg.success);
      return (errorList.length === 0) ? true : { type: "ERROR", items: errorList };
    }
  }
};

module.exports = user_schema;
