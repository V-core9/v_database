module.exports = async(password) => {
  const errorMessage = { type: "ERROR", message: "🔓 Password does not meet the requirements." };
  return /^[A-Za-z0-9!@#$%^&*()_.]{5,31}$/.test(password) ? true : errorMessage;
};
