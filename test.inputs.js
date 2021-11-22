const readline = require('readline');

var custom_cursor = {
  x: 50,
  y: 5
};

const v_cli = {

  config: {
    title: "⛛ V_DB_CLI",
    mode: "dev",
    redraws: 0,
  },
  keypress(str, key) {

    if (key.name === 'left') {
      custom_cursor.x--;
    }

    if (key.name === 'right') {
      custom_cursor.x++;
    }

    if (key.name === 'up') {
      custom_cursor.y--;
    }

    if (key.name === 'down') {
      custom_cursor.y++;
    }


    if (key.ctrl && key.name === 'c') {
      console.log('[ CTRL+C :: Exiting ] >> Bye.');
      process.exit();
    } else {

      draw_container([
        `> KEY String >> [ ${(str !== undefined) ? JSON.stringify(str) : null} ] key`,
        `> Press sequence >> [ ${JSON.stringify(key.sequence)} ] key`,
        `> Key Name >> [ ${JSON.stringify(key.name)} ] `,
        `> Code >> [ ${JSON.stringify(key.code)} ]`,
        `> Meta key [ ${JSON.stringify(key.meta)} ]`,
        `> CTRL key [ ${JSON.stringify(key.ctrl)} ]`, `> Shift key [ ${JSON.stringify(key.shift)} ]`
      ]);

      v_cli.config.redraws++;
      //console.log();
      //console.log(key);
      //console.log();
    }
  },

  init() {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdout.on('resize', draw_container);
    process.stdin.on('keypress', this.keypress);
    console.log('Press any key...');
    console.log('Terminal size: ' + process.stdout.columns + 'x' + process.stdout.rows);
  }
};

draw_container = (str, key) => {
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

  for (let i = 0; i < str.length; i++) {
    //process.stdout.write('|');
    //process.stdout.write(`${str[i]}`);
    var space = "";
    for (let j = 2; j < process.stdout.columns - str[i].length; j++) {
      space += ' ';
    }
    var outputLine = '|' + str[i] + String(space) + '|';
    //process.stdout.write('|\n');
    output += outputLine;
  }

  console.log(output);


  //<_?_> DRAWING FOOTER 
  for (let i = 6; i < (process.stdout.rows - str.length); i++) {
    process.stdout.write('|');
    for (let i = 2; i < process.stdout.columns; i++) {
      process.stdout.write(' ');
    }
    process.stdout.write('|\n');
  }
  //<_4_>-> Draw BOTTOM  border
  process.stdout.write('╟');
  for (let i = 2; i < process.stdout.columns; i++) {
    process.stdout.write('─');
  }
  process.stdout.write('╢\n');

  var helpStr = `| REDRAWS : ${v_cli.config.redraws}`;
  process.stdout.write(helpStr);
  for (let i = 1; i < process.stdout.columns - helpStr.length; i++) {
    process.stdout.write(' ');
  }
  process.stdout.write('|\n');


  //<_4_>-> Draw BOTTOM  border
  process.stdout.write('╰');
  for (let i = 2; i < process.stdout.columns; i++) {
    process.stdout.write('─');
  }
  process.stdout.write('╯');


  process.stdout.cursorTo(custom_cursor.x, custom_cursor.y, () => {
  });
  process.stdout.write('↖');
};


v_cli.init();