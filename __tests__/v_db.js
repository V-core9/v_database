
const path = require("path");
const v_db = require("../index");
const v_fs = require("v_file_system");
const testData = require("../test-data");

process.v.data_dir = path.join(__dirname, "../$_TEST");

preTest = async () => {
  var checkRes = await v_fs.isDir(process.v.data_dir);
  //console.log(`Test Dir Status : ${checkRes}`);
  if (!checkRes) checkRes = await v_fs.mkdir(process.v.data_dir);
  const res = [];

  const typesCount = testData._types.length;

  for (let i = 0; i <= typesCount; i++) {
    res.push(await v_db.type.new(testData._types[i]));
  }
  return checkRes;
};


if (!v_fs.isDirSy(process.v.data_dir)) v_fs.mkdirSy(process.v.data_dir);

//----------------------------------------------------------
//----------------------------------------------------------

testData._types.forEach((type) => {
  test(`⚡ Adding Types : ${type}`, async () => {
    expect(await v_db.type.new(type)).toBe(true);
  });
});

test("🚩 ERROR Handle for Empty Value Creation as new type.", async () => {
  expect(await v_db.type.new()).toEqual(false);
});

//----------------------------------------------------------
//----------------------------------------------------------

testData._types.forEach((type) => {
  test(`🔄 Type Exists : [ ${type} ]`, async () => {
    expect((await v_db.type.view(type)).length).toBe(0);
  });
});

test("🧱 VALIDATE TYPES : [ Comparing Types found with types from testData._types ]", async () => {
  const resTest = await v_db.type.view();
  expect(testData._types).toEqual(expect.arrayContaining(resTest));
});

//----------------------------------------------------------
//----------------------------------------------------------

testData._types.forEach(async (type) => {
  test(`📍 [OK]: Delete Type by Name : <[ ${type} ]>`, async () => {
    expect(await v_db.type.del(type)).toBe(true);
  });
});

test("💥 [ERROR]: Remove Type [empty_value].", async () => {
  expect(await v_db.type.del()).toEqual(false);
});

test("🔥 [0]: After Removing Types.", async () => {
  expect((await v_db.type.view()).length).toEqual(0);
});

test("Creating Tables", async () => {
  expect(await preTest()).toEqual(true);
});

test("After Created Tables", async () => {
  const resTest = await v_db.type.view();
  expect(testData._types).toEqual(expect.arrayContaining(resTest));
});

for (let i = 0; i < testData.items_count; i++) {
  test("Creating ITEMS", async () => {
    const itemNumber = i % testData._types.length;
    const typeNum = Math.trunc(itemNumber);
    const helpType = testData._types[typeNum];
    const res = await v_db.item.new(helpType, JSON.stringify(testData));
    //console.log( "Type Number" + typeNum + "| " + helpType + "| Item Number : " + itemNumber + "| RES: " + res );
    expect(res).toEqual(true);
  });
}

test("CHECKING UP THOSE ITEMS", async () => {
  const resTest = await v_db.item.view("users");
  const usersList = await v_fs.listDir(
    process.v.data_dir + "/" + "users"
  );
  expect(resTest.length).toEqual(usersList.length);
});


test("Data size", async () => {
  expect(await v_db.data_size()).toEqual(testData.items_count);
});

test("System Data Purge", async () => {
  expect(await v_db.purge_database()).toEqual(true);
});
test("Data size After Format", async () => {
  expect(await v_db.data_size()).toEqual(0);
});