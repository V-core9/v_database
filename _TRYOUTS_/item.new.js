const v_db = require("../index");

testNewSingleItem = async () => {
  await v_db.type.new("api_keys");
  return await v_db.item.new("api_keys", { key: 1234567890987654321, cts: Date.now(), origin: "www.google.com", calls_made: 0 , owner_id: 12345678909876543});
};

testIt = async () => {

  console.time('testNewSingleItem');
  await testNewSingleItem();
  console.timeEnd('testNewSingleItem');

};

testIt();
