const v_db = require("../index");
const testData = require('./test_data');


const demo_types = require('./_demo-001.types');
const demoContent = require('./_demo-001.content');

create_tables = async () => {
  demo_types.forEach(async (type) => {
    await v_db.type.new(type);
  });
  return true;
};

generate_type_entries = async (type) => {
  var resp = null;
  for (let i = 0; i < testData.typeCount; i++) {
    resp = await v_db.item.new(type, demoContent) ;
  }
  return resp;
};


create_entries = async () => {
  var resp = null;
  demo_types.forEach(async (type) => {
    resp = await generate_type_entries(type);
  });
  return resp;
};


list_entries = async () => {
  const resp = [];
  demo_types.forEach(async (type) => {
    resp.push(await v_db.item.list(type));
  });
  console.log(resp);
};

run_it = async () => {

  console.time('create_tables');
  var resp1 =await create_tables();
  console.timeEnd('create_tables');

  console.time('create_entries');
  var resp2 =await create_entries();
  console.timeEnd('create_entries');

  console.time('list_entries');
  var resp3 = await list_entries();
  console.timeEnd('list_entries');

};

run_it();
