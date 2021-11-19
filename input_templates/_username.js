module.exports =  (username) => {
  var min = 6;
  var max= 32;
  var errorMsg ={
    chars : { type: "ERROR", message: "🙋‍♂️ Username can only have letters, numbers, underscore and dot. [ " + username + " ]" },
    min : { type: "ERROR", message: "🤯 Username minimum length is [ " + min + " ]" },
    max : { type: "ERROR", message: "💥 Username maximum length is [ " + max + " ]" },
  };
  if (username.length < min ) return errorMsg.min;
  if (username.length > max ) return errorMsg.max;
  return !( /^[A-Za-z][A-Za-z0-9_.]{(min-1),(max-1)}$/.test(username)) ? true : errorMsg.chars;
};
