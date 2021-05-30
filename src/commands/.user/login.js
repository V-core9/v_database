const {Command, flags} = require('@oclif/command')
const tryToLogin = require("../module/users/login");

class LoginCommand extends Command {
  async run() {
    const { flags } = this.parse(LoginCommand);
    const username = flags.username || "null";
    const password = flags.password || "null";
    const secret_code = flags.secret_code || "null";

    if ( (username == "null") || (password == "null") || (secret_code == "null") ) {

      console.log(false, "SOME DATA MISSING, TRY AGAIN >");

    } else {

      const userInput = {
        username: username,
        password: password,
        secret_code: secret_code,
      };

      const loginStatus = tryToLogin(userInput);

      var isLoginGood = false;

      if (typeof loginStatus === 'string') {
        if (loginStatus.includes("omegaLoginXtraID")) {
          isLoginGood = true;
        }
      } 
      
      isLoginGood
        ? console.log("LOGIN SUCCESS :|: ClientGID >> " + loginStatus)
        : console.log("FAILED LOGIN :|: RESPONSE >> " + loginStatus);
    }
  }
}

LoginCommand.description = `Basically copy of the hello, need to actually build it yet
...
Extra documentation goes here

ao_qb omega-login list of flags...   
> -u [username] - put in username 
> -p [password] - handling password 
> -s [secret_code] - secret code flag

Example Run:

ao_qb omega-login -u |some_username| -p |password| -s |secret_code| 

`;

LoginCommand.flags = {
  username: flags.string({
    char: "u",
    description: "handles username input",
  }),
  password: flags.string({
    char: "p",
    description: "password input flag",
  }),
  secret_code: flags.string({
    char: "s",
    description: "secret code flag",
  }),
};

module.exports = LoginCommand
