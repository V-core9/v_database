const user_schema = require('../sys_module/user/schema.js');


const outString = (string) => {
  return [
    { 
      "confirm": undefined, 
      "input_value": string, 
      "msg": user_schema.email.msg.error.format, 
      "suggest": "Try removing special characters.", 
      "type": "error" 
    }
  ];
};


const email_test_list = [
  {
    input: 'Demo',
    output: outString
  },
  {
    input: 'DemoUser',
    output: outString
  },
  {
    input: '.',
    output: outString
  },
  {
    input: '..',
    output: outString
  },
  {
    input: '.._',
    output: outString
  },
  {
    input: 'De_',
    output: outString
  },
  {
    input: 'De/.mo',
    output: outString
  },
  {
    input: 'De\lmo',
    output: outString
  },
  {
    input: 'De\\mo',
    output: outString
  },
  {
    input: 'Demo\\',
    output: outString
  },
  {
    input: 'Demo_____1@mail.com',
    output: true
  },
  {
    input: 'Demo123455367345531231264362352341234123123123123',
    output: outString
  },
  {
    input: 'Demo@@3123@mail.com',
    output: outString
  },
  {
    input: 'Demo123123@mail.com',
    output: true
  },
  {
    input: 'XZCZXCSDAFSAFA@mail.com',
    output: true
  },
  {
    input: 'WEQ23652@mail.com',
    output: true
  },
  {
    input: '@WEQ23652@mail.com',
    output: outString
  },
  {
    input: 'WEQ@23652@mail.com',
    output: outString
  },
  {
    input: 'WEQ23@@652@mail.com',
    output: outString
  },
  {
    input: 'WEQ23652+@mail.com',
    output: true
  },
  {
    input: 'WEQ2+3652@mail.com',
    output: true
  },
  {
    input: '@@+WEQ23652@mail.com',
    output: outString
  },
  {
    input: '+WEQ23652@mail.com',
    output: true
  },
  {
    input: 'shouldWork11@mail+com',
    output: outString
  }
];


email_test_list.forEach(item => {
  test('User Schema : EMAIL  ?? [ ' + item.input + ' ]', async () => {
    expect(await user_schema.email.validate(item.input)).toEqual((item.output === true) ? true : item.output(item.input));
  });
});



