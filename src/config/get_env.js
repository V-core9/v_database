runMode = () =>{
  if (typeof process !== 'undefined') {
    return "node";
  } else if (typeof window !== 'undefined') {
    return "web";
  } else {
    return "unknown";
  }
};

module.exports = runMode();
