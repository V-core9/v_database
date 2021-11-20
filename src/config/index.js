
const db_mode = require("./_set__config");


if (process.vConfig.consoleOutput !== true) {
  console.log(JSON.stringify(process.vConfig.db_mode, true, 4));
  console.log(`\n📑 Title : ${process.vConfig.title}`);
  console.log(`\n📡 Console Output : ${process.vConfig.consoleOutput}`);
  console.log(`\n🚀 Application is running in [ ${process.vConfig.mode} ] mode.`);
  console.log(`\n🚩 Data Directory : ${process.vConfig.data_dir}`);
  console.log(`\n📁 Database Mode : ${process.vConfig.db_mode}`);
}

module.exports = db_mode;
