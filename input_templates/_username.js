const validator_messages = require('./v_lidator_messages');

var errorList = [];

const _cfg = {
  min: 6,
  max: 32,
  format: /^[A-Za-z][A-Za-z0-9_.]{0,255}$/,
  validate_length = async (len) => {
    if (len < _cfg.min) errorList.push(validator_messages.username.errors.min);
    if (len > _cfg.max) errorList.push(validator_messages.username.errors.max);
  },
  validate_format = async (len) => {
    if (!_cfg.format.test(username)) errorList.push(validator_messages.username.errors.chars);
  },
};



module.exports = async (username) => {

  await _cfg.validate_length(String(username).length);
  await _cfg.validate_format(username);


  return (errorList.length === 0) ? validator_messages.username.success : { type: "ERROR", items: errorList };
};
