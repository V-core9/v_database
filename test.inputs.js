
const readline = require('readline');
const chalk = require('chalk');


const v_cli_paint = {
  colorSchemes : {
    default: {
      name: "default",
      logo: {
        r: 0,
        g: 255,
        b: 0,
      },
      border: {
        r: 150,
        g: 150,
        b: 150,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
      },
    },
  
    light: {
      name: "light",
      logo: {
        r: 240,
        g: 100,
        b: 100,
      },
      border: {
        r: 240,
        g: 240,
        b: 240,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
      },
    }
  },
  scheme: null,
  checkScheme (){
    if (this.scheme === null) {
      this.scheme = this.colorSchemes.default;
    } 
  },
  $__Color(rgb, text) {
    return chalk.rgb(rgb.r, rgb.g, rgb.b)(text);
  },
  logo(text) {
    v_cli_paint.checkScheme();
    return v_cli_paint.$__Color(v_cli_paint.scheme.logo, text);
  },
  border(text) {
    v_cli_paint.checkScheme();
    return v_cli_paint.$__Color(v_cli_paint.scheme.border, text);
  },
  toggleTheme(){
    v_cli_paint.scheme = (v_cli_paint.scheme.name === "default") ? v_cli_paint.colorSchemes.light : v_cli_paint.colorSchemes.default;
  }
};

