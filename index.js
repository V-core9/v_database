
process.title = "v_db - V-core9_DataBase";
console.log(`Process Title : ${process.title}`);
const config = require("./config");
const v_db = require('./src/');

module.exports = v_db;
