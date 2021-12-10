const v_fs = require('v_file_system');
const { v4: uuidv4 } = require('uuid');

const basic_data = JSON.stringify({ name: "yea", timestamp: Date.now() });

module.exports =  {
    oneForAll: async (type) => {
        return await v_fs.write(`${process.v.data_dir}/index.json`, basic_data) ;
    },

    perType: async (type) => {
        return await v_fs.write(`${process.v.data_dir}/${type}.json`, basic_data);
    },

    perItem: async (type, content) => {
        return await v_fs.write(`${process.v.data_dir}/${type}/${uuidv4()}.json`, JSON.stringify(content));
    },
};
