
const db_mode = require("./_set__config");

/*
if (process.v.consoleOutput === true) {
  console.log(JSON.stringify(process.v.db_mode, true, 4));
  console.log(`\n📑 Title : ${process.v.title}`);
  console.log(`\n📡 Console Output : ${process.v.consoleOutput}`);
  console.log(`\n🚀 Application is running in [ ${process.v.mode} ] mode.`);
  console.log(`\n🚩 Data Directory : ${process.v.data_dir}`);
  console.log(`\n📁 Database Mode : ${process.v.db_mode}`);
}*/

module.exports = db_mode;
