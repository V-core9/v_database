
//<[ 🩺 - Data Validator ]>- - - - - - ->
const v_lidator = require('./v_lidator');

//<[ 🔂 - user_schema ]>- - - - - - ->
const user_schema = {
  email: {
    format: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    msg: {
      success: "✅ Success\n📫 Email Verified Successfully.",
      error: {
        format: "📑 Email verification failed."
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
        min: "❓ Password is too short.",
        max: "📛 Password length exceeded allowed maximum.",
        format: "🔓 Password contains characters that are not allowed. ",
        confirm: "🚨 Confirmation Password Entry Does Not Match Password Provided."
      }
    },
    validate: async (password, password_confirm) => {
      user_schema.password.confirm = password_confirm;
      return await v_lidator(user_schema.password, password);
    },
  },
  username: {
    min: 6,
    max: 32,
    format: /^[A-Za-z][A-Za-z0-9_.]{0,255}$/,
    msg: {
      success: "✅ Success\n🤪 Username Verified Successfully.",
      error: {
        min: "🤯 Username is too short.",
        max: "💥 Username exceeded allowed maximum.",
        format: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.",
      }
    },
    validate: async (username) => {
      return await v_lidator(user_schema.username, username);
    }
  }
};

module.exports = user_schema;