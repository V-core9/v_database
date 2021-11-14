const path = require('path');

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
    if (this.loadConfig() !== false) {
      this.mk = require(path.join(__dirname,'./_mk'));
      //console.log(this.mk);
      this.rm = require(path.join(__dirname,'./_rm'));
      //console.log(this.rm);
    }
  }
};

v_db.init();


module.exports = v_db;
