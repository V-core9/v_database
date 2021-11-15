const v_db = require("../index");

const testData = {
  db: {
    name: "wee_db_11",
    pass: "123456789_V-core9"
  },
  db2: {
    name: "wee_db_112",
    pass: "123456789_V-core92"
  },
  dbTestCount: 50,
};


console.log(`DB TEST COUNT : ${testData.dbTestCount}`);


makeTestDatabases = async () => {
  expect(await v_db.mk(testData.db.name)).toEqual(true);
  expect(await v_db.mk()).toEqual(false);
};


removeTestDatabases = async () => {
  expect(await v_db.rm(testData.db.name)).toEqual(true);
  expect(await v_db.rm()).toEqual(false);
};


test('Make Test Database', async () => {
  console.time('GENERATE');
  const res = await makeTestDatabases();
  console.log(res1);
  console.timeEnd('GENERATE');
});


test('Remove Test Databases', async () => {
  console.time('REMOVE');
  const res = await removeTestDatabases();
  console.log(res);
  console.timeEnd('REMOVE');
});
