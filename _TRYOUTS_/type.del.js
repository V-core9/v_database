const { v_db } = require("../index");

const testData = require('./test_data');



rmTestBases = async () => {
  try {
    const res = [ await v_db.type.del(testData.db.name)];

    for (let i = 1; i <= testData.typeCount; i++) {
      res.push( await v_db.type.del(testData.db.name + "__" + i));
    }
    return true;
  } catch (error) {
    return false;
  }
};

testIt = async () => {

  console.log(`DB TEST COUNT : ${testData.typeCount}`);


  console.time('REMOVE');
  await rmTestBases();
  console.timeEnd('REMOVE');

};

testIt();
