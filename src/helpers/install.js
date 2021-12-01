const os = require('os');
const v_fs = require("v_file_system");
const inquirer = require('inquirer');

const install = () => {


console.log(`  _______________________________________
 /[ 🚀 - V_Database System Installation ]\\___________________
|''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''|
|  This will now walk you through the setup process,         |
|  should be easy to finish.                                 |
\\____________________________________________________________/\n`);


  const questions = [
    {
      type: 'list',
      name: 'app_mode',
      message: ' ⌘  - Run Mode?',
      choices: ["TEST", "DEV", "LIVE"],
      default: "LIVE",
    },
    {
      type: 'list',
      name: 'logLevel',
      message: ' ⌨  - Chose an application log level?',
      choices: ['NONE', 'ALL', 'INFO', 'WARN', 'ERROR', 'FATAL'],
      default: 'ERROR'
    },
    {
      type: 'list',
      name: 'log_to_console',
      message: ' ⍍  - Print Log Output To Console?',
      choices: ["YES", "NO", "OPTIMIZED"],
      default: "OPTIMIZED",
    },
    {
      type: 'confirm',
      name: 'console_colors',
      message: ' ⎚  - Enable Console Colors?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'log_to_file',
      message: ' ⎙  - Save Log Output To File?',
      default: true,
    },
    {
      type: 'list',
      name: 'cpu_max_usage',
      message: ' ⏣  - CPU Maximum Usage? [percents - %]',
      choices: ["25", "50", "75", "100"],
      default: "50",
    },
    {
      type: 'list',
      name: 'cache_size',
      message: ' ⎆  - Database Cache Maximum RAM usage? [GB]',
      choices: ["2", "4", "6", "8"],
      default: "4",
    },

    //? Data Directory Path
    {
      type: 'input',
      name: 'data_dir',
      message: ' ⏎  - Data Location?',
      default: '$_DATA',
    },

    //? Data Directory Path
    {
      type: 'list',
      name: 'db_structure',
      message: ' ⏣  - Database Mode ? [structure]',
      choices: ["oneForAll", "perType", "perItem"],
      default: "perItem",
    },

    //? System Autostart Application 
    {
      type: 'confirm',
      name: 'os_autostart',
      message: ' ⍢  - Enable Auto Startup with OS?',
      default: true,
    },

    //? System Notifications 
    {
      type: 'confirm',
      name: 'os_notify',
      message: ' ⍔  - Send OS Notifications?',
      default: true,
    },

    //? Root Admin Username
    {
      type: 'input',
      name: 'root_admin',
      message: ' ⏎  - Application Root Admin Username?',
      default: '$_Vdb_Admin',
    },

    //? Password Hashing Algorithm
    {
      type: 'list',
      name: 'pass_alg',
      message: ' ⎆  - Password Hashing Algorithm?',
      choices: ["md5", "sha256", "DISABLED"],
      default: "sha256",
    },

    //? Root Admin Password
    {
      type: 'input',
      name: 'root_admin_password',
      message: ' ⏎  - Application Root Admin Password?',
      default: '$123..PASS%\\\';,.\\99!',
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    console.log('🚀 Installation Config Results:');

    answers.cpu_max_usage = Number(answers.cpu_max_usage);
    answers.cache_size = Number(answers.cache_size);
    answers.arch = os.arch();
    answers.cpu_model = os.cpus()[0].model;
    answers.cpu_count = os.cpus().length;
    answers.cpu_speed = os.cpus()[0].speed;
    answers.homedir = os.homedir();
    answers.hostname = os.hostname();
    answers.network = os.networkInterfaces()[`Ethernet`];
    answers.platform = os.platform();
    answers.release = os.release();
    answers.tmpdir = os.tmpdir();
    answers.totalmem = os.totalmem();
    answers.type = os.type();
    answers.installed_by = os.userInfo().username;
    answers.installed_ts = Date.now();
    answers.version = os.version();


    v_fs.write(`${process.v.config.data_dir}/../v__config.js`, `module.exports = ${JSON.stringify(answers, null, 2)};`);

    console.log(answers);

  });

};

module.exports = install;