

const expected_types = [
  "encryption_keys",
  "system_api_keys",
  "system_log",
  "system_settings",
  "authors",
  "users",
  "user_api_keys",
  "devices",
  "user_devices",
  "pages",
  "posts",
  "posts_categories",
  "forum_threads",
  "forum_tags",
  "forum_categories",
  "forum_posts",
  "links",
  "images",
  "tasks",
  "workplaces",
  "notes",
  "snippets",
  "categories",
  "tags",
  "chat_groups",
  "chat_messages",
  "chat_assets",
  "companies",
  "support_questions",
  "support_categories",
  "ip_blacklist",
  "ip_whitelist",
  "reserved_words",
  "aes_keys"
];

module.exports = {
  _types: expected_types,
  _content: {
    numberToGenerate: 500,
    expected_types,
    testData: {
      key: 1234567890987654321,
      cts: Date.now(),
      origin: "www.google.com",
      calls_made: 0,
      owner_id: 12345678909876543
    }
  }
};
