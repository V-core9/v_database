const v_db = require("../index");
const testData = require('./test_data');


mkTestBases = async () => {
  try {
    const res = [ v_db.type.new(testData.db.name) ];

    for (let i = 1; i <= testData.typeCount; i++) {
      res.push(await v_db.type.new( testData.db.name + "__" + i));
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
