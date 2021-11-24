const user_schema = require('../sys_module/user/schema.js');

const username_test_list = [
  {
    input: 'DEMO',
    output: true
  },
  {
    input: 'DemoUser',
    output: true
  },
  {
    input: '0',
    output: false
  },
  {
    input: '.',
    output: false
  },
  {
    input: '..___',
    output: false
  },
  {
    input: '',
    output: false
  },
  {
    input: ' ',
    output: false
  },
  {
    input: '..',
    output: true,
  },
  {
    input: '.._',
    output: true,
  },
  {
    input: 'De_',
    output: true,
  },
  {
    input: 'De/.mo',
    output: true,
  },
  {
    input: 'De\lmo',
    output: true,
  },
  {
    input: 'De\\mo',
    output: true,
  },
  {
    input: 'Demo\\',
    output: true,
  },
  {
    input: 'Demo_____1',
    output: true,
  },
  {
    input: 'Demo123455367345531231264362352341234123123123123',
    output: true,
  },
  {
    input: 'Demo@@3123',
    output: true,
  },
  {
    input: 'Demo123123',
    output: true,
  },
  {
    input: 'XZCZXCSDAFSAFA',
    output: true,
  },
  {
    input: 'WEQ23652',
    output: true,
  }
];


username_test_list.forEach( item => {
  test('User Schema : USERNAME  ?? [ '+item.input+' ]', async () => {
    expect(await user_schema.username.validate(item.input)).toEqual(item.output);
  });
});



