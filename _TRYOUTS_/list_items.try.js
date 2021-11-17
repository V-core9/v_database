const v_db = require("../index");

listItemsTest = async (type) => {
  try {
    console.log(await v_db.item.list(type));
    return true;
  } catch (error) {
    return false;
  }
};

testIt = async () => {
  console.time('LIST_TYPES');
  await listItemsTest("api_keys");
  console.timeEnd('LIST_TYPES');
};

testIt();
