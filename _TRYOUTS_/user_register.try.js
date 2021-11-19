const v_db = require("../index");
const testData = require('./__test_data');
const user = require("../input_templates/user");




test_it = async () => {
  await v_db.type.new('users') ;
  await user.register(testData.demoUserBAD);
  await user.register(testData.demoUserBAD2);
  await user.register(testData.demoUserBAD3);
  await user.register(testData.demoUser);
};

test_it();



