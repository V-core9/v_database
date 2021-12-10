const v_to_sha256 = require('v_to_sha256');

module.exports = async (data) => {
    return {
        id: data.username,
        username: data.username,
        password: v_to_sha256(data.password),
        email: data.email,
        first_name: null,
        last_name: null,
        middle_name: null,
        register_ts: Date.now(),
        type: "user",
        status: "active",
        verified: false,
        verification_ts: null
    };
};