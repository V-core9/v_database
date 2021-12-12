const { $_password } = require("./$_password");
const { $_email } = require("./$_email");


const test_data_list = [
    {
        input: {
            username: ".",
            email: '.',
            password: '.',
            password_confirm: ","
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minConfirmErr,
        }
    },
    {
        input: {
            username: "Demo",
            email: 'Demo',
            password: 'Demo',
            password_confirm: "Demo"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "Demo..",
            email: 'DemoUser',
            password: 'DemoUser',
            password_confirm: "Demo"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.confirmErr
        }
    },
    {
        input: {
            username: ".",
            email: '.',
            password: '.',
            password_confirm: "."
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "..",
            email: '..',
            password: '..',
            password_confirm: ".."
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: ".._",
            email: '.._',
            password: '.._',
            password_confirm: ".._"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De_",
            email: 'De_',
            password: 'De_',
            password_confirm: "De_"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De/.mo",
            email: 'De/.mo',
            password: 'De/.mo',
            password_confirm: "De/.mo"
        },
        output: {
            username: "De/.mo",
            email: $_email,
            password: $_password.formatErr
        }
    },
    {
        input: {
            username: "De\lmo",
            email: 'De\lmo',
            password: 'De\lmo',
            password_confirm: "De\lmo"
        },
        output: {
            username: "De\lmo",
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De\\mo",
            email: 'De\\mo',
            password: 'De\\mo',
            password_confirm: "De\\mo"
        },
        output: {
            username: "De\\mo",
            email: $_email,
            password: $_password.minFormatErr
        }
    },
    {
        input: {
            username: "Demo\\",
            email: 'Demo\\',
            password: 'Demo\\',
            password_confirm: "Demo\\"
        },
        output: {
            username: "Demo\\",
            email: $_email,
            password: $_password.minFormatErr
        }
    },
    {
        input: {
            username: "Demo_____1@mail.com",
            email: 'Demo_____1@mail.com',
            password: 'Demo_____1@mail.com',
            password_confirm: "Demo_____1@mail.com"
        },
        output: {
            username: "Demo_____1@mail.com",
            email: $_email,
            password: true
        }
    },
    {
        input: {
            username: "Demo123455367345531231264362352341234123123123123",
            email: 'Demo123455367345531231264362352341234123123123123',
            password: 'Demo123455367345531231264362352341234123123123123',
            password_confirm: "Demo123455367345531231264362352341234123123123123"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.maxErr
        }
    },
    {
        input: {
            username: "Demo@@3123@mail.com",
            email: 'Demo@@3123@mail.com',
            password: 'Demo@@3123@mail.com',
            password_confirm: "Demo@@3123@mail.com"
        },
        output: {
            username: true,
            email: $_email,
            password: true
        }
    },
    {
        input: {
            username: "Demo12312312312@mail.com",
            email: 'Demo12312312312@mail.com',
            password: 'Demo12312312312@mail.com',
            password_confirm: "Demo12312312312@mail.com"
        },
        output: {
            username: true,
            email: true,
            password: true
        }
    },
    {
        input: {
            username: "XZCZXCSDAFSAFA@mail.com",
            email: 'XZCZXCSDAFSAFA@mail.com',
            password: 'XZCZXCSDAFSAFA@mail.com',
            password_confirm: "XZCZXCSDAFSAFA@mail.com"
        },
        output: {
            username: true,
            email: true,
            password: true
        }
    },
    {
        input: {
            username: "WEQ23652@mail.com",
            email: 'WEQ23652@mail.com',
            password: 'WEQ23652@mail.com',
            password_confirm: "WEQ23652@mail.com"
        },
        output: {
            username: true,
            email: true,
            password: true
        }
    },
    {
        input: {
            username: "214219407124a@mail.com",
            email: '214219407124a@mail.com',
            password: '214219407124a@mail.com',
            password_confirm: "214219407124a@mail.com"
        },
        output: {
            username: true,
            email: true,
            password: true
        }
    },
    {
        input: {
            username: "214219407124@mail.com",
            email: '214219407124@mail.com',
            password: '214219407124@mail.com',
            password_confirm: "214219407124@mail.com"
        },
        output: {
            username: true,
            email: $_email,
            password: true
        }
    },
    {
        input: {
            username: "QWUE.OW.Q.IN.ANDPIn@mail.com",
            email: 'QWUE.OW.Q.IN.ANDPIn@mail.com',
            password: 'QWUE.OW.Q.IN.ANDPIn@mail.com',
            password_confirm: "QWUE.OW.Q.IN.ANDPIn@mail.com"
        },
        output: {
            username: true,
            email: true,
            password: true
        }
    },
    {
        input: {
            username: "demo53266@mail.com",
            email: 'demo53266@mail.com',
            password: 'demo53266@mail.com',
            password_confirm: "De_"
        },
        output: {
            username: true,
            email: true,
            password: $_password.confirmErr
        }
    },
    {
        input: {
            username: "De_",
            email: '@WEQ23652@mail.com',
            password: 'De_33',
            password_confirm: "De_33"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De_",
            email: 'WEQ2365....2@mail.com',
            password: 'De_44',
            password_confirm: "De_44"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De_",
            email: 'WEQ@23652@mail.com',
            password: 'De_55',
            password_confirm: "De_55"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De_",
            email: 'WEQ23@@652@mail.com',
            password: 'De_66123123123123123sdfasfdavcxvsdfwerwdfvxcvxvsfdserwefsdvxv',
            password_confirm: "De_66123123123123123sdfasfdavcxvsdfwerwdfvxcvxvsfdserwefsdvxv"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.maxErr
        }
    },
    {
        input: {
            username: "De_77",
            email: 'WEQ23652+@mail.com',
            password: 'De_777777777777777777777777777777777777777777777777777777777777777777777777',
            password_confirm: "De_777777777777777777777777777777777777777777777777777777777777777777777777"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.maxErr
        }
    },
    {
        input: {
            username: "De_",
            email: 'WEQ2+3652@mail.com',
            password: 'De_8',
            password_confirm: "De_8"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De_",
            email: '@@+WEQ23652@mail.com',
            password: 'De_39',
            password_confirm: "De_39"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De_",
            email: '+WEQ23652@mail.com',
            password: 'De_48',
            password_confirm: "De_48"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.minErr
        }
    },
    {
        input: {
            username: "De_",
            email: 'shouldWork11@mail+com',
            password: 'De_556',
            password_confirm: "De_665"
        },
        output: {
            username: true,
            email: $_email,
            password: $_password.confirmErr
        }
    }
];


exports.test_data_list = test_data_list;
