


(() => {
  console.log('starting v_db...');

  const info = require('./info');
  const { config } = require('./config');
  const { data_size, install, purge_database } = require('./helpers');
  const modules = require('./modules');

  const v_db = {
    info,
    config,
    data_size,
    install,
    purge_database,
    type: require('./type'),
    item: require('./item')
  };

  module.exports = v_db;

})();

process.on('exit', () => {
  console.log('exiting v_db...');
});

