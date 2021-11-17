const v_db = require("../index");
const testData = require('./test_data');
const user = require("../input_templates/user");



register_user_type = async () => {
  await v_db.type.new('users') ;
};

register_user_type();


test_it = async () => {
  await user.register(testData.demoUser);
  await user.register(testData.demoUserBAD);
};

test_it();



