const v_db = require("../index");
const testData = require('./test_data');

const userDataTemplate = require("../input_templates/user");



makeNewUser = async (data) => {
    await v_db.type.new('users') ;
    return (await userDataTemplate(data)) ? v_db.item.new('users', data) : false ;
};

testIt = async () => {
  console.time('LIST_TYPES');
  await makeNewUser(testData.demoUser);
  console.timeEnd('LIST_TYPES');
};

testIt();


makeNewUser22 = async (data) => {
  try {
    return await userDataTemplate(data);
  } catch (error) {
    return false;
  }
};

testIt22 = async () => {
  console.time('makeNewUser22');
  await makeNewUser22(testData.demoUser);
  console.timeEnd('makeNewUser22');
};

testIt22();



makeNewUser22BAD = async (data) => {
  try {
    return await userDataTemplate(data);
  } catch (error) {
    return false;
  }
};

testIt22BAD = async () => {
  console.time('makeNewUser33');
  await makeNewUser22BAD(testData.demoUserBAD);
  console.timeEnd('makeNewUser33');
};

testIt22BAD();
