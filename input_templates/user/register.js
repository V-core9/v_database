const v_to_sha256 = require('v_to_sha256');
const v_db = require("../../index");



const v_lidator = require('../v_lidator');

user_input_template = (data) => {
  return {
    username: data.username,
    password: data.password,
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


register = async (data) => {
  const err = [];

  //console.time(data.username+"._unique_status");
  //const uniqueStatus = await v_db.item.view('users', { username: data.username });
  //if (uniqueStatus) err.push({ type: "ERROR", message: "💎 Username is not unique. [ " + data.username + " ]" });
  //console.timeEnd(data.username+"._unique_status");

  var resp = v_lidator.username(data.username);
  if (resp !== true) err.push(resp);

  resp = v_lidator.email(data.email);
  if (resp !== true) err.push(resp);

  resp = v_lidator.password(data.password, data.password_confirm);
  if (resp !== true) err.push(resp);


  if (err.length === 0) {
    return await v_db.item.new('users', user_input_template(data));
  }

  if (process.consoleOutput === true) console.log('\n🔻Validations Failed : Looks like there were some errors.\n' + JSON.stringify(err, true, 2));

  return err;
};

module.exports = register;
