
const user = require("../input_templates/user");
var faker = require('faker');


randomUser =  () => {
  var emailH = faker.internet.email();
  var userNameH =  faker.internet.userName();

  return {
    username: userNameH,
    email: emailH,
    password: "123546789876543",
    password_confirm: "123546789876543",
  };
};

registerRandomUserFaker = async () => {
  user.register(randomUser());
};

for (let i = 0; i < 100; i++) {
  registerRandomUserFaker();
}
