const v_db = require("../../../index");
const user_schema = require('./schema');

user_template = require('../templates/user');
email_template = require('../templates/user_emails');

register = async (data) => {
  
  const err = [];

  const users = await v_db.item.view('users');
  const user_emails = await v_db.item.view('user_emails');

  if (users.indexOf(data.username) > -1) err.push({ type: "ERROR", message: "💎 USERNAME is not unique. [ " + data.username + " ]" });
  if (user_emails.indexOf(data.email) > -1) err.push({ type: "ERROR", message: "💎 EMAIL is not unique. [ " + data.email + " ]" });

  var validResp = await user_schema.username.validate(data.username);
  if (validResp !== true) err.push(validResp);

  validResp = await user_schema.email.validate(data.email);
  if (validResp !== true) err.push(validResp);

  validResp = await user_schema.password.validate(data.password, data.password_confirm);
  if (validResp !== true) err.push(validResp);


  if (err.length === 0) {

    return ( await v_db.item.new('users', await user_template(data)) && await v_db.item.new('user_emails', await email_template(data)) );
  }

  if (process.v.log_to_console === true || process.v.log_to_console === 'OPTIMIZED') console.log('\n🔻Validations Failed : Looks like there were some errors.\n' + JSON.stringify(err, true, 2));

  return err;
};


module.exports = register;