const v_cli = {

  //? $_redraw_mode >> [ "keypress" || "auto" ]  
  //* Basically tells the app how to handle redrawing... can be set to auto to make it try achieve some FPS out of it. 
  //* While keypress is the default and is the most stable, while using the throttled down version of auto redraws to 
  //* keep the UI updated without any performance issues that may occur while in full auto redraw mode.
  $_redraw_mode: 'keypress',

  //? $_stop_signal >> [ false || true ] 
  //* Will stop the application when set to true [on next redraw cycle]
  $_stop_signal: false,

  //? $_redraw_interval >> [ milliseconds ] 
  //* Recommended is that interval is set to few seconds 
  //* Time between auto redraws attempts < Set it to ~ 200-250ms if used in auto mode > 
  //! WARNING : [Auto] mode can be very unstable and can cause performance issues. 
  //_ $_redraw_interval: 250,
  $_redraw_interval: 2500,


  //? $_redraw_interval_OBJ >> [ Interval Object] 
  //* Just an interval triggering the checks. Heartbeat.
  $_redraw_interval_OBJ: null,

  //? status >> [ String ]
  //* Way to show the status of the application. Just attach to it and it will print it out while running.
  status: null,



  $_PAGE: null,
  $_PAGE_ALIGN: null,
  $alignToggle: () => {
    if (v_cli.$_PAGE.config.align === 'left') {
      v_cli.$_PAGE.config.align = 'center';
    } else if (v_cli.$_PAGE.config.align === 'center') {
      v_cli.$_PAGE.config.align = 'right';
    } else if (v_cli.$_PAGE.config.align === 'right') {
      v_cli.$_PAGE.config.align = 'left';
    } else {
      v_cli.$_PAGE.config.align = 'left';
    }
    v_cli._redraw_needed = true;
    v_cli.draw_container();
  },

  _redraw_needed: true,
  _redraw_times: [],
  _redraw_average_time: null,
  _redraw_avg_fps: null,
  _redraw_exec: (times) => {
    v_cli.status = null;
    v_cli._redraw_times.push(times);
    if (v_cli._redraw_average_time === null || v_cli._redraw_times.length % 3 === 0) {
      v_cli._redraw_average_time = 0;
      v_cli._redraw_times.forEach((time) => {
        v_cli.status = '[FPS_Calc]';
        v_cli._redraw_average_time += (times[1] - times[0]);
      });
      v_cli._redraw_average_time = Math.trunc(v_cli._redraw_average_time * 10 / v_cli._redraw_times.length) / 10;
      v_cli._redraw_avg_fps = Math.trunc(1000 / v_cli._redraw_average_time);
    }
  },

  //* <: config :>
  config: {
    version: '2.11.67',
    title: "v_db-AdminTool",
    name: "V_Database Admin Tool",
    icon: "⛛",
    mode: {
      __options: ['dev', 'test', 'live'],
      $_val: "dev",
      set(value) {
        if (!this.__options.includes(value)) return false;
        this.$_val = value;
      },
      get() {
        return this.$_val;
      },
    },
    redraws: 0
  },

  //? <: Key Press Handler :>
  keypress(str, key) {

    if (key.name === 'up') {
      v_cli.$_PAGE.menu.val.set(v_cli.$_PAGE.menu.val._val - 1);
    }

    if (key.name === 'down') {
      v_cli.$_PAGE.menu.val.set(v_cli.$_PAGE.menu.val._val + 1);
    }

    if (key.name === 'return') {
      v_cli.$_PAGE.menu.items[v_cli.$_PAGE.menu.val._val - 1].do();
    }

    if (key.ctrl && key.name === 'c') {
      console.log('[ CTRL+C :: Exiting ] >> Bye.');
      process.exit();
    }

    if (v_cli.$_redraw_mode === 'keypress') {
      v_cli.draw_container();
    }

  },

  //? <: Draw Container :>
  draw_container: () => {
    var exec_start_ts = Date.now();

    v_cli.$_PAGE_VAL = v_cli.$_PAGE.content();
    var output = "";

    if (v_cli._redraw_needed !== true) return false;

    //! Clear Screen Before Drawing
    console.clear();

    //?===================.
    //? [👨‍🏭]> <: header  |:>- - - - - 

    //* <: header_top_border :>
    process.stdout.write(v_cli_paint.border('╔════╦'));
    for (let i = 7; i < process.stdout.columns; i++) {
      process.stdout.write(v_cli_paint.border('═'));
    }
    process.stdout.write(v_cli_paint.border('╗\n'));
    //!<:EOF | header_top_border :>

    //* <: header_content_line :>
    var dividerHelperHeader = '  ║  ';
    output += `${v_cli_paint.border("║ ") + v_cli_paint.logo(process.icon) + v_cli_paint.border(dividerHelperHeader) + v_cli_paint.logo(process.name)}`;
    for (let i = 3; i < (process.stdout.columns - String(process.name + dividerHelperHeader + process.icon).length); i++) {
      output += String(' ');
    }
    output += v_cli_paint.border('║\n');
    //!<:EOF | header_content_line :>

    //* <: header_bottom_border :>
    output += v_cli_paint.border('╠════╩');
    for (let i = 7; i < process.stdout.columns; i++) {
      output += v_cli_paint.border('─');
    }
    output += v_cli_paint.border('╢\n');
    //!<:EOF | header_bottom_border :>

    //!<:EOF | header :>



    //?===================.
    //? [🔄]> <: content  |:>- - - - - 

    //* <: content_data :>
    for (let i = 0; i < v_cli.$_PAGE_VAL.length; i++) {
      if (v_cli.$_PAGE.config.align === undefined || v_cli.$_PAGE.config.align === null || v_cli.$_PAGE.config.align === 'left') {
        output += v_cli_paint.border('│');
        output += v_cli.$_PAGE_VAL[i];
        for (let j = 2; j < process.stdout.columns - v_cli.$_PAGE_VAL[i].length; j++) {
          output += String(' ');
        }
        output += v_cli_paint.border('│\n');
      } else if (v_cli.$_PAGE.config.align === 'right') {
        output += '│';
        for (let j = 2; j < process.stdout.columns - v_cli.$_PAGE_VAL[i].length; j++) {
          output += String(' ');
        }
        output += v_cli.$_PAGE_VAL[i];
        output += v_cli_paint.border('│\n');
      } else if (v_cli.$_PAGE.config.align === 'center') {
        output += v_cli_paint.border('│');
        let left_space = Math.trunc((process.stdout.columns - v_cli.$_PAGE_VAL[i].length) / 2);
        for (let j = 1; j < left_space; j++) {
          output += String(' ');
        }
        output += v_cli.$_PAGE_VAL[i];
        for (let j = 1; j < (process.stdout.columns - v_cli.$_PAGE_VAL[i].length) - left_space; j++) {
          output += String(' ');
        }
        output += v_cli_paint.border('│\n');
      }
    }
    //!<:EOF | content_data :>

    //* <: content_empty_space :>
    for (let i = 6; i < (process.stdout.rows - v_cli.$_PAGE_VAL.length); i++) {
      output += v_cli_paint.border('│');
      for (let i = 2; i < process.stdout.columns; i++) {
        output += String(' ');
      }
      output += v_cli_paint.border('│\n');
    }
    //!<:EOF | content_empty_space :>

    //! [🔄]> <: EOF | content  |:>


    //?===================.
    //? [🏭]> <: footer  |:>- - - - - 

    //* <: footer_top_border :>
    output += v_cli_paint.border('╟');
    for (let i = 2; i < process.stdout.columns; i++) {
      output += v_cli_paint.border('─');
    }
    output += v_cli_paint.border('╢\n');
    //!<:EOF | footer_top_border :>

    //* <: footer_content_line :>
    output += v_cli_paint.border(`║ `);
    var helpStrLen = 2;
    var fpsString = ` ⎚ ${v_cli._redraw_average_time}ms [∑ ${v_cli.config.redraws} ∻ ${v_cli._redraw_avg_fps}fps] |`;
    helpStrLen += fpsString.length;
    var statusString = ` ◬ ${(v_cli.status !== null) ? v_cli.status : '[_WAITING_]'} |`;
    helpStrLen += statusString.length;
    output += fpsString + statusString;
    for (let i = 1; i < process.stdout.columns - helpStrLen; i++) {
      output += ' ';
    }
    output += v_cli_paint.border('║\n');
    //!<:EOF | footer_content_line :>

    //* <: footer_bottom_border :>
    output += v_cli_paint.border('╚');
    for (let i = 2; i < process.stdout.columns; i++) {
      output += v_cli_paint.border('═');
    }
    output += v_cli_paint.border('╝');
    //!<:EOF | footer_bottom_border :>

    //! [🏭]> <: EOF | footer  |:>

    process.stdout.write(output);

    //? FINISHING DRAWING 
    //* Marks "redraw needed" as false cuz it starts as true by default. So it triggers a redraw once when starting the app. 
    v_cli._redraw_needed = false;
    v_cli.config.redraws++;
    //!<:EOF | redraw :>

    var exec_end_ts = Date.now();

    //* Logging Execution Time
    v_cli._redraw_exec([exec_start_ts, exec_end_ts]);

  },

  //? <: Add Events :>
  addEvents() {

    //* Readline emitKeypressEvents
    readline.emitKeypressEvents(process.stdin);

    //* Setting up stdin to raw mode
    process.stdin.setRawMode(true);

    //* Adding onResize Event
    process.stdout.on('resize', () => {
      v_cli._redraw_needed = true;
      v_cli.draw_container();
    });

    //* Adding onKeypress Event
    process.stdin.on('keypress', this.keypress);

  },

  //? <: UI Start  :>
  startUI() {

    //? Draw the application 
    if (v_cli.$_redraw_mode === 'auto' || v_cli.$_redraw_mode !== 'keypress') {
      v_cli.$_redraw_interval_OBJ = setInterval(() => {
        if (v_cli.$_redraw_stop_signal === true) {
          clearInterval(v_cli.$_redraw_interval_OBJ);
        } else {
          v_cli._redraw_needed = true;
          v_cli.draw_container();
        }
      }, v_cli.$_redraw_interval);
    }

    if (v_cli.$_redraw_mode === 'keypress') {
      v_cli.draw_container();
    }
  },

  init() {
    process.title = v_cli.config.title;
    process.version = v_cli.config.version;
    process.name = v_cli.config.name;
    process.icon = v_cli.config.icon;

    v_cli.addEvents();
    v_cli.startUI();
  }

};


