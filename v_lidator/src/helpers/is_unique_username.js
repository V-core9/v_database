const { v_db } = require("../../../index");

module.exports = async (username) => {
    const users = await v_db.item.view('users');
    if (users.indexOf(username) > -1) {
        return false;
    }
    return true;
};