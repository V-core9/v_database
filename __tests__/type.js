const v_db = require("../index");
const v_fs = require("v_file_system");

const testData = require('../.test_._data');

process.v.data_dir = process.v.npmInfo._v_.app_config.test.data_dir;




preTest = async () => {
  return (!await v_fs.promise.isDir(process.v.data_dir)) ? await v_fs.promise.mkdir(process.v.data_dir) : true;
};



//----------------------------------------------------------
//----------------------------------------------------------

test_create = () => {
  testData._types.forEach(type => {
    test(`⚡ Adding Types : ${type}`, async () => {
      expect(await v_db.type.new(type)).toBe(true);
    });
  });

  test('🚩 ERROR Handle for Empty Value Creation as new type.', async () => {
    expect(await v_db.type.new()).toEqual(false);
  });
};

//----------------------------------------------------------
//----------------------------------------------------------

test_views = () => {
  testData._types.forEach(type => {
    test(`🔄 Type Exists : [ ${type} ]`, async () => {
      expect((await v_db.type.view(type)).length).toBe(0);
    });
  });

  test('🧱 VALIDATE TYPES : [ Comparing Types found with types from testData._types ]', async () => {
    const resTest = await v_db.type.view();
    expect(testData._types).toEqual(expect.arrayContaining(resTest));
  });

};




//----------------------------------------------------------
//----------------------------------------------------------

test_delete = () => {
  testData._types.forEach(async type => {
    test(`📍 [OK]: Delete Type by Name : <[ ${type} ]>`, async () => {
      expect(await v_db.type.del(type)).toBe(true);
    });
  });

  test('💥 [ERROR]: Remove Type [empty_value].', async () => {
    expect(await v_db.type.del()).toEqual(false);
  });

  test('🔥 [0]: After Removing Types.', async () => {
    expect((await v_db.type.view()).length).toEqual(0);
  });
};


//----------------------------------------------------------


//const user_register = require('./user_register__ITEM.gen&verify');

main_test = () => {
  preTest();
  test_create();
  test_views();
  test_delete();
};

main_test();