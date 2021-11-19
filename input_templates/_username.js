
const _cfg = {
  min: 6,
  max: 32,
  format: /^[A-Za-z][A-Za-z0-9_.]{0,255}$/
};

const sysMsg = {
  success: "✅ Success\n🤪 Username verification successful.",
  errors: {
    chars: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.",
    min: "🤯 Username minimum length is [ " + _cfg.min + " ]",
    max: "💥 Username maximum length is [ " + _cfg.max + " ]",
  }
};

module.exports = (username) => {
  var errorList = [];

  if (username.length < _cfg.min) errorList.push(sysMsg.errors.min);
  if (username.length > _cfg.max) errorList.push(sysMsg.errors.max);
  if (!_cfg.format.test(username)) errorList.push(sysMsg.errors.chars);

  if (process.consoleOutput === true) console.log(errorList.length === 0 ? sysMsg.success : JSON.stringify(errorList));

  return (errorList.length === 0) ? true : { type: "ERROR", items: errorList };
};
