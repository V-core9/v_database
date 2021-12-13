const v_fs = require('v_file_system');

module.exports = async (typeName = null) => {
  if (typeName === null)  {
    //console.log('View Type [null] -> Listing all types.');
    return await v_fs.listDir(process.v.data_dir);
  }
  //console.log('View Type ['+typeName+'] -> Listing type.');
  var items = await v_fs.listDir(process.v.data_dir + '/' + typeName);
  for(let i = 0; i < items.length; i++) {
    items[i] = items[i].replace('.json', '');
  }
  return items;
};
