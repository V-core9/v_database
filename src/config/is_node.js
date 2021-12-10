runMode = () =>{
  return (process !== undefined) ?  "node" : false;
};

module.exports = runMode();
