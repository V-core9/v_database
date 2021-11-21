const logIt = (msg) => {
  if (process.v.consoleOutput) console.log(msg);
};

//<[ 🩺 - Data Validator ]>- - - - - - ->
const v_lidator = require('./v_lidator');
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
      return await v_lidator(user_schema.email, email);
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
      return (password === password_confirm) ? await v_lidator(user_schema.password, password) : user_schema.password.msg.error.confirm;
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
      return await v_lidator(user_schema.username, username);
    }
  }
};

module.exports = user_schema;
