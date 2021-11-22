var usersCountPreTestValue = 0;

const testData = require('../.test_._data');
var faker = require('faker');
const v_db = require("../index");
const v_fs = require("v_file_system");


process.v.data_dir = process.v.npmInfo._v_.app_config.test.data_dir;

const user = require("../sys_module/user");


preTest = async () => {
  var usersCountPreVal = await v_db.item.view('users');
  usersCountPreTestValue = (isNaN(usersCountPreVal.length) ? 0 : usersCountPreVal.length);
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
    requests_count: testData._content.numberToGenerate,
    average_req_exec_time: (teTime / testData._content.numberToGenerate),
    total_exec_time: teTime,
    req_per_second: Math.trunc(1000 * testData._content.numberToGenerate / teTime)
  };
  console.log(execResult);
  process.v.shouldStopLoopConsole = true;
  return process.v.shouldStopLoopConsole;
};

(async () => {

  test('Creating Tables', async () => {
    expect(await preTest()).toEqual(true);
  });

  test('After Created Tables', async () => {
    const resTest = await v_db.type.view();
    expect(testData._types).toEqual(expect.arrayContaining(resTest));
  });


  for (let i = 1; i < testData._content.numberToGenerate; i++) {
    test('Creating ITEMS', async () => {
      const res = await registerRandomUserFaker();
      expect((typeof res.input_value !== 'undefined') ? (res.input_value.length < 4) : true).toEqual(true);
    });
  }


  test('CHECKING UP THOSE ITEMS', async () => {
    const resItems = await v_db.item.view('users');
    expect(resItems.length).toEqual((process.v.resultCount.success + usersCountPreTestValue));
  });

  await executionProfileMetrics();
  return true;
})();
