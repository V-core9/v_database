const vDb = require("../index");
const v_fs = require("v_file_system");

const testData = require("../_tData_");

vDb.config.data_dir = vDb.config.cfg_dpath + '/$_DATA_TEST';

test("🔘 Check config dir", async () => {
  expect(await vDb.helpers.check_config_dir()).toEqual(true);
});

test("🔘 Check config file", async () => {
  expect(await vDb.helpers.check_config_file()).toEqual(true);
});





preTest = async () => {
  var checkRes = await v_fs.isDir(vDb.config.data_dir);

  if (!checkRes) checkRes = await v_fs.mkdir(vDb.config.data_dir);
  const res = [];

  const typesCount = testData._types.length;

  for (let i = 0; i <= typesCount; i++) {
    res.push(await vDb.type.new(testData._types[i]));
  }
  return checkRes;
};


if (!v_fs.isDirSy(vDb.config.data_dir)) v_fs.mkdirSy(vDb.config.data_dir);


testData._types.forEach((type) => {
  test(`⚡ Adding Types :`, async () => {
    expect(await vDb.type.new(type)).toBe(true);
  });
});

test("🚩 ERROR Handle for Empty Value Creation as new type.", async () => {
  expect(await vDb.type.new()).toEqual(false);
});


testData._types.forEach((type) => {
  test(`🔄 Type Exists : [ ${type} ]`, async () => {
    expect((await vDb.type.view(type)).length).toBe(0);
  });
});

test("🧱 VALIDATE TYPES : [ Comparing Types found with types from testData._types ]", async () => {
  expect(await vDb.type.view()).toEqual(expect.arrayContaining(testData._types));
});


testData._types.forEach(async (type) => {
  test(`📍 [OK]: Delete Type by Name : <[ ${type} ]>`, async () => {
    expect(await vDb.type.del(type)).toBe(true);
  });
});

test("💥 [ERROR]: Remove Type [empty_value].", async () => {
  expect(await vDb.type.del()).toEqual(false);
});

test("🔥 [0]: After Removing Types.", async () => {
  expect((await vDb.type.view()).length).toEqual(0);
});

test("📂 Creating Tables", async () => {
  expect(await preTest()).toEqual(true);
});

test("🩺 After Created Tables", async () => {
  const resTest = await vDb.type.view();
  expect(testData._types).toEqual(expect.arrayContaining(resTest));
});

testData.items_count = testData._types.length * testData.items_count;

for (let i = 0; i < testData.items_count; i++) {
  const itemNumber = i % testData._types.length;
  const typeNum = Math.trunc(itemNumber);
  const helpType = testData._types[typeNum];

  test(`📑 Creating ITEMS [ ${helpType} , ${testData}} ]`, async () => {
    const res = await vDb.item.new(helpType, testData);
    expect(res).toEqual(true);
  });
}

test("🙋‍♂️ CHECKING UP THOSE ITEMS", async () => {
  expect((await vDb.item.view("encryption_keys")).length).toEqual(Math.trunc(testData.items_count / testData._types.length));
  expect((await vDb.item.view("users")).length).toEqual(Math.trunc(testData.items_count / testData._types.length));
  expect((await vDb.item.view("system_log")).length).toEqual(Math.trunc(testData.items_count / testData._types.length));
  expect((await vDb.item.view("devices")).length).toEqual(Math.trunc(testData.items_count / testData._types.length));
});

test("🔂 Data size", async () => {
  expect((await vDb.helpers.data_size()).sizes.totalCount).toEqual(testData.items_count);
});


var demo_user_return_value = { "_content": { "testData": { "calls_made": 0, "cts": 0, "key": 1234567890, "origin": "www.google.com", "owner_id": 1234567890 } }, "_types": ["encryption_keys", "system_api_keys", "system_log", "system_settings", "authors", "users", "user_api_keys", "devices", "user_devices", "pages", "posts", "posts_categories", "forum_threads", "forum_tags", "forum_categories", "forum_posts", "links", "images", "tasks", "workplaces", "notes", "snippets", "categories", "tags", "chat_groups", "chat_messages", "chat_assets", "companies", "support_questions", "support_categories", "ip_blacklist", "ip_whitelist", "reserved_words", "aes_keys"], "items_count": testData.items_count };
test("📡 Viewing every 10th user", async () => {
  const users = await vDb.item.view("users");
  for (let i = 0; i < users.length; i++) {
    if (i % 10 === 0) {
      //console.log(users[i]);
      var res = await vDb.item.view('users', users[i]);
      demo_user_return_value._content.testData.cts = res._content.testData.cts;
      expect(res).toEqual(demo_user_return_value);
    }
  }
});

test("📃 Viewing every 10th user [object filter]", async () => {
  const users = await vDb.item.view("users");
  for (let i = 0; i < users.length; i++) {
    if (i % 10 === 0) {
      var res = await vDb.item.view('users', { id: users[i] });
      demo_user_return_value._content.testData.cts = res._content.testData.cts;
      expect(res).toEqual(demo_user_return_value);
    }
  }
});



test("💥 Deleting every 3rd user", async () => {
  const users = await vDb.item.view("users");
  for (let i = 0; i < users.length; i++) {
    if (i % 3 === 0) {
      //console.log(users[i]);
      expect(await vDb.item.del('users', users[i])).toEqual(true);
    }
  }
});



test("🔥 Del [empty]", async () => {
  expect(await vDb.item.del()).toEqual(false);
});

test("💥 Deleting every 3rd user [repeat for filtering] ", async () => {
  const users = await vDb.item.view("users");
  for (let i = 0; i < users.length; i++) {
    if (i % 3 === 0) {
      //console.log(users[i]);
      expect(await vDb.item.del('users', { id: users[i] })).toEqual(true);
    }
  }
});

test("🔥 System Data Purge", async () => {
  expect(await vDb.helpers.purge()).toEqual(true);
});

test("🔘 Data size After Format", async () => {
  expect(await vDb.helpers.data_size()).toEqual({"sizes": {"totalCount": 0, "totalSize": 0, "types": []}, "typeCount": 0, "types": []});
  v_fs.removeDirSy(vDb.config.data_dir, { recursive: true });
});

test("🔘 Check config dir", async () => {
  expect(await vDb.helpers.check_config_dir()).toEqual(true);
});

test("🔘 Check config file", async () => {
  expect(await vDb.helpers.check_config_file()).toEqual(true);
});
