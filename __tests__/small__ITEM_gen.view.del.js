const v_db = require("../index");
const v_fs = require("v_file_system");


process.v.data_dir = process.v.npmInfo._v_.app_config.test.data_dir;



//


const testData = {
  type: {
    name: "users__TEST",
    pass: "123456789_V-core9"
  },
  type2: {
    name: "posts__TEST",
    pass: "123456789_V-core92"
  },
  type3: {
    name: "pages__TEST",
    pass: "123456789_V-core923"
  },
  dbTestCount: 50,
};
preTest = async () => {
  const checkRes = await v_fs.promise.isDir(process.v.data_dir);
  //console.log(`Test Dir Status : ${checkRes}`);
  if (!checkRes) await v_fs.promise.mkdir(process.v.data_dir);
  return checkRes;
};

preTest();

//----------------------------------------------------------

test('Make Test Database 1 BAD', async () => {
  expect(await v_db.type.new(testData.type.name)).toEqual(true);
});

test('Make Test Database 2 ERROR', async () => {
  expect(await v_db.type.new()).toEqual(false);
});

//----------------------------------------------------------

test('LIST DB 1', async () => {
  expect(await v_db.type.view()).toEqual([testData.type.name]);
});

//----------------------------------------------------------

test('Make Test Database 2 GOOD', async () => {
  expect(await v_db.type.new(testData.type2.name)).toEqual(true);
});

//----------------------------------------------------------

test('LIST DB 2', async () => {
  expect(await v_db.type.view()).toEqual([testData.type2.name, testData.type.name]);
});

test('Make Test Database 3 GOOD', async () => {
  expect(await v_db.type.new(testData.type3.name)).toEqual(true);
});

//----------------------------------------------------------

test('Remove Test Databases 1 BAD', async () => {
  expect(await v_db.type.del(testData.type.name)).toEqual(true);
});

test('Remove Test Databases 2 ERROR', async () => {
  expect(await v_db.type.del()).toEqual(false);
});

test('Remove Test Databases 3 GOOD', async () => {
  expect(await v_db.type.del(testData.type2.name)).toEqual(true);
});

test('Remove Test Databases 4 GOOD', async () => {
  expect(await v_db.type.del(testData.type3.name)).toEqual(true);
});

//----------------------------------------------------------

