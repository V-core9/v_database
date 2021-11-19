module.exports = async (email)=>{
  var errorMessage = {type: "ERROR", message: "📫 Email is not valid entry."} ;
  return ( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? true : errorMessage);
};
