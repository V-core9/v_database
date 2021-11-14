
const v_db = {
  config: require('./defaults.config'),
  options: {},
  newDB: require('./_new_db'),
  removeDatabase() {
    console.log('Remove a database from the pile.');
  },
  listDatabases() {
    console.log('List of all available databases.');
  },
  install: {
    createConfiguration() {
      console.log('Creating configuration when installing/setting up first time.');
    }
  }
};

module.exports = v_db;
