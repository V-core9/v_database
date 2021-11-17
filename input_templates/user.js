const v_lidator = {
  email: require('./_email'),
  username: require('./_username'),
  name: require('./_name'),
  password: require('./_password'),
};

user_input_template = (data) => {
  return {
    username: data.username,
    password: data.password,
    password_confirm: data.password_confirm,
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

userDataTemplate = async (data) => {
  const err = [];

  if (!v_lidator.username(data.username)) err.push({type: "error", message: "username is not valid"});

  if (!v_lidator.email(data.email)) err.push({type: "error", message: "email is not valid"});

  if (err.length === 0) {
    console.log('Validations Successful : Data is safe to save.');
    console.log(user_input_template(data));
    return true;
  }
  console.log('Validations Failed : Looks like there were some errors.');
  console.log(err);
  return false;
};

module.exports = userDataTemplate;
