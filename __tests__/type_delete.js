const v_db = require("../index");

const testData = require('../test-data/');

process.v.data_dir = process.v.npmInfo._v_.app_config.test.data_dir;






//----------------------------------------------------------
//----------------------------------------------------------

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


//----------------------------------------------------------


//const user_register = require('./user_register__ITEM.gen&verify');

