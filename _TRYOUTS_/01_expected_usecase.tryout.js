const v_db = require("../index");

const demoTypes = require('./_demo-001.types');
const demoContent = require('./_demo-001.content');

create_tables = async () => {
  const resp = [];
  demoTypes.forEach(async (type) => {
    resp.push(await v_db.type.new(type)); 
  });
  return resp;
};

generate_type_entries = async (type) => {
  for (let i = 0; i < demoContent.typeCount; i++) {
    return (await v_db.item.new(type, demoContent));
  }
};


create_entries = async () => {
  const resp = [];
  demoTypes.forEach(async (type) => {
    resp.push( await generate_type_entries(type));
  });
  return resp;
};


list_entries = () => {
  const resp = [];
  demoTypes.forEach(async (type) => {
    resp.push(await v_db.item.list(type));
  });
  console.log(resp);
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
  console.log( JSON.stringify(await create_tables()) +"/"+ JSON.stringify(await create_entries()) + "++>> "+ (Date.now() - xTime1 ));
};

run_it();
