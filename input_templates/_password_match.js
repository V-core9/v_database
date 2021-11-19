module.exports = async (password, password_confirm) => {
  const errorMessage = {type: "ERROR", message: "🚨 Password Confirmation Entry Does Not Match Password Value."};
  return  (password === password_confirm) ? true : errorMessage;
};
