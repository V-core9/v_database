

const helpers = require('./helpers/');
const config = require('./config/');
const type = require('./type/');
const item = require('./item/');

const v_db = {
  config: config,
  type: type,
  item: item,
  helpers: helpers
};


module.exports = v_db;

console.log(`[ 🚀 :: ${process.v.title}  ]>- - - -`);
console.log(v_db.helpers);
sizeDB = async () => {

  console.log(v_db.helpers);
  console.log(await v_db.helpers.data_size());
};

sizeDB();

/*
console.log(`\n.=================================================.`);
console.log(`| 🚀 - ${process.v.title}                           |`);
console.log(`+ - - - - - - - - - - - - - - - - - - - - - - - - +`);
console.log(`| 📡 App Info :                                    |`);
console.log(`| ${process.v.subtitle}           |`);
console.log(`'================================================='`);


test_within = async () => {

  console.log(await v_db.type.view());

  console.log(await v_db.type.new('users'));
  console.log(await v_db.type.new('devices'));
  console.log(await v_db.type.new('demo_table'));

  console.log(await v_db.type.view());

  console.log(await v_db.type.del('users'));
  console.log(await v_db.type.del('devices'));
  console.log(await v_db.type.del('demo_table'));

  console.log(await v_db.type.view());


  console.log(await v_db.item.view('users'));
  console.log(await v_db.item.view('users', { id: "b24c77fa-463f-4537-8d6c-347f438276fc" }));
  console.log(await v_db.item.view('users', { username: "YeaDude_0981" }));
};

test_within();

*/
