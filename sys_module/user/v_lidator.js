//<[ 🩺 - cfg Validator ]>- - - - - - ->
const v_lidator = async (cfg, data) => {
  var errorList = [];
  const len = String(data).length;
  if (cfg.min !== undefined) if (len < cfg.min) errorList.push({ type: 'error', input_value: data, msg: cfg.msg.error.min, suggest: ' Hint: Minimum Length is [' + cfg.min + ']' });
  if (cfg.max !== undefined) if (len > cfg.max) errorList.push({ type: 'error', input_value: data, msg: cfg.msg.error.max, suggest: ' Hint: Maximum Length is [' + cfg.max + ']' });
  if (cfg.format !== undefined) if (!cfg.format.test(data)) errorList.push({ type: 'error', input_value: data, msg: cfg.msg.error.format, suggest: 'Try removing special characters.' });
  if (cfg.msg.error.confirm !== undefined) if (data === cfg.confirm) errorList.push({ type: 'error', input_value: data, msg: cfg.msg.error.confirm, suggest: 'Make them same.' });
  return (errorList.length > 0) ? errorList : true;
};
//<- - - - - - - - - - - - - - - - - - ->

module.exports = v_lidator;
