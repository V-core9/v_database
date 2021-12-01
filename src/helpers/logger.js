const vLog = {
    config : {
        consoleOutput : (process.v.consoleOutput !== undefined) ? process.v.consoleOutput : true,
        logLevel : (process.v.logLevel !== undefined) ? process.v.logLevel : 40,
    },
    log (message, type='log') {
        if (vLog.config.consoleOutput === true) console.log(msg);
        console[type](message);
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