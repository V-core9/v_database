const v_to_sha256 = require('v_to_sha256');
const v_db = require("../index");



const v_lidator = {
  email: require('./_email'),
  username: require('./_username'),
  name: require('./_name'),
  password: require('./_password')
};

user_input_template = (data) => {
  return {
    username: data.username,
    password: v_to_sha256(data.password),
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

create_password_hash = async (password) => {
  return await v_to_sha256("12346789");
};

register = async (data) => {
  const err = [];

  const uniqueStatus = await v_db.item.view('users',{username: data.username});
  if (uniqueStatus) err.push({type: "ERROR", message: "💎 Username is not unique. [ " + data.username + " ]"});

  var resp =  v_lidator.username(data.username);
  if (resp !== true) err.push( resp );

  resp =  v_lidator.email(data.email);
  if (resp !== true) err.push( resp );

  resp =  v_lidator.password(data.password, data.password_confirm);
  if (resp !== true) err.push( resp );


  if (err.length === 0) {
    //console.log('\n💚 Validations Successful : Saving data.');
    //console.log((await v_db.item.new('users', user_input_template(data)))? '\n🤹‍♂️ New User Created Successfully' : '\n 😱 New User Creation Failed' );
    return await v_db.item.new('users', user_input_template(data));
  }

  console.log('\n🔻Validations Failed : Looks like there were some errors.\n'+JSON.stringify(err, true, 2));

  return false;
};

module.exports = register;
