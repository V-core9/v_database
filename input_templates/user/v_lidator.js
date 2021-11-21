//<[ 🩺 - cfg Validator ]>- - - - - - ->
const v_lidator = async (cfg, data) => {
  var errorList = [];
  const len = String(data).length;
  if (cfg.min !== undefined) if (len < cfg.min) errorList.push(cfg.msg.error.min);
  if (cfg.max !== undefined) if (len > cfg.max) errorList.push(cfg.msg.error.max);
  if (cfg.format !== undefined) if (!cfg.format.test(data)) errorList.push(cfg.msg.error.format);
  return (errorList.length > 0) ? errorList : true;
};
//<- - - - - - - - - - - - - - - - - - ->

module.exports = v_lidator;
