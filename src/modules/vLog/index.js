const vLog = {
    config : {
        log_to_console : (process.v.config.log_to_console !== undefined) ? process.v.config.log_to_console : true,
        logLevel : (process.v.config.logLevel !== undefined) ? process.v.config.logLevel : "ALL",
        console_colors: (process.v.config.console_colors !== undefined) ? process.v.config.console_colors : true,
    },
    logLevels : require("./log_levels"),
    log (message, type='log') {
        if (vLog.config.log_to_console === true) {
            if (vLog.config.console_colors === true) {
                const chalk = require('chalk');
                console[type](chalk.greenBright(`[${message}]`));
            } else {
                console[type](message);
            }
        }   
    },
    info (message) {
        vLog.log(message, 'info');
    },
    warn (message) {
        vLog.log(message, 'warn');
    },
    error (message) {
        vLog.log(message, 'error');
    },
};

module.exports = vLog;