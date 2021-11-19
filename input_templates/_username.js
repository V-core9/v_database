module.exports = async (username)=>{
  var errorMessage = {type: "ERROR", message: "🙋‍♂️ Username can only have letters, numbers, underscore and dot. [ " + data.username + " ]"} ;
  return ( /^[A-Za-z][A-Za-z0-9_.]{5,31}$/.test(username) ? undefined : errorMessage);
};
