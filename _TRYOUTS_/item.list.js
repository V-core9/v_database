const { v_db } = require("../index");

listItemsTest = async (type) => {
  const items = await v_db.item.view(type);
  console.log(items);
  var resp = [];
  items.forEach(async (item) => {
    var helper = item.split(".");
    console.log(await v_db.item.view(type, { id: helper[0] }));
  });
  console.log(resp);
};

testIt = async () => {
  console.time('LIST_TYPES');
  await listItemsTest("users");
  console.timeEnd('LIST_TYPES');
};

testIt();
