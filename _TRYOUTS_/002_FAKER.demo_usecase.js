
const user = require("../input_templates/user");
var faker = require('faker');


registerRandomUserFaker = async () => {
  var emailH = faker.internet.email();
  var userNameH = faker.internet.userName();
  var passwordH = faker.internet.password();

  user.register({
    username: userNameH,
    email: emailH,
    password: passwordH,
    password_confirm: passwordH
  });
};

registerUsers = async () => {
  for (let i = 0; i < 50; i++) {
    registerRandomUserFaker();
  }
};

registerUsers();
