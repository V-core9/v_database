const v_db = require('.');

(async () => {
  if (await v_db.check_config_dir() === false || await v_db.check_config_file() === false ) await v_db.install();
})();
