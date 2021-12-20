const os = require('os');
const v_fs = require("v_file_system");
const inquirer = require('inquirer');
const boxen = require('boxen');

const { cfg_dpath, cfg_fpath } = require('../../config');


module.exports = async () => {
  console.log(boxen(`This will now walk you through the setup process, should be easy to finish.`, { padding: 1, title: `V_Database Setup`}));
  const questions = require('./questions');
  inquirer.prompt(questions).then((answers) => {

    //? Mark it
    answers.installed_ts = Date.now();
    //? System Architecture data
    answers.architecture = os.arch();
    answers.installed_os_platform = os.platform();
    answers.installed_os_version = os.version();
    answers.installed_os_release = os.release();
    answers.installed_os_type = os.type();

    //? Create the data folder
    v_fs.mkdirSy(cfg_dpath);
    //? Create the config file
    v_fs.writeSy(cfg_fpath + '.js', `module.exports = ${JSON.stringify(answers, null, 2)};`);
    //? Create the data folder
    v_fs.mkdirSy(cfg_dpath + '/' + answers.data_dir);

  });
};
