const { v_lidator } = require('../../index');
const { test_data_list } = require("../../_tDdata_/_test-data/test_data_list");





test_data_list.forEach(item => {
  //test('User Schema : USERNAME  ?? [ ' + item.input.username + ' ]', async () => {
  //  expect(await user_schema.username.validate(item.input.username)).toEqual((item.output.username === true) ? true : item.output.username(item.input.username));
  //});

  test('User Schema : EMAIL  ?? [ ' + item.input.email + ' ]', async () => {
    expect(await v_lidator.user.schema.email.validate(item.input.email)).toEqual((item.output.email === true) ? true : item.output.email(item.input.email));
  });

  test('User Schema : PASSWORD  ?? [ ' + item.input.password + ' ]', async () => {
    expect(await v_lidator.user.schema.password.validate(item.input.password, item.input.password_confirm)).toEqual((item.output.password === true) ? true : item.output.password(item.input.password, item.input.password_confirm));
  });
});



