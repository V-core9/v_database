const v_db = require("../index");

const testData = {
  db: {
    name: "wee_db_11",
    pass: "123456789_V-core9"
  },
  dbTestCount: 5,
};

v_db.mk(testData.db.name);

for (let i = 1; i <= testData.dbTestCount; i++) {
  v_db.mk(testData.db.name + "__" + i);
}


setTimeout(() => {
  v_db.rm(testData.db.name);

  for (let i = 1; i <= testData.dbTestCount; i++) {
    setTimeout(() => {
      v_db.rm(testData.db.name + "__" + i);
    }, 250*i);
  }
}, 1000);
