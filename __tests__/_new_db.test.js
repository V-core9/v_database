const v_db = require("../index");

const testData = {
  db: {
    name: "wee_db_11",
    pass: "123456789_V-core9"
  },
  dbTestCount: 50,
};

v_db.newDB(testData.db.name);

for (let i = 1; i <= testData.dbTestCount; i++) {
  v_db.newDB(testData.db.name+"__"+i);
}
