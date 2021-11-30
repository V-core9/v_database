var usersCountPreTestValue = 0;

const v_db = require("../index");
const v_fs = require("v_file_system");
const testData = require("../test-data");


const x1 = Date.now();

preTest = async () => {
  var usersCountPreVal = await v_db.item.view("users");
  usersCountPreTestValue = isNaN(usersCountPreVal.length) ? 0 : usersCountPreVal.length;
  var checkRes = await v_fs.isDir(process.v.data_dir);
  console.log(`Test Dir Status : ${checkRes}`);
  if (!checkRes) checkRes = await v_fs.mkdir(process.v.data_dir);
  const res = [];

  const typesCount = testData._types.length;

  for (let i = 0; i < typesCount; i++) {
    res.push(await v_db.type.new(testData._types[i]));
  }
  return checkRes;
};

executionProfileMetrics = async () => {
  const teTime = Date.now() - x1;
  const execResult = {
    requests_count: testData.items_count,
    average_req_exec_time: teTime / testData.items_count,
    total_exec_time: teTime,
    req_per_second: Math.trunc((1000 * testData.items_count) / teTime),
  };
  console.log(execResult);
  process.v.shouldStopLoopConsole = true;
  return process.v.shouldStopLoopConsole;
};

(async () => {
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

  for (let i = 1; i < testData.items_count; i++) {
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

  //await executionProfileMetrics();
  return true;
})();
