module.exports = (name)=>{
  return /^[A-Za-z0-9!@#$%^&*()_.]{5,31}$/.test(name);
};
