

const v_db = {
  config: null,
  options: null,
  mk: null,
  rm: null,
  listDatabases() {
    console.log('List of all available databases.');
  },
  install: require('./install'),
  loadConfig() {
    try {
      this.config = require('../v_config');
      return this.config;
    } catch (error) {
      return this.install.createConfig();
    }
  },
  init() {
    if (this.loadConfig()) {
      this.mk = require('./_mk');
      this.rm = require('./_rm');
    }
  }
};

v_db.init();


module.exports = v_db;
