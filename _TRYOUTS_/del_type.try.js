const v_db = require("../index");

const testData = {
  db: {
    name: "wee_db_11",
    pass: "123456789_V-core9"
  },
  db2: {
    name: "wee_db_112",
    pass: "123456789_V-core92"
  },
  dbTestCount: 50,
};



rmTestBases = async () => {
  try {
    const res = [ await v_db.delType(testData.db.name)];

    for (let i = 1; i <= testData.dbTestCount; i++) {
      res.push( await v_db.delType(testData.db.name + "__" + i));
    }
    return true;
  } catch (error) {
    return false;
  }
};

testIt = async () => {

  console.log(`DB TEST COUNT : ${testData.dbTestCount}`);


  console.time('REMOVE');
  await rmTestBases();
  console.timeEnd('REMOVE');

};

testIt();
