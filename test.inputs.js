
const readline = require('readline');
const chalk = require('chalk');

var current_menu = null;

const v_cli = {
  $_redraw_mode: 'keypress',
  $_redraw_stop_signal: false,
  $_redraw_interval: 1000,
  $_redraw_interval_OBJ: null,
  status: null,
  $_PAGE: null,
  $_PAGE_ALIGN: null,
  $_PAGE_ALIGN_Toggle: () => {
    if (v_cli.$_PAGE_ALIGN === 'left') {
      v_cli.$_PAGE_ALIGN = 'center';
    } else if (v_cli.$_PAGE_ALIGN === 'center') {
      v_cli.$_PAGE_ALIGN = 'right';
    } else if (v_cli.$_PAGE_ALIGN === 'right') {
      v_cli.$_PAGE_ALIGN = 'left';
    } else {
      v_cli.$_PAGE_ALIGN = 'left';
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

  config: {
    version: '2.11.67',
    title: "⛛  │ V_Database CLI Admin Tool",
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
    redraws: 0,
    size: {
      x_min: 100,
      y_min: 15
    }
  },

  keypress(str, key) {

    if (key.name === 'up') {
      current_menu.val.set(current_menu.val._val - 1);
    }

    if (key.name === 'down') {
      current_menu.val.set(current_menu.val._val + 1);
    }

    if (key.name === 'return') {
      current_menu.items[current_menu.val._val - 1].do();
    }

    if (key.ctrl && key.name === 'c') {
      console.log('[ CTRL+C :: Exiting ] >> Bye.');
      process.exit();
    }

    if (v_cli.$_redraw_mode === 'keypress') {
      v_cli.draw_container();
    }

  },

  //? Draw Container Method
  draw_container: () => {
    var exec_start_ts = Date.now();

    v_cli.$_PAGE_VAL = v_cli.$_PAGE();
    var output = "";

    if (v_cli._redraw_needed !== true) return false;

    //! Clear Screen Before Drawing
    console.clear();

    //?===================.
    //? [👨‍🏭]> <: header  |:>- - - - - 

    //* <: header_top_border :>
    process.stdout.write('╔');
    for (let i = 2; i < process.stdout.columns; i++) {
      process.stdout.write('═');
    }
    process.stdout.write('╗\n');
    //!<:EOF | header_top_border :>

    //* <: header_content_line :>
    output += `║ ${chalk.cyanBright(v_cli.config.title)}`;
    for (let i = 3; i < (process.stdout.columns - String(v_cli.config.title).length); i++) {
      output += String(' ');
    }
    output += '║\n';
    //!<:EOF | header_content_line :>

    //* <: header_bottom_border :>
    output += '╟';
    for (let i = 2; i < process.stdout.columns; i++) {
      output += '─';
    }
    output += '╢\n';
    //!<:EOF | header_bottom_border :>

    //!<:EOF | header :>



    //?===================.
    //? [🔄]> <: content  |:>- - - - - 

    //* <: content_data :>
    for (let i = 0; i < v_cli.$_PAGE_VAL.length; i++) {
      if (v_cli.$_PAGE_ALIGN === undefined || v_cli.$_PAGE_ALIGN === null || v_cli.$_PAGE_ALIGN === 'left') {
        output += '│';
        output += v_cli.$_PAGE_VAL[i];
        for (let j = 2; j < process.stdout.columns - v_cli.$_PAGE_VAL[i].length; j++) {
          output += String(' ');
        }
        output += '│\n';
      } else if (v_cli.$_PAGE_ALIGN === 'right') {
        output += '│';
        for (let j = 2; j < process.stdout.columns - v_cli.$_PAGE_VAL[i].length; j++) {
          output += String(' ');
        }
        output += v_cli.$_PAGE_VAL[i];
        output += '│\n';
      } else if (v_cli.$_PAGE_ALIGN === 'center') {
        output += '│';
        let left_space = Math.trunc((process.stdout.columns - v_cli.$_PAGE_VAL[i].length) / 2);
        for (let j = 1; j < left_space; j++) {
          output += String(' ');
        }
        output += v_cli.$_PAGE_VAL[i];
        for (let j = 1; j < (process.stdout.columns - v_cli.$_PAGE_VAL[i].length) - left_space; j++) {
          output += String(' ');
        }
        output += '│\n';
      }
    }
    //!<:EOF | content_data :>

    //* <: content_empty_space :>
    for (let i = 6; i < (process.stdout.rows - v_cli.$_PAGE_VAL.length); i++) {
      output += '│';
      for (let i = 2; i < process.stdout.columns; i++) {
        output += String(' ');
      }
      output += '│\n';
    }
    //!<:EOF | content_empty_space :>

    //! [🔄]> <: EOF | content  |:>


    //?===================.
    //? [🏭]> <: footer  |:>- - - - - 

    //* <: footer_top_border :>
    output += '╟';
    for (let i = 2; i < process.stdout.columns; i++) {
      output += '─';
    }
    output += '╢\n';
    //!<:EOF | footer_top_border :>

    //* <: footer_content_line :>
    var helpStr = `║ `;
    helpStr += ` ⎚ ${v_cli._redraw_average_time}ms [∑ ${v_cli.config.redraws} ∻ ${v_cli._redraw_avg_fps}fps] |`;
    helpStr += ` ◬ ${(v_cli.status !== null) ? v_cli.status : '[_WAITING_]'} |`;
    output += helpStr;
    for (let i = 1; i < process.stdout.columns - helpStr.length; i++) {
      output += ' ';
    }
    output += '║\n';
    //!<:EOF | footer_content_line :>

    //* <: footer_bottom_border :>
    output += '╚';
    for (let i = 2; i < process.stdout.columns; i++) {
      output += '═';
    }
    output += '╝';
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

  init() {

    readline.emitKeypressEvents(process.stdin);

    process.stdin.setRawMode(true);

    //* Adding onResize Event
    process.stdout.on('resize', () => {
      if (process.stdout.rows < v_cli.config.size.y_min) process.stdout.rows = v_cli.config.size.y_min;
      if (process.stdout.columns < v_cli.config.size.x_min) process.stdout.columns = v_cli.config.size.x_min;
      v_cli._redraw_needed = true;
      v_cli.draw_container();
    });

    //* Adding onKeypress Event
    process.stdin.on('keypress', this.keypress);

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

  }

};


//?<[ CONTENT ]>
//?- - - - - - - - - - - - - 

//* PAGE : Home >- - - - - - - - - 
const page_homepage = () => {
  return [
    '  WELCOME TO V_Database CLI Admin ',
    '  - - - - - - - - - - - - - - - - -  ',
    '',
    `${vMenu.items[0].text()}`,
    ` `,
    `${vMenu.items[1].text()}`,
    ` `,
    `${vMenu.items[2].text()}`,
    '',
    '  - - - - - - - - - - - - - - - - -  ',
  ];
};

//* MENU : Main  >- - - - - - - - - 
const vMenu = {
  name: 'vMenu',
  val: {
    _val: 1,
    min: 1,
    max: 3,
    set: (val) => {
      if (val >= vMenu.val.min && val <= vMenu.val.max) {
        vMenu.val._val = val;
        v_cli._redraw_needed = true;
      } else {
        return false;
      }
      return v_cli._redraw_needed;
    },
    get: () => {
      return vMenu.val._val;
    }
  },
  items: [
    {
      text: () => {
        var helperName = "System Settings";
        return `  ${(vMenu.val.get() === 1) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        v_cli.$_PAGE = page_settings_page;
        v_cli.$_PAGE_ALIGN = 'left';
        v_cli._redraw_needed = true;
        current_menu = vMenu_settings;
        v_cli.draw_container();
      }
    },
    {
      text: () => {
        var helperName = "Toggle Alignment : << " + v_cli.$_PAGE_ALIGN + " >> ";
        return `  ${(vMenu.val.get() === 2) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        v_cli.$_PAGE_ALIGN_Toggle();
      }
    },
    {
      text: () => {
        var helperName = "Exit";
        return `  ${(vMenu.val.get() === 3) ? '▶ X ' + helperName + '  X' : '  ▷ ' + helperName} `;
      },
      do: () => {
        process.exit();
      }
    }
  ]
};

//* PAGE : Settings >- - - - - - - - - 
const page_settings_page = () => {
  return [
    '  ⋚ V_Database :: System Settings Page ',
    '  - - - - - - - - - - - - - - - - -  ',
    '',
    `${vMenu_settings.items[0].text()}`,
    `${vMenu_settings.items[1].text()}`,
    `${vMenu_settings.items[2].text()}`,
    `${vMenu_settings.items[3].text()}`,
    ` `,
    `${vMenu_settings.items[4].text()}`,
    '',
    '  - - - - - - - - - - - - - - - - -  ',
  ];
};

//* Homepage MENU >- - - - - - - - - 
const vMenu_settings = {
  name: 'vMenu',
  val: {
    _val: 1,
    min: 1,
    max: 6,
    set: (val) => {
      if (val >= vMenu_settings.val.min && val <= vMenu_settings.val.max) {
        vMenu_settings.val._val = val;
        v_cli._redraw_needed = true;
      } else {
        return false;
      }
      return v_cli._redraw_needed;
    },
    get: () => {
      return vMenu_settings.val._val;
    }
  },
  items: [
    {
      text: () => {
        var helperName = "Redraw Mode : << " + v_cli.$_redraw_mode + " >>";
        return `  ${(vMenu_settings.val.get() === 1) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        v_cli.$_PAGE_ALIGN_Toggle();
      }
    },
    {
      text: () => {
        var helperName = "App Mode << " + v_cli.config.mode.$_val + " >> ";
        return `  ${(vMenu_settings.val.get() === 2) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        v_cli.$_PAGE_ALIGN_Toggle();
      }
    },
    {
      text: () => {
        var helperName = "Redraw Interval << " + v_cli.$_redraw_interval + "ms >> ";
        return `  ${(vMenu_settings.val.get() === 3) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        process.exit();
      }
    },
    {
      text: () => {
        var helperName = "Toggle Alignment : " + v_cli.$_PAGE_ALIGN;
        return `  ${(vMenu_settings.val.get() === 4) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        v_cli.$_PAGE_ALIGN_Toggle();
      }
    },
    {
      text: () => {
        var helperName = "Go Back ";
        return `  ${(vMenu_settings.val.get() === 5) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        v_cli.$_PAGE = page_homepage;
        v_cli.$_PAGE_ALIGN = 'center';
        v_cli._redraw_needed = true;
        current_menu = vMenu;
        v_cli.draw_container();
      }
    }
  ]
};

current_menu = vMenu;
v_cli.$_PAGE_ALIGN = 'center';
v_cli.$_PAGE = page_homepage;

v_cli.init();
