const v_db = require("../index");

const demoData = require('./data.001__demo');

create_tables = async () => {
  const resp = [];
  demoData._types.forEach(async (type) => {
    resp.push(await v_db.type.new(type));
  });
  return resp;
};

create_entries = async () => {
  const resp = [];
  demoData._types.forEach(async (type) => {
    for (let i = 0; i < demoData._content.numberToGenerate; i++) {
      resp.push(await v_db.item.new(type, demoData._content));
    }
  });
  return resp;
};


list_entries = () => {
  demoData._types.forEach(async (type) => {
    await v_db.item.list(type);
  });
};

run_it = async () => {
  const xTime1 = Date.now();
  //await list_entries();
  //await v_db.item.view('users');


  //const mojFilter = { id: '000c6191-418f-4501-90a2-7d855f53833a' };
  //var findUser01 = await v_db.item.view('users',mojFilter);
  //console.log(findUser01);

  //const mojFilter2 = { username: '000c6191-418f-4501-90a2-7d855f53833a' };
  //var findUser02 = await v_db.item.view('users',mojFilter2);
  //console.log(findUser01);

  //const mojFilter3 = { username: 'Ella_Balistreri' };
  //var findUser03 = await v_db.item.view('users',mojFilter3);
  //console.log(findUser03);


  //var findUser04 = await v_db.item.view('users','000c6191-418f-4501-90a2-7d855f53833a');
  //console.log(findUser04);

  const tbl =  await create_tables();
  const ent =  await create_entries();
  console.log( tbl +"/"+ent + "++>> "+ (Date.now() - xTime1 ));
};

run_it();
