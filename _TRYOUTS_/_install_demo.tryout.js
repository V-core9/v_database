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
    message: 'Application Log Level ? \n[ Chose the starting level you want to log.  ]\n[ Recommended Level ::  Errors Only     ]',
    choices: ['All', 'Min Info', 'Warnings and Errors', 'Errors Only', 'None of it'],
    default: 'Error',
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'confirm',
    name: 'consoleOutput',
    message: '📡 Print Log Output To Console ?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'saveLog',
    message: '🔂 Save Log Output To File ?',
    default: true,
  }
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(answers);
});
