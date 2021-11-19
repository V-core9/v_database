const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sysMsg = {
  success: "✅ Success\n📫 Email verification successful." ,
  error:  "❌Error\n📑 Email verification failed." ,
};

module.exports = (email) => {
  const result = format.test(email);
  if (process.consoleOutput === true) console.log((result === true) ? sysMsg.success : sysMsg.error);
  return (result === true) ? true : sysMsg.error;
};
