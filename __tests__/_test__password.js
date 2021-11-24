const user_schema = require('./schema.js');


test_username = async () => {
  console.log('TRUE :: ' + JSON.stringify(await user_schema.password.validate('Demo_____1', 'Demo_____1'), true, 2));
  console.log('TRUE :: ' + JSON.stringify(await user_schema.password.validate('De\\mo', 'Demo_____1'), true, 2));
  console.log('TRUE :: ' + JSON.stringify(await user_schema.password.validate('$$$$$$@@!@\\', '$$$$$$@@!@\\'), true, 2));
  console.log('TRUE :: ' + JSON.stringify(await user_schema.password.validate('Demo_____1', 'Demo_____1'), true, 2));
  console.log('TRUE :: ' + JSON.stringify(await user_schema.password.validate('Demo123455367345531231264362352341234123123123123', 'Demo123455367345531231264362352341234123123123123'), true, 2));
  console.log('TRUE :: ' + JSON.stringify(await user_schema.password.validate('Demo123123', 'Demo123123'), true, 2));
  console.log('TRUE :: ' + JSON.stringify(await user_schema.password.validate('XZCZXCSDAFSAFA', 'XZCZXCSDAFSAFA'), true, 2));
  console.log('TRUE :: ' + JSON.stringify(await user_schema.password.validate('WEQ23652', 'WEQ23652'), true, 2));

};

test_username();
