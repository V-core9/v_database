const { v_db } = require("../index");

const testData = require('./__test_data');
const user = require("../sys_module/user");



test_it = async () => {
  console.log(await v_db.type.new('users'));
  console.log(await user.register(testData.demoUserBAD));
  console.log(await user.register(testData.demoUserBAD2));
  console.log(await user.register(testData.demoUserBAD3));
  console.log(await user.register(testData.demoUser));
};

test_it();