//?<[ CONTENT ]>
//?- - - - - - - - - - - - - 

//* PAGE : Home >- - - - - - - - - 
const $_HOME = {
  config: {
    align: 'center',
  },
  content() {
    return [
      '._________________________________.',
      `  ⛬ Welcome to [${process.title}] CLI Admin Tool  `,
      '░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░',
      '',
      `${$_HOME.menu.items[0].text()}`,
      ` `,
      `${$_HOME.menu.items[1].text()}`,
      ` `,
      `${$_HOME.menu.items[2].text()}`,
      '',
      '  - - - - - - - - - - - - - - - - -  ',
    ];
  },

  //* MENU : Main  >- - - - - - - - - 
  menu: {
    name: 'Main_Menu',
    val: {
      _val: 1,
      min: 1,
      max: 3,
      set: (val) => {
        if (val >= $_HOME.menu.val.min && val <= $_HOME.menu.val.max) {
          $_HOME.menu.val._val = val;
          v_cli._redraw_needed = true;
        } else {
          return false;
        }
        return v_cli._redraw_needed;
      },
      get: () => {
        return $_HOME.menu.val._val;
      }
    },
    items: [
      {
        text: () => {
          var helperName = "System Settings";
          return `  ${($_HOME.menu.val.get() === 1) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
        },
        do: () => {
          v_cli.$_PAGE = $_SETTINGS;
          v_cli._redraw_needed = true;
          v_cli.draw_container();
        }
      },
      {
        text: () => {
          var helperName = "Toggle Alignment : << " + v_cli.$_PAGE.config.align + " >> ";
          return `  ${($_HOME.menu.val.get() === 2) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
        },
        do: () => {
          v_cli.$alignToggle();
        }
      },
      {
        text: () => {
          var helperName = "Exit";
          return `  ${($_HOME.menu.val.get() === 3) ? '▶ X ' + helperName + '  X' : '  ▷ ' + helperName} `;
        },
        do: () => {
          process.exit();
        }
      }
    ]
  }
};

//* PAGE : Settings >- - - - - - - - - 
const $_SETTINGS = {
  config: {
    align: 'left',
  },
  content() {
    return [
      '  ⋚ V_Database :: System Settings Page ',
      '  - - - - - - - - - - - - - - - - -  ',
      '',
      `${$_SETTINGS.menu.items[0].text()}`,
      `${$_SETTINGS.menu.items[1].text()}`,
      `${$_SETTINGS.menu.items[2].text()}`,
      `${$_SETTINGS.menu.items[3].text()}`,
      `${$_SETTINGS.menu.items[4].text()}`,
      ` `,
      `${$_SETTINGS.menu.items[5].text()}`,
      '',
      '  - - - - - - - - - - - - - - - - -  ',
    ];
  },

  //* Homepage MENU >- - - - - - - - - 
  menu: {
    name: 'vMenu',
    val: {
      _val: 1,
      min: 1,
      max: 6,
      set: (val) => {
        if (val >= $_SETTINGS.menu.val.min && val <= $_SETTINGS.menu.val.max) {
          $_SETTINGS.menu.val._val = val;
          v_cli._redraw_needed = true;
        } else {
          return false;
        }
        return v_cli._redraw_needed;
      },
      get: () => {
        return $_SETTINGS.menu.val._val;
      }
    },
    items: [
      {
        text: () => {
          var helperName = "Redraw Mode : << " + v_cli.$_redraw_mode + " >>";
          return `  ${($_SETTINGS.menu.val.get() === 1) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
        },
        do: () => {
          v_cli.$alignToggle();
        }
      },
      {
        text: () => {
          var helperName = "App Mode << " + v_cli.config.mode.$_val + " >> ";
          return `  ${($_SETTINGS.menu.val.get() === 2) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
        },
        do: () => {
          v_cli.$alignToggle();
        }
      },
      {
        text: () => {
          var helperName = "Redraw Interval << " + v_cli.$_redraw_interval + "ms >> ";
          return `  ${($_SETTINGS.menu.val.get() === 3) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
        },
        do: () => {
          v_cli.$alignToggle();
        }
      },
      {
        text: () => {
          var helperName = "Toggle Alignment : " + v_cli.$_PAGE.config.align;
          return `  ${($_SETTINGS.menu.val.get() === 4) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
        },
        do: () => {
          v_cli.$alignToggle();
        }
      },
      {
        text: () => {
          var helperName = "Change Theme :    <<  " + v_cli_paint.scheme.name + "  >>  ";
          return `  ${($_SETTINGS.menu.val.get() === 5) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
        },
        do: () => {
          v_cli_paint.toggleTheme();
          v_cli._redraw_needed = true;
          v_cli.draw_container();
        }
      },
      {
        text: () => {
          var helperName = "Go Back ";
          return `  ${($_SETTINGS.menu.val.get() === 6) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
        },
        do: () => {
          v_cli.$_PAGE = $_HOME;

          v_cli._redraw_needed = true;
          v_cli.draw_container();
        }
      }
    ]
  }
};


v_cli.$_PAGE = $_HOME;

v_cli.init();
