const v_to_sha256 = require('v_to_sha256');
const v_db = require("../../index");

const user_schema = require('./schema');

user_input_template = (data) => {
  return {
    username: data.username,
    password: v_to_sha256(data.password),
    email: data.email,
    first_name: null,
    last_name: null,
    middle_name: null,
    register_ts: Date.now(),
    type: "user",
    status: "active",
    verified: false,
    verification_ts: null
  };
};

const resultCount = {
  failed: 0,
  success: 0
};

register = async (data) => {
  //console.log(resultCount);
  const err = [];

  //console.time(data.username+"._unique_status");
  //const uniqueStatus = await v_db.item.view('users', { username: data.username });
  //if (uniqueStatus) err.push({ type: "ERROR", message: "💎 Username is not unique. [ " + data.username + " ]" });
  //console.timeEnd(data.username+"._unique_status");


  var validResp = await user_schema.username.validate(data.username);
  if (validResp !== true) err.push(validResp);

  validResp = await user_schema.email.validate(data.email);
  if (validResp !== true) err.push(validResp);

  validResp = await user_schema.password.validate(data.password, data.password_confirm);
  if (validResp !== true) err.push(validResp);


  if (err.length === 0) {
    resultCount.success++;
    return await v_db.item.new('users', user_input_template(data));
  }

  if (process.v.consoleOutput === true) console.log('\n🔻Validations Failed : Looks like there were some errors.\n' + JSON.stringify(err, true, 2));

  resultCount.failed++;
  return err;
};

const stopInterval = () => {
  clearInterval(intervalDemoConsole);
  intervalDemoConsole = null;
};

var intervalDemoConsole = setInterval(() => {
  if (process.v.shouldStopLoopConsole === true) {
    process.v.resultCount = resultCount;
    stopInterval();
  } else {
    console.log(resultCount);
  }
}, 1000);


module.exports = register;
