const types = require('./types');

module.exports = {
    items_count: 200,
    _types: types,
    _content: {
        testData: {
            key: 1234567890,
            cts: Date.now(),
            origin: "www.google.com",
            calls_made: 0,
            owner_id: 1234567890
        }
    }
};
