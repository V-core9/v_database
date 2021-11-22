const user_schema = require('./schema.js');

test_username = async () => {
  console.log(await user_schema.username.validate('Demo'));
  console.log(await user_schema.username.validate('DemoUser'));
  console.log(await user_schema.username.validate('.'));
  console.log(await user_schema.username.validate('..'));
  console.log(await user_schema.username.validate('.._'));
  console.log(await user_schema.username.validate('De_'));
  console.log(await user_schema.username.validate('De/.mo'));
  console.log(await user_schema.username.validate('De\lmo'));
  console.log(await user_schema.username.validate('De\\mo'));
  console.log(await user_schema.username.validate('Demo\\'));
  console.log(await user_schema.username.validate('Demo_____1'));
  console.log(await user_schema.username.validate('Demo123455367345531231264362352341234123123123123'));
  console.log(await user_schema.username.validate('Demo@@3123'));
  console.log(await user_schema.username.validate('Demo123123'));
  console.log(await user_schema.username.validate('XZCZXCSDAFSAFA'));
  console.log(await user_schema.username.validate('WEQ23652'));

};

test_username();
