

const v_db = require('./index');

const sizeDB = async () => {
  console.log(v_db.helpers);
  console.log(await v_db.helpers.data_size());
};

sizeDB();
