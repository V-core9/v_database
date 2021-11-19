const v_db = require('../');
const v_fs = require('v_file_system');
const path = require('path');

data_size = async () => {
  const helper = {
    sizes : {
      totalSize: 0,
      types:[],
    },
    types: null,
    typeCount: null,
    itemsCount: 0,
    items: []
  };
  helper.types = await v_db.type.view();

  helper.typeCount = helper.types.length;

  for (let i = 0; i < helper.typeCount; i++) {
    helper.items[helper.types[i]] = await v_db.item.view(helper.types[i]);
    helper.itemsCount++;
  }
  //console.log(helper);


  for (let i = 0; i < helper.itemsCount; i++) {
    var typeSize = 0;
    var innerCount = helper.items[helper.types[i]].length;
    //console.log("inner count: " +innerCount);
    for (let j = 0; j < innerCount; j++){
      const itemPath = path.join(__dirname, '../../$_data/'+helper.types[i]+'/'+helper.items[helper.types[i]][j]);
      //console.log(itemPath);
      const stats = await v_fs.promise.statsFile(itemPath);
      typeSize += stats.size;
      //console.log(stats);
    }
    helper.sizes.types.push({type: helper.types[i], size: typeSize});
    helper.sizes.totalSize += typeSize;
  }
  console.log(JSON.stringify(helper.sizes, true, 2));

};


module.exports = async () => {
  return await data_size();
};

data_size();
