module.exports = async (username)=>{
  return /^[A-Za-z][A-Za-z0-9_.]{5,31}$/.test(username);
};
