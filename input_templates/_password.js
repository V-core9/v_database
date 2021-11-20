const validator_messages = require('./v_lidator_messages');

const _cfg = {
  min: 6,
  max: 32,
  format: /^[A-Za-z0-9!@#$%^&*()_.]{0,255}$/
};

var errorList = [];



module.exports = (password, password_confirm) => {

  if (password.length < _cfg.min) errorList.push(validator_messages.password.error.min);
  if (password.length > _cfg.max) errorList.push(validator_messages.password.error.max);
  if (password !== password_confirm) errorList.push(validator_messages.password.error.confirm);
  if (!_cfg.format.test(password)) errorList.push(validator_messages.password.error.chars);

  return (errorList.length === 0) ? validator_messages.password.success : { type: "ERROR", items: errorList };

};
