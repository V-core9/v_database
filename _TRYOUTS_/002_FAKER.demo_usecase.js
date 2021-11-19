
const user = require("../input_templates/user");
var faker = require('faker');


registerRandomUserFaker = async () => {
  var emailH = faker.internet.email();
  var userNameH = faker.internet.userName();
  var passwordH = 'faker.internet.password()';

  const resp = await user.register({
    username: userNameH,
    email: emailH,
    password: passwordH,
    password_confirm: passwordH
  });
  return resp;
};
const newCount = 15000;
const x1 = Date.now();


const registerRandom = async () => {
  var i = 1;
  var result = null;
  for (i = 1; i < newCount; i++) {
    //console.log(await registerRandomUserFaker());
    await registerRandomUserFaker();
  }

  console.log('New Users [ ' + newCount + ' ] | Average Exec Time  [ ' + (Date.now() - x1) / newCount + ' ms ] | Total Exec Time  [ ' + (Date.now() - x1) + ' ms ]');
};

registerRandom();
/*
setInterval(
  registerRandomUserFaker,
  1
);
*/
