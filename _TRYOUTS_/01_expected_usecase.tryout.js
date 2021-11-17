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


const demoContent_01  = {
  key: 1234567890987654321,
  cts: Date.now(),
  origin: "www.google.com",
  calls_made: 0 ,
  owner_id: 12345678909876543,
  data : {
    expected_types,
    testData,
    inner : {
      data : {
        expected_types,
        testData,
        inner : {
          data : {
            expected_types,
            testData
          },
          data2 : {
            expected_types,
            testData
          },
          data3 : {
            expected_types,
            testData
          },
          data4 : {
            expected_types,
            testData
          }
        }
      },
      data2 : {
        expected_types,
        testData,
        inner : {
          data : {
            expected_types,
            testData
          },
          data2 : {
            expected_types,
            testData
          },
          data3 : {
            expected_types,
            testData
          },
          data4 : {
            expected_types,
            testData
          }
        }
      },
      data3 : {
        expected_types,
        testData,
        inner : {
          data : {
            expected_types,
            testData
          },
          data2 : {
            expected_types,
            testData
          },
          data3 : {
            expected_types,
            testData
          },
          data4 : {
            expected_types,
            testData
          }
        }
      },
      data4 : {
        expected_types,
        testData,
        inner : {
          data : {
            expected_types,
            testData
          },
          data2 : {
            expected_types,
            testData
          },
          data3 : {
            expected_types,
            testData
          },
          data4 : {
            expected_types,
            testData
          }
        }
      }
    }
  },
  data2 : {
    expected_types,
    testData,
    inner : {
      data : {
        expected_types,
        testData
      },
      data2 : {
        expected_types,
        testData
      },
      data3 : {
        expected_types,
        testData
      },
      data4 : {
        expected_types,
        testData
      }
    }
  },
  data3 : {
    expected_types,
    testData,
    inner : {
      data : {
        expected_types,
        testData
      },
      data2 : {
        expected_types,
        testData
      },
      data3 : {
        expected_types,
        testData
      },
      data4 : {
        expected_types,
        testData
      }
    }
  },
  data4 : {
    expected_types,
    testData,
    inner : {
      data : {
        expected_types,
        testData
      },
      data2 : {
        expected_types,
        testData
      },
      data3 : {
        expected_types,
        testData
      },
      data4 : {
        expected_types,
        testData
      }
    }
  }
};

create_tables = async () => {
  expected_types.forEach(async (type) => {
    await v_db.type.new(type);
  });
  return true;
};

generate_type_entries = async (type) => {
  var resp = null;
  for (let i = 0; i < testData.typeCount; i++) {
    resp = await v_db.item.new(type, demoContent_01) ;
  }
  return resp;
};


create_entries = async () => {
  var resp = null;
  expected_types.forEach(async (type) => {
    resp = await generate_type_entries(type);
  });
  return resp;
};


list_entries = async () => {
  expected_types.forEach(async (type) => {
    const val = await v_db.item.list(type);
    console.log(val.length);
  });
};

run_it = async () => {

  console.time('create_tables');
  var resp1 =await create_tables();
  console.timeEnd('create_tables');

  console.time('create_entries');
  var resp2 =await create_entries();
  console.timeEnd('create_entries');

  console.time('list_entries');
  var resp3 = await list_entries();
  console.timeEnd('list_entries');

};

run_it();
