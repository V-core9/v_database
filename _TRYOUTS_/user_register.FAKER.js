
const user = require("../input_templates/user");

var faker = require('faker');

const randomPassword = faker.internet.password();

const randomUser = {
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: randomPassword,
  password_confirm: randomPassword
};

user.register(randomUser);
