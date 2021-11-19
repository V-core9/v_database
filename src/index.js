
const path = require('path');

const v_db = {
  config: require('../config'),
  type: {
    new: require(path.join(__dirname, './_type_new')),
    del: require(path.join(__dirname, './_type_del')),
    view: require(path.join(__dirname, './_type_view')),
  },
  item: {
    new: require(path.join(__dirname, './_item_new')),
    del: require(path.join(__dirname, './_item_del')),
    view: require(path.join(__dirname, './_item_view')),
  }
};



module.exports = v_db;



/*
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
  console.log(await v_db.item.view('users', {id: "b24c77fa-463f-4537-8d6c-347f438276fc"}));
  console.log(await v_db.item.view('users', {username: "YeaDude_0981"}));
};

test_within();
*/
