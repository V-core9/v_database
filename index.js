process.on('exit', () => {
  console.log("EXITING >>>");
});

process.title = "v_db - V-core9_DataBase";
console.log(`Process Title : ${process.title}`);

const v_db = require('./src/');

module.exports = v_db;
