
const user = require("../sys_module/user");
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
const new_test_count = 100000;
const x1 = Date.now();


const registerRandom = async () => {
  for (let i = 1; i < new_test_count; i++) {
    //console.log(await registerRandomUserFaker());
    await registerRandomUserFaker();
  }

  const teTime = (Date.now() - x1);
  const execResult = {
    requests_count: new_test_count,
    average_req_exec_time: (teTime / new_test_count),
    total_exec_time: teTime,
    req_per_second: Math.trunc(1000 * new_test_count / teTime)
  };
  console.log(execResult);
  process.v.shouldStopLoopConsole = true;
};

registerRandom();

setInterval(
  registerRandom,
  1
);
