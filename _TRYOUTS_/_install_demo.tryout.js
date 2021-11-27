const os = require('os');

const coreChoices = {
  maxUsage: {
    ram: 25,
    cpu: 50,
  },
  username: process.env.USERNAME,
  userDomain: process.env.USERNAME,
};

console.log(coreChoices);

const inquirer = require('inquirer');

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
    name: 'ram_max_usage',
    message: ' ⎆  - RAM Maximum Usage? [GB]',
    choices: ["2", "4", "6", "8"],
    default: "4",
  },
  
  {
    type: 'input',
    name: 'data_dir',
    message: ' ⏎  - Data Location?',
    default: '$_DATA',
  },
  {
    type: 'confirm',
    name: 'autostart',
    message: ' ⍢  - Enable Auto Startup with OS?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'notifications',
    message: ' ⍔  - Send OS Notifications?',
    default: true,
  },
  
  {
    type: 'input',
    name: 'root_admin',
    message: ' ⏎  - Application Root Admin Username?',
    default: '$_Vdb_Admin',
  },
  
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
  answers.ram_max_usage = Number(answers.ram_max_usage);
  console.log(answers);
  
});
