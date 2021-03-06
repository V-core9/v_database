const v_fs = require("v_file_system");
const path = require("path");
const { data_dir, isDev } = require("../config");

data_size = async () => {
  const helper = {
    sizes: {
      totalSize: 0,
      totalCount: 0,
      types: [],
    },
    types: null,
    typeCount: null,
  };

  helper.types = await v_fs.listDir(data_dir);
  helper.typeCount = helper.types.length;

  for (let i = 0; i < helper.typeCount; i++) {
    helper.types[i] = {
      type: helper.types[i],
      items: [],
    };
    helper.types[i].items = await v_fs.listDir(
      data_dir + "/" + helper.types[i].type
    );
    var typeSize = 0;
    var innerCount = helper.types[i].items.length;

    for (let j = 0; j < innerCount; j++) {
      const itemPath = path.join(
        data_dir + "/" + helper.types[i].type + "/" + helper.types[i].items[j]
      );
      const stats = await v_fs.statsFile(itemPath);
      typeSize += stats.size;
    }

    helper.sizes.types.push({
      type: helper.types[i].type,
      count: innerCount,
      size: typeSize,
    });

    helper.sizes.totalSize += typeSize;
    helper.sizes.totalCount += innerCount;
  }

  helper.sizes.types.forEach((item) => {
    item.percent =
      Math.round((item.size / helper.sizes.totalSize) * 100 * 10) / 10 + "%";
    item.size =
      Math.trunc(v_fs.byteSizer.byteToMega(item.size) * 100) / 100 + "MB";
  });

  if (isDev()) {
    console.table(helper.sizes.types);
    console.log(
      "🔄 Total Data Disk Size : [ " +
        Math.trunc(v_fs.byteSizer.byteToGiga(helper.sizes.totalSize) * 100) /
          100 +
        "GB ]"
    );
    console.log("⏩ Total Items Count : [ " + helper.sizes.totalCount + " ]");
    console.log("🔂 Total Types Count : [ " + helper.typeCount + " ]");
  }

  return helper;
};

//data_size();

module.exports = data_size;
