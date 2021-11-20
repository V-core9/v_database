

const v_db = require('./index');

const sizeDB = async () => {
  console.log(await v_db.helpers.data_size());
};

sizeDB();
