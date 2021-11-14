const v_fs = require('v_file_system');
const path = require('path');
template_config = (data)=>{
  return `
  module.exports = {
    mode: "${(typeof data.mode !== 'undefined') ? (["dev","live"].indexOf(data.mode) > -1 ) ? data.mode : "live" : "live" }",
    location: "${(typeof data.location !== 'undefined') ?  data.location : "$_dat" }"
  }`;
};

module.exports = async () => {
  try {
    console.log('Creating configuration when installing/setting up first time.');
    const mkDbFileRes = await v_fs.promise.write(path.join(__dirname, `../../v_config.js`), template_config());
    return true;
  } catch (error) {
    return false;
  }
};

