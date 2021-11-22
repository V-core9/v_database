
const v_db = require("../index");
const v_fs = require("v_file_system");

const testData = require('./.test_._data');

process.v.data_dir = process.v.npmInfo._v_.app_config.test.data_dir;

const user = require("../sys_module/user");
var faker = require('faker');
const new_test_count = 3000;



preTest = async () => {
  var checkRes = await v_fs.promise.isDir(process.v.data_dir);
  console.log(`Test Dir Status : ${checkRes}`);
  if (!checkRes) checkRes = await v_fs.promise.mkdir(process.v.data_dir);
  const res = [];

  const typesCount = testData._types.length;

  for (let i = 1; i <= typesCount; i++) {
    res.push(await v_db.type.new(testData._types[i]));
  }
  return checkRes;
};


test('Creating Tables', async () => {
  expect(await preTest()).toEqual(true);
});

test('After Created Tables', async () => {
  const resTest = await v_db.type.view();
  expect(testData._types).toEqual(expect.arrayContaining(resTest));
});





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
const x1 = Date.now();


executionProfileMetrics = async () => {
  const teTime = (Date.now() - x1);
  const execResult = {
    requests_count: new_test_count,
    average_req_exec_time: (teTime / new_test_count),
    total_exec_time: teTime,
    req_per_second: Math.trunc(1000 * new_test_count / teTime)
  };
  console.log(execResult);
  process.v.shouldStopLoopConsole = true;
  return process.v.shouldStopLoopConsole;
};

const registerRandom = async () => {
  for (let i = 1; i < new_test_count; i++) {
    await registerRandomUserFaker();
  }
  await executionProfileMetrics();
  return true;
};

test('Creating ITEMS', async () => {
  expect(await registerRandom()).toEqual(true);
  console.log(process.v.resultCount);
});

test('CHECKING UP THOSE ITEMS', async () => {
  const resItems = await v_db.item.view('users');
  expect(resItems.length).toEqual(process.v.resultCount.success);
});


