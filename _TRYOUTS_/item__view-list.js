const { v_db } = require("../index");

item_view_list = async (type) => {
  const items = await v_db.item.view(type);
  console.log(`Table Name : ${type} \nItems Count : ${items.length}`);
};

item_view_list("aes_keys");
item_view_list("authors");
item_view_list("users");
