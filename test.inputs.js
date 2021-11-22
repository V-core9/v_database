const readline = require('readline');

var custom_cursor = {
  x: 50,
  y: 5
};

const debugInfo = [

  {
    text: () => {
      return `[ DEBUG INFO >>  App_Version : ${v_cli.config.version}  || X_Y [ ${process.stdout.columns} , ${process.stdout.rows}]`;
    }
  },

  {
    text: (str, key) => {
      return `[ Keypress >> ${JSON.stringify(key)} ]`;
    }
  },

  {
    text: (str, key) => {
      return `[ Selected VAL >> [${vMenu.val}] - ${vMenu.items[vMenu.val - 1].text(str, key)} ]`;
    }
  },
];

const vMenu = {
  val: 1,
  min: 1,
  max: 7,
  items: [
    {
      text: () => {
        return `${(vMenu.val === 1) ? '⏹' : '☐'}  Start Install Process`;
      },
      do: () => {
        console.log('YEA1');
        process.exit();
      }
    },
    {
      text: () => {
        return `${(vMenu.val === 2) ? '⏹' : '☐'}  Create New TYPE `;
      },
      do: () => {
        console.log('YEA2');
        process.exit();
      }
    },
    {
      text: () => {
        return `${(vMenu.val === 3) ? '⏹' : '☐'}  View TYPES `;
      },
      do: () => {
        console.log('YEA13');
        process.exit();
      }
    },
    {
      text: () => {
        return `${(vMenu.val === 4) ? '⏹' : '☐'}  Remove TYPE`;
      },
      do: () => {
        console.log('YEA14');
        process.exit();
      }
    },
    {
      text: () => {
        return `${(vMenu.val === 5) ? '⏹' : '☐'}  New ITEM`;
      },
      do: () => {
        console.log('YEA15');
        process.exit();
      }
    },
    {
      text: () => {
        return `${(vMenu.val === 6) ? '⏹' : '☐'}  View ITEMS`;
      },
      do: () => {
        console.log('YEA16');
        process.exit();
      }
    },
    {
      text: () => {
        return `${(vMenu.val === 7) ? '⏹' : '☐'}  View Database Stats`;
      },
      do: () => {
        console.log('YEA17');
        process.exit();
      }
    }
  ]
};

const root_app_page = (str, key) => {
  return [
    '  WELCOME TO V_Database CLI Admin ',
    '  - - - - - - - - - - - - - - - - -  ',
    '',
    `${vMenu.items[0].text()}`,
    `${vMenu.items[1].text()}`,
    `${vMenu.items[2].text()}`,
    `${vMenu.items[3].text()}`,
    `${vMenu.items[4].text()}`,
    `${vMenu.items[5].text()}`,
    `${vMenu.items[6].text()}`,
    '',
    '  - - - - - - - - - - - - - - - - -  ',
    '',
    `${debugInfo[0].text()}`,
    `${debugInfo[1].text(str, key)}`,
    `${debugInfo[2].text(str, key)}`,
  ];
};


const v_cli = {

  config: {
    version: '2.11.67',
    title: "⛛  │ V_Database CLI Admin Tool",
    mode: "dev",
    redraws: 0,
    size: {
      x_min: 100,
      y_min: 15
    }
  },
  keypress(str, key) {

    if (key.name === 'up') {
      vMenu.val--;
      if (vMenu.val < vMenu.min) vMenu.val = vMenu.min;
    }

    if (key.name === 'down') {
      vMenu.val++;
      if (vMenu.val > vMenu.max) vMenu.val = vMenu.max;
    }

    if (key.name === 'return') {
      vMenu.items[vMenu.val - 1].do();
    }

    if (key.ctrl && key.name === 'c') {
      console.log('[ CTRL+C :: Exiting ] >> Bye.');
      process.exit();
    } else {


      draw_container(root_app_page(str, key));

      v_cli.config.redraws++;
    }
  },

  init() {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdout.on('resize', () => {
      if (process.stdout.rows < v_cli.config.size.y_min) process.stdout.rows = v_cli.config.size.y_min;
      if (process.stdout.columns < v_cli.config.size.X_min) process.stdout.columns = v_cli.config.size.x_min;
      draw_container(root_app_page("down", { sequence: "\u001b[B", name: "down", ctrl: false, meta: false, shift: false, code: "[B" }));
    });
    process.stdin.on('keypress', this.keypress);
    draw_container(root_app_page("down", { sequence: "\u001b[B", name: "down", ctrl: false, meta: false, shift: false, code: "[B" }));
  }
};

draw_container = (content, key) => {
  //<!>-> Always clean console before drawing
  console.clear();


  //<_?_> DRAWING HEADER 
  //<_1_>-> Draw TOP border
  process.stdout.write('╔');
  for (let i = 2; i < process.stdout.columns; i++) {
    process.stdout.write('═');
  }
  process.stdout.write('╗\n');
  //<EOF><_1_>

  //<_2_>-> Draw Empty Line TOP Under border
  process.stdout.write(`║ ${v_cli.config.title}`);
  for (let i = 3; i < (process.stdout.columns - String(v_cli.config.title).length); i++) {
    process.stdout.write(' ');
  }
  process.stdout.write('║\n');
  //<EOF><_2_>

  //<_3_>-> Draw the divider under that title empty space
  process.stdout.write('╟');
  for (let i = 2; i < process.stdout.columns; i++) {
    process.stdout.write('─');
  }
  process.stdout.write('╢\n');



  //<_?_> DRAWING CONTENT SECTION
  var output = "";

  for (let i = 0; i < content.length; i++) {
    var space = "";
    for (let j = 2; j < process.stdout.columns - content[i].length; j++) {
      space += ' ';
    }
    var outputLine = '│' + content[i] + String(space) + '│';
    output += outputLine;
  }
  console.log(output);


  //<_?_> DRAWING FOOTER 
  for (let i = 6; i < (process.stdout.rows - content.length); i++) {
    process.stdout.write('│');
    for (let i = 2; i < process.stdout.columns; i++) {
      process.stdout.write(' ');
    }
    process.stdout.write('│\n');
  }
  //<_4_>-> Draw BOTTOM  border
  process.stdout.write('╟');
  for (let i = 2; i < process.stdout.columns; i++) {
    process.stdout.write('─');
  }
  process.stdout.write('╢\n');

  var helpStr = `║ REDRAWS : ${v_cli.config.redraws}`;
  process.stdout.write(helpStr);
  for (let i = 1; i < process.stdout.columns - helpStr.length; i++) {
    process.stdout.write(' ');
  }
  process.stdout.write('║\n');


  //<_4_>-> Draw BOTTOM  border
  process.stdout.write('╚');
  for (let i = 2; i < process.stdout.columns; i++) {
    process.stdout.write('═');
  }
  process.stdout.write('╝');


};


v_cli.init();


