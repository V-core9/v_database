const v_db = require("../index");

const demoTypes = require('./_demo-001.types');
const demoContent = require('./_demo-001.content');

create_tables = async () => {
  demoTypes.forEach(async (type) => {
    await v_db.type.new(type);
  });
  return true;
};

generate_type_entries = async (type) => {
  var resp = null;
  for (let i = 0; i < demoContent.typeCount; i++) {
    resp = await v_db.item.new(type, demoContent);
  }
  return resp;
};


create_entries = async () => {
  var resp = null;
  demoTypes.forEach(async (type) => {
    resp = await generate_type_entries(type);
  });
  return resp;
};


list_entries = async () => {
  const resp = [];
  demoTypes.forEach(async (type) => {
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
  console.log(await v_db.item.view('users'));


  const mojFilter = { id: '000c6191-418f-4501-90a2-7d855f53833a' };
  console.log(await v_db.item.view('users',mojFilter));

  const mojFilter2 = { username: '000c6191-418f-4501-90a2-7d855f53833a' };
  console.log(await v_db.item.view('users',mojFilter2));

  const mojFilter3 = { username: 'Ella_Balistreri' };
  console.log(await v_db.item.view('users',mojFilter3));

  console.log(await v_db.item.view('users', '000c6191-418f-4501-90a2-7d855f53833a' ));


};

run_it();
