const v_fs = require('v_file_system');

msgLog = (msg) => {
  if (process.v.consoleOutput === true) console.log(msg);
};

const type_saver = {
  oneForAll: async (type) => {
    msgLog('[oneForAll] mode >> save to single JSON file.');
    return await v_fs.write(`${process.v.data_dir}/${process.v.data_dir}.json`), JSON.stringify({ name: "yea", timestamp: Date.now() });
  },

  perType: async (type) => {
    msgLog('[perType] mode >> JSON file per type.');
    return await v_fs.write(`${process.v.data_dir}/${type}.json`, JSON.stringify({ name: "yea", timestamp: Date.now() }));
  },

  perPost: async (type) => {
    msgLog(`[perPost] mode >> separate JSON files per entry.`);
    return await v_fs.mkdir(`${process.v.data_dir}/${type}`);
  },
};


module.exports = async (type) => {
  return (Object.keys(type_saver).indexOf(process.v.db_mode) > -1 && type !== undefined) ? await type_saver[process.v.db_mode](type): false;
};
