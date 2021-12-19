const v_fs = require('v_file_system');
const path = require('path');
const v_db = require(path.join(__dirname, 'index'));

(async () => {
  if (await v_db.check_config_dir() === false || await v_db.check_config_file() === false ) await v_db.install();
})();
