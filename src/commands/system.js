const {Command, flags} = require('@oclif/command')
const LogItem = require("../module/log/log_item");

class SystemCommand extends Command {
  async run() {
    const { flags } = this.parse(SystemCommand);
    const command = flags.command || "null";
    const accepSystemCommand = ["info", "deploy", "configure", "update-check", "update-app"];
    //------------//
    const User = require("../js_helpers/demo");
    const jim = new User("Jim", 37, "jim@example.com");

    console.log(jim.getUserStats());
    //------------//
    if (accepSystemCommand.includes(command)) {
      LogItem(command);
    } else {
      if (command == "null") {
        LogItem();
      } else {
        LogItem(command +"  "+ accepSystemCommand);
      }
    }
  }
}

SystemCommand.description = `Basically copy of the hello, need to actually build it yet
...
Extra documentation goes here

ao_qb system   
ao_qb system -c [command] - available commands: new, list, remove, update

Example: ao_qb system -c list 
`

SystemCommand.flags = {
  command: flags.string({char: 'c', description: 'command to run [new, list, rename, remove]'}),
}

module.exports = SystemCommand
