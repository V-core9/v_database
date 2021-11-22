


const v_db = {
  helpers: require('./helpers'),
  config: require('./config'),
  type: require('./type'),
  item: require('./item')
};


module.exports = v_db;


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
