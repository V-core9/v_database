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
    name: 'logLevel',
    message: 'Chose an application log level? [ Default Level :: < ERROR > ]',
    choices: ['NONE', 'ALL', 'INFO', 'WARN', 'ERROR', 'FATAL'],
    default: 'ERROR'
  },
  {
    type: 'list',
    name: 'log_to_console',
    message: '📡 Print Log Output To Console?',
    choices: ["YES", "NO", 'OPTIMIZED'],
    default: "NO",
  },
  {
    type: 'confirm',
    name: 'log_to_file',
    message: '🔂 Save Log Output To File?',
    default: true,
  },
  {
    type: 'list',
    name: 'cpu_max_usage',
    message: '📡 CPU Maximum Usage? [percents - %]',
    choices: ["25", "50", "75", "100"],
    default: "50",
  },
  {
    type: 'list',
    name: 'ram_max_usage',
    message: '📡 RAM Maximum Usage? [GB]',
    choices: ["1", "2", "3", "4", "5", "6", "7", "8"],
    default: "4",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('🚀 Installation Config Results:');
  console.log(answers);
});
