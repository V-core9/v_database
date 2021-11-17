const v_db = require("../index");

const testData = {
  type: {
    name: "users",
    pass: "123456789_V-core9"
  },
  type2: {
    name: "posts",
    pass: "123456789_V-core92"
  },
  type3: {
    name: "pages",
    pass: "123456789_V-core923"
  },
  dbTestCount: 50,
};



test('Make Test Database 1 BAD', async () => {
  expect(await v_db.type.new(testData.type.name)).toEqual(true);
});

test('Make Test Database 2 ERROR', async () => {
  expect(await v_db.type.new()).toEqual(false);
});


test('LIST DB 1', async () => {
  expect(await v_db.type.list()).toEqual([testData.type.name]);
});



test('Make Test Database 2 GOOD', async () => {
  expect(await v_db.type.new(testData.type2.name)).toEqual(true);
});



test('LIST DB 2', async () => {
  expect(await v_db.type.list()).toEqual([testData.type2.name, testData.type.name ]);
});

test('Make Test Database 3 GOOD', async () => {
  expect(await v_db.type.new(testData.type3.name)).toEqual(true);
});








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
