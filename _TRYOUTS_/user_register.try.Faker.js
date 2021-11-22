const v_db = require("../index");
const user = require("../input_templates/user");
var faker = require('faker');

test_it = async () => {
  await v_db.type.new('users');

  for (let i = 0; i < 2500; i++) {
    user.register({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: "123456789",
      password_confirm: "123456789"
    });
  }

  process.v.shouldStopLoopConsole = true;
};

test_it();



