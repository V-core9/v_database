const v_db = require("../index");

listTypesTest = async () => {
  try {
    console.time('LIST_TYPES');
    console.log(await v_db.type.view());
    console.timeEnd('LIST_TYPES');
    return true;
  } catch (error) {
    return false;
  }
};


listTypesTest();
