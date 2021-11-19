
const _cfg = {
  min: 6,
  max: 32,
  format: /^[A-Za-z0-9!@#$%^&*()_.]{0,255}$/
};

const sysMsg = {
  success: "✅ Success\n🔓 Password verification successful.",
  error: {
    min: "❌ Error\n❓ Password minimum length is [ " + _cfg.min + " ]",
    max: "❌ Error\n📛 Password maximum length is [ " + _cfg.max + " ]",
    chars: "❌ Error\n🔓 Password does not meet the requirements.",
    confirm: "❌ Error\n🚨 Password Confirmation Entry Does Not Match Password Provided."
  }
};

module.exports = (password, password_confirm) => {
  var errorList = [];

  if (password.length < _cfg.min) errorList.push(sysMsg.error.min);
  if (password.length > _cfg.max) errorList.push(sysMsg.error.max);
  if (password !== password_confirm) errorList.push(sysMsg.error.confirm);
  if (!_cfg.format.test(password)) errorList.push(sysMsg.error.chars);

  if (process.consoleOutput === true) console.log( errorList.length === 0 ? sysMsg.success : JSON.stringify(errorList) );

  return (errorList.length === 0) ? true : { type: "ERROR", items: errorList };

};
