const v_db = require("../index");
const testData = require('./test_data');

const expected_types = [
  "encryption_keys",
  "api_keys",
  "system_log",
  "system_options",
  "users",
  "devices",
  "pages",
  "posts",
  "links",
  "images",
  "tasks",
  "notes",
  "snippets",
  "categories",
  "tags",
  "chat_groups",
  "chat_messages"
];

create_tables = async () => {
  expected_types.forEach(async (type) => {
    await v_db.type.new(type);
  });
  return true;
};

generate_type_entries = async (type) => {
  for (let i = 0; i < testData.typeCount; i++) {
    const element = array[i];
    await v_db.item.new(type, { key: 1234567890987654321, cts: Date.now(), origin: "www.google.com", calls_made: 0 , owner_id: 12345678909876543});
  }
};

create_entries = async () => {

  expected_types.forEach(async (type) => {
    await generate_type_entries(type);
  });
  return true;
};


run_it = async () => {

  console.time('demo_use_01');
  await create_tables();
  console.timeEnd('demo_use_01');

};

run_it();
