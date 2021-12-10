const v_to_sha256 = require('v_to_sha256');

module.exports = async (data) => {
    return {
        id: data.email,
        owner: data.username
    };
};