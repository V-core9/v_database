const v_db = require("../index");

listTypesTest = async () => {
  try {
    console.log(await v_db.type.list());
    return true;
  } catch (error) {
    return false;
  }
};

testIt = async () => {
  console.time('LIST_TYPES');
  await listTypesTest();
  console.timeEnd('LIST_TYPES');
};

testIt();
