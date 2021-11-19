const v_to_sha256 = require('v_to_sha256');
const v_db = require("../index");



const v_lidator = {
  email: require('./_email'),
  username: require('./_username'),
  name: require('./_name'),
  password: require('./_password'),
  password_match: require('./_password_match'),
};

user_input_template = (data) => {
  return {
    username: data.username,
    password: data.password,
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name,
    middle_name: data.middle_name,
    register_ts: Date.now(),
    type: "user",
    status: "active",
    verified: false,
    verification_ts: null
  };
};

register = async (data) => {
  const err = [];

  if (await v_db.item.view('users',{username: data.username})) err.push({type: "ERROR", message: "💎 Username is not unique. [ " + data.username + " ]"});

  var resp = await v_lidator.username(data.username);
  if (resp !== true) err.push( resp );
  resp = await v_lidator.email(data.email);
  if (resp !== true) err.push( resp );
  resp = await v_lidator.password(data.password);
  if (resp !== true) err.push( resp );
  resp = await v_lidator.password_match(data.password, data.password_confirm);
  if (resp !== true) err.push( resp );

  if (err.length === 0) {
    //console.log('\n💚 Validations Successful : Saving data.');
    data.password = v_to_sha256(data.password);
    //console.log((await v_db.item.new('users', user_input_template(data)))? '\n🤹‍♂️ New User Created Successfully' : '\n 😱 New User Creation Failed' );
    return await v_db.item.new('users', user_input_template(data));
  }

  console.log('\n🔻Validations Failed : Looks like there were some errors.\n'+JSON.stringify(err, true, 2));

  return false;
};

module.exports = register;
