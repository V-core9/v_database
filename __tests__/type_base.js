const v_db = require("../index");
const v_fs = require("v_file_system");

const testData = require('../test-data');

process.v.data_dir = process.v.npmInfo._v_.app_config.test.data_dir;



//----------------------------------------------------------
//----------------------------------------------------------



  testData._types.forEach(type => {
    test(`⚡ Adding Types : ${type}`, async () => {
      expect(await v_db.type.new(type)).toBe(true);
    });
  });

  test('🚩 ERROR Handle for Empty Value Creation as new type.', async () => {
    expect(await v_db.type.new()).toEqual(false);
  });

//----------------------------------------------------------
//----------------------------------------------------------

  testData._types.forEach(type => {
    test(`🔄 Type Exists : [ ${type} ]`, async () => {
      expect((await v_db.type.view(type)).length).toBe(0);
    });
  });

  test('🧱 VALIDATE TYPES : [ Comparing Types found with types from testData._types ]', async () => {
    const resTest = await v_db.type.view();
    expect(testData._types).toEqual(expect.arrayContaining(resTest));
  });





