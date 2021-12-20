
//? Application Mode
var appMode = {
  type: 'list',
  name: 'app_mode',
  message: '  - Run Mode?',
  choices: ["TEST", "DEV", "LIVE"],
  default: "LIVE",
};

//? Log to Console
const consoleLog = {
  type: 'confirm',
  name: 'log_to_console',
  message: '  - Print Log Output To Console?',
  default: false,
};


//? Save Log To File
const saveLog = {
  type: 'confirm',
  name: 'log_to_file',
  message: '  - Save Log Output To File?',
  default: true,
};

module.exports = [
  appMode,
  consoleLog,
  saveLog,

  //? Data Directory Path
  {
    type: 'input',
    name: 'data_dir',
    message: '  - Data Location?',
    default: '$_DATA',
  },

];

