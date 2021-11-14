

const v_db = {
  config: {},
  options: {},
  mk: require('./_mk'),
  rm: require('./_rm'),
  listDatabases() {
    console.log('List of all available databases.');
  },
  install: {
    createConfiguration() {
      console.log('Creating configuration when installing/setting up first time.');
    }
  },
  loadConfig () {
    this.config = require('../v_config');
    if (this.config === {} ) {
      this.install.createConfiguration();
    }
    return this.config;
  },
  init () {
    this.loadConfig();
  }
};



module.exports = v_db;
