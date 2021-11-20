
module.exports = {
  new: require('./_new'),
  del: require('./_del'),
  view: async () => {
    return await v_fs.promise.listDir(process.v.data_dir) || false;
  },
};
