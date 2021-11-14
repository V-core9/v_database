const v_fs = require('v_file_system');

console.log(v_fs);


process.on('exit', ()=> {
  console.log("EXITING >>>");
});

console.log(`Process Version : ${process.version}`);

process.title = "v_db - V-core9_DataBase";
console.log(`Process Title : ${process.title}`);
console.log(`USERNAME : ${process.env.USERNAME}`);
console.log(`USERDOMAIN : ${process.env.USERDOMAIN}`);
console.log(`PROCESSOR_ARCHITECTURE : ${process.env.PROCESSOR_ARCHITECTURE}`);
console.log(`NUMBER_OF_PROCESSORS : ${process.env.NUMBER_OF_PROCESSORS}`);
console.log(`OS : ${process.env.OS}`);
console.log(`HOME : ${process.env.HOME}`);
console.log(`HOMEPATH : ${process.env.HOMEPATH}`);
console.log(`PWD : ${process.env.PWD}`);
console.log(`pid : ${process.pid}`);
