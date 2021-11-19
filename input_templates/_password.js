module.exports = (password, password_confirm) => {
  const errorMessageMatch = {type: "ERROR", message: "🚨 Password Confirmation Entry Does Not Match Password Value."};
  const resMatch = password === password_confirm;

  const errorMessage = { type: "ERROR", message: "🔓 Password does not meet the requirements." };
  const resTest = /^[A-Za-z0-9!@#$%^&*()_.]{5,31}$/.test(password) ;

  return ((resMatch === resTest) === true ) ? true :  (( resTest === false ) ? errorMessage : errorMessageMatch);
};
