const gradient = require('gradient-string');
const readline = require('readline');
const chalk = require('chalk');


const vMenu = {
  name: 'vMenu',
  val: {
    _val: 1,
    min: 1,
    max: 7,
    set: (val) => {
      //console.log(`[INTO]  IN: ${val}  [is :: ${vMenu.val._val} | min : ${vMenu.val.min} | max : ${vMenu.val.max}]`);
      if (val >= vMenu.val.min && val <= vMenu.val.max) {
        vMenu.val._val = val;
        v_cli._redraw_needed = true;
      } else {
        //console.log(`[ERROR] Invalid Value <: IN: ${val} :> [is :: ${vMenu.val._val} | min : ${vMenu.val.min} | max : ${vMenu.val.max}]`);
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
      name: "app.install",
      text: () => {
        var helperName = "Start Install Process";
        return `  ${(vMenu.val.get() === 1) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        console.log('YEA1');
        process.exit();
      }
    },
    {
      name: "type.new",
      text: () => {
        var helperName = "Create New TYPE";
        return `  ${(vMenu.val.get() === 2) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        console.log('YEA2');
        process.exit();
      }
    },
    {
      name: "type.view.all",
      text: () => {
        var helperName = "View TYPES";
        return `  ${(vMenu.val.get() === 3) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        console.log('YEA13');
        process.exit();
      }
    },
    {
      name: "type.remove",
      text: () => {
        var helperName = "Remove TYPE";
        return `  ${(vMenu.val.get() === 4) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        console.log('YEA14');
        process.exit();
      }
    },
    {
      name: "item.new",
      text: () => {
        var helperName = "New ITEM";
        return `  ${(vMenu.val.get() === 5) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        console.log('YEA15');
        process.exit();
      }
    },
    {
      name: "item.view.all",
      text: () => {
        var helperName = "View ITEMS";
        return `  ${(vMenu.val.get() === 6) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        console.log('YEA16');
        process.exit();
      }
    },
    {
      name: "menu.align_toggle",
      text: () => {
        var helperName = "Toggle Alignment : " + v_cli.$_PAGE_ALIGN;
        return `  ${(vMenu.val.get() === 7) ? '▶ [ ' + helperName + '  ]' : '  ▷ ' + helperName} `;
      },
      do: () => {
        v_cli.$_PAGE_ALIGN_Toggle();
      }
    }
  ]
};

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
      vMenu.val.set(vMenu.val._val - 1);
    }

    if (key.name === 'down') {
      vMenu.val.set(vMenu.val._val + 1);
    }

    if (key.name === 'return') {
      vMenu.items[vMenu.val._val - 1].do();
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

const page_homepage = () => {
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
  ];
};

v_cli.$_PAGE_ALIGN = 'center';
v_cli.$_PAGE = page_homepage;

v_cli.init();
