
//? Application Mode
const appMode = {
  type: 'list',
  name: 'app_mode',
  message: '  - Run Mode?',
  choices: ["TEST", "DEV", "LIVE"],
  default: "LIVE",
};

module.exports = [
  appMode,

  //? Data Directory Path
  {
    type: 'input',
    name: 'data_dir',
    message: '  - Data Location?',
    default: '$_DATA',
  },

];

