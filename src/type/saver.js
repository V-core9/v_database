const v_fs = require('v_file_system');
const vLog = require('../helpers/logger');

msgLog = vLog.log;

const type_saver = {
    oneForAll: async (type) => {
        msgLog('[oneForAll] mode >> save to single JSON file.');
        return await v_fs.write(`${process.v.data_dir}/${process.v.data_dir}.json`), JSON.stringify({ name: "yea", timestamp: Date.now() });
    },

    perType: async (type) => {
        msgLog('[perType] mode >> JSON file per type.');
        return await v_fs.write(`${process.v.data_dir}/${type}.json`, JSON.stringify({ name: "yea", timestamp: Date.now() }));
    },

    perItem: async (type) => {
        msgLog(`[perItem] mode >> separate JSON files per entry.`);
        return await v_fs.mkdir(`${process.v.data_dir}/${type}`);
    },
};

module.exports = type_saver;