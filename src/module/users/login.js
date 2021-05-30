function tryToLogin(userInput = null) {
    
    var result = false;

    const omegaAcceptable = {
      username: "Miki",
      password: "MikiPass",
      secret_code: "GOMEXCODE"
    };

    if (userInput !== null){
        if (
          omegaAcceptable.username == userInput.username &&
          omegaAcceptable.password == userInput.password &&
          omegaAcceptable.secret_code == userInput.secret_code
        ) {
          result = "omegaLoginXtraID_"+ Date.now() ;
        } 
    }

    return result;
    
};


module.exports = tryToLogin;