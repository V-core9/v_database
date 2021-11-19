const v_db = require("../index");
const testData = require('./__test_data');
const user = require("../input_templates/user");
var v_to_sha256 = require('v_to_sha256');
var faker = require('faker');

test_it = async () => {
  await v_db.type.new('users');
  await user.register(testData.demoUserBAD);
  await user.register(testData.demoUserBAD2);
  await user.register(testData.demoUserBAD3);
  await user.register(testData.demoUser);


  for (let i = 0; i < 50; i++) {
    user.register({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: "123456789",
      password_confirm: "123456789"
    });

    console.log(v_to_sha256("123456789"));
  }
};

test_it();



