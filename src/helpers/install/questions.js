module.exports =  [
  {
    type: 'list',
    name: 'app_mode',
    message: '  - Run Mode?',
    choices: ["TEST", "DEV", "LIVE"],
    default: "LIVE",
  },

  {
    type: 'confirm',
    name: 'log_to_console',
    message: '  - Print Log Output To Console?',
    default: false,
  },

  {
    type: 'confirm',
    name: 'log_to_file',
    message: '  - Save Log Output To File?',
    default: true,
  },

  //? Data Directory Path
  {
    type: 'input',
    name: 'data_dir',
    message: '  - Data Location?',
    default: '$_DATA',
  },

];

