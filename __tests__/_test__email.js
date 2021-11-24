const user_schema = require('../sys_module/user/schema.js');


const errorFormatString = (string) => {
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
    output: errorFormatString
  },
  {
    input: 'DemoUser',
    output: errorFormatString
  },
  {
    input: '.',
    output: errorFormatString
  },
  {
    input: '..',
    output: errorFormatString
  },
  {
    input: '.._',
    output: errorFormatString
  },
  {
    input: 'De_',
    output: errorFormatString
  },
  {
    input: 'De/.mo',
    output: errorFormatString
  },
  {
    input: 'De\lmo',
    output: errorFormatString
  },
  {
    input: 'De\\mo',
    output: errorFormatString
  },
  {
    input: 'Demo\\',
    output: errorFormatString
  },
  {
    input: 'Demo_____1@mail.com',
    output: errorFormatString
  },
  {
    input: 'Demo123455367345531231264362352341234123123123123',
    output: errorFormatString
  },
  {
    input: 'Demo@@3123@mail.com',
    output: errorFormatString
  },
  {
    input: 'Demo12312312312@mail.com',
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
    input: '214219407124a@mail.com',
    output: true
  },
  {
    input: '214219407124@mail.com',
    output: errorFormatString
  },
  {
    input: 'QWUE.OW.Q.IN.ANDPIn@mail.com',
    output: true
  },
  {
    input: 'demo53266@mail.com',
    output: true
  },
  {
    input: '@WEQ23652@mail.com',
    output: errorFormatString
  },
  {
    input: 'WEQ2365....2@mail.com',
    output: errorFormatString
  },
  {
    input: 'WEQ@23652@mail.com',
    output: errorFormatString
  },
  {
    input: 'WEQ23@@652@mail.com',
    output: errorFormatString
  },
  {
    input: 'WEQ23652+@mail.com',
    output: errorFormatString
  },
  {
    input: 'WEQ2+3652@mail.com',
    output: errorFormatString
  },
  {
    input: '@@+WEQ23652@mail.com',
    output: errorFormatString
  },
  {
    input: '+WEQ23652@mail.com',
    output: errorFormatString
  },
  {
    input: 'shouldWork11@mail+com',
    output: errorFormatString
  }
];


email_test_list.forEach(item => {
  test('User Schema : EMAIL  ?? [ ' + item.input + ' ]', async () => {
    expect(await user_schema.email.validate(item.input)).toEqual((item.output === true) ? true : item.output(item.input));
  });
});



