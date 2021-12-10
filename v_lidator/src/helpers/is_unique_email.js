const { v_db } = require("../../../index");

module.exports = async (email) => {
    const user_emails = await v_db.item.view('user_emails');
    if (user_emails.indexOf(email) > -1) {
        return false;
    }
    return true;
};