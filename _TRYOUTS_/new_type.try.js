const v_db = require("../index");
const testData = require('./test_data');


mkTestBases = async () => {
  try {
    const res = [ v_db.newType(testData.db.name, testData.db.pass) ];

    for (let i = 1; i <= testData.typeCount; i++) {
      res.push(await v_db.newType( testData.db.name + "__" + i, testData.db.pass));
    }
    return true;
  } catch (error) {
    return false;
  }
};



testIt = async () => {

  console.log(`DB TEST COUNT : ${testData.typeCount}`);

  console.time('GENERATE');
  await mkTestBases();
  console.timeEnd('GENERATE');


};

testIt();
