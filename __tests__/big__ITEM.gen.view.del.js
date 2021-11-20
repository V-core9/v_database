
const v_db = require("../index");
const v_fs = require("v_file_system");

const testData = require('./.test_._data');

process.v.data_dir = process.v.npmInfo._v_.app_config.test.data_dir;



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


