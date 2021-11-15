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



test('Make Test Database BAD', async () => {
  expect(await v_db.newDB(testData.db.name)).toEqual(false);
});

test('Make Test Database ERROR', async () => {
  expect(await v_db.newDB()).toEqual(false);
});

test('Make Test Database GOOD', async () => {
  expect(await v_db.newDB(testData.db.name, testData.db.pass)).toEqual(true);
});



test('Remove Test Databases BAD', async () => {
  expect(await v_db.delDB(testData.db.name)).toEqual(false);
});

test('Remove Test Databases ERROR', async () => {
  expect(await v_db.delDB()).toEqual(false);
});

test('Remove Test Databases GOOD', async () => {
  expect(await v_db.delDB(testData.db.name, testData.db.pass)).toEqual(true);
});

test('UNFINISHED LIST DB', async () => {
  expect( v_db.listDatabases()).toEqual(true);
});
