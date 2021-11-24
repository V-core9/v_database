const user_schema = require('./schema.js');

test_username = async () => {
  console.log(await user_schema.email.validate('Demo'));
  console.log(await user_schema.email.validate('DemoUser'));
  console.log(await user_schema.email.validate('.'));
  console.log(await user_schema.email.validate('..'));
  console.log(await user_schema.email.validate('.._'));
  console.log(await user_schema.email.validate('De_'));
  console.log(await user_schema.email.validate('De/.mo'));
  console.log(await user_schema.email.validate('De\lmo'));
  console.log(await user_schema.email.validate('De\\mo'));
  console.log(await user_schema.email.validate('Demo\\'));
  console.log(await user_schema.email.validate('Demo_____1@mail.com'));
  console.log(await user_schema.email.validate('Demo123455367345531231264362352341234123123123123'));
  console.log(await user_schema.email.validate('Demo@@3123@mail.com'));
  console.log(await user_schema.email.validate('Demo123123@mail.com'));
  console.log(await user_schema.email.validate('XZCZXCSDAFSAFA@mail.com'));
  console.log(await user_schema.email.validate('WEQ23652@mail.com'));

};

test_username();
