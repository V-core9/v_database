const validator_messages = require('./v_lidator_messages');

const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = (email) => {
  return (format.test(email)) ? validator_messages.password.success : validator_messages.password.error;
};
