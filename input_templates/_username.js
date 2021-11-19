
const _cfg = {
  min: 6,
  max: 32,
  format: /^[A-Za-z][A-Za-z0-9_.]{0,255}$/
};

const errorMsg = {
  chars: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.",
  min: "🤯 Username minimum length is [ " + _cfg.min + " ]",
  max: "💥 Username maximum length is [ " + _cfg.max + " ]",
};

module.exports = (username) => {
  var errorList = [];
  if (username.length < _cfg.min) errorList.push(errorMsg.min);
  if (username.length > _cfg.max) errorList.push(errorMsg.max);
  if (!_cfg.format.test(username)) errorList.push(errorMsg.chars);

  if (errorList.length === 0) return true;
  return { type: "ERROR", items: errorList };
};
