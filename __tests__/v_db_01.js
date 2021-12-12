
const path = require("path");
const v_database = require("../index");
const v_fs = require("v_file_system");
const testData = require("../_tData_");

process.v.data_dir = process.env.home + "/.v_db/$_TEST_01";

v_fs.removeDirSy(process.v.data_dir, { recursive: true });

preTest = async () => {
  var checkRes = await v_fs.isDir(process.v.data_dir);
  //console.log(`Test Dir Status : ${checkRes}`);
  if (!checkRes) checkRes = await v_fs.mkdir(process.v.data_dir);
  const res = [];

  const typesCount = testData._types.length;

  for (let i = 0; i <= typesCount; i++) {
    res.push(await v_database.type.new(testData._types[i]));
  }
  return checkRes;
};


if (!v_fs.isDirSy(process.v.data_dir)) v_fs.mkdirSy(process.v.data_dir);


testData._types.forEach((type) => {
  test(`⚡ Adding Types :`, async () => {
    expect(await v_database.type.new(type)).toBe(true);
  });
});

test("🚩 ERROR Handle for Empty Value Creation as new type.", async () => {
  expect(await v_database.type.new()).toEqual(false);
});


testData._types.forEach((type) => {
  test(`🔄 Type Exists : [ ${type} ]`, async () => {
    expect((await v_database.type.view(type)).length).toBe(0);
  });
});

test("🧱 VALIDATE TYPES : [ Comparing Types found with types from testData._types ]", async () => {
  const resTest = await v_database.type.view();
  expect(testData._types).toEqual(expect.arrayContaining(resTest));
});


testData._types.forEach(async (type) => {
  test(`📍 [OK]: Delete Type by Name : <[ ${type} ]>`, async () => {
    expect(await v_database.type.del(type)).toBe(true);
  });
});

test("💥 [ERROR]: Remove Type [empty_value].", async () => {
  expect(await v_database.type.del()).toEqual(false);
});

test("🔥 [0]: After Removing Types.", async () => {
  expect((await v_database.type.view()).length).toEqual(0);
});

test("📂 Creating Tables", async () => {
  expect(await preTest()).toEqual(true);
});

test("🩺 After Created Tables", async () => {
  const resTest = await v_database.type.view();
  expect(testData._types).toEqual(expect.arrayContaining(resTest));
});

for (let i = 0; i < testData.items_count; i++) {
  const itemNumber = i % testData._types.length;
  const typeNum = Math.trunc(itemNumber);
  const helpType = testData._types[typeNum];

  test(`📑 Creating ITEMS [ ${helpType} , ${testData}} ]`, async () => {
      const res = await v_database.item.new(helpType, testData);
      expect(res).toEqual(true);
  });
}

test("🙋‍♂️ CHECKING UP THOSE ITEMS", async () => {
  const resTest = await v_database.item.view("users");
  const usersList = await v_fs.listDir(
    process.v.data_dir + "/" + "users"
  );
  expect(resTest.length).toEqual(usersList.length);
});

test("🔂 Data size", async () => {
  expect(await v_database.data_size()).toEqual(testData.items_count);
});




test("💥 Deleting every 3rd user", async () => {
  const users = await v_database.item.view("users");
  for (let i = 0; i < users.length; i++) {
    if (i % 3 === 0) {
      //console.log(users[i]);
      expect(await v_database.item.del('users', users[i])).toEqual(true);
    }
  }
});

test("🔥 System Data Purge", async () => {
  expect(await v_database.purge_database()).toEqual(true);
});

test("🔘 Data size After Format", async () => {
  expect(await v_database.data_size()).toEqual(0);
  v_fs.removeDirSy(process.v.data_dir, { recursive: true });
});
