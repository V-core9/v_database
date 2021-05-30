
class LogItem {
    constructor(msg='Log Message Missing Content') {
      console.log('[Class: LogItem ; Method: constructor ; MSG: '+ msg +' ;]');
      this.msg = msg;
    }

    set msg(msg='Log Message Missing Content') {
      console.log('[Class: LogItem ; Method: SET->MSG ; MSG: '+ msg +' ;]');
      try {
          console.log(msg);
      } catch (error) {
          console.log(msg);
      }
    }

    get msg() {
      console.log('[Class: LogItem ; Method: GET->MSG ; MSG: -not-loaded-yet ;]');
      return `
        MSG: ${this.msg}
      `;
    }
  }
  
  module.exports = LogItem;
  


