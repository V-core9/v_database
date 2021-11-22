const user_schema = require('./schema.js');

var user = user_schema;

test_username = async () => {

  console.log(await user.password.validate('Demo_____1', 'Demo_____1'));
  console.log(await user.password.validate('De', 'De'));
  console.log(await user.password.validate('De\\mo', 'Demo_____1'));
  console.log(await user.password.validate('$$$$$$@@!@\\', '$$$$$$@@!@\\'));
  console.log(await user.password.validate('Demo_____1', 'Demo_____1'));
  console.log(await user.password.validate('Demo123455367345531231264362352341234123123123123', 'Demo123455367345531231264362352341234123123123123'));
  console.log(await user.password.validate('Demo@@3123'));
  console.log(await user.password.validate('Demo123123', 'Demo123123'));
  console.log(await user.password.validate('XZCZXCSDAFSAFA', 'WEQ23652'));
  console.log(await user.password.validate('WEQ23652', 'WEQ23652'));

};

test_username();
