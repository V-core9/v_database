const {Command, flags} = require('@oclif/command')

class TableCommand extends Command {
  async run() {
    const {flags} = this.parse(TableCommand)
    const command = flags.command || 'null'
    const acceptableCommand=['new','list','remove','update']
    if (acceptableCommand.includes(command)){
      goodCommand(command);
    } else {
      if (command == 'null'){
        emptyCommand();
      } else {
        badCommand(command, acceptableCommand);
      }
    }
  }
}

function goodCommand(command){
  console.log(' ');
  console.log('/====================================================================================\\')
  console.log(`  GOOD: Accpted command and flag [ table -c ${command} ] from .\\src\\commands\\table.js`)
  console.log('\\===================================================================================/')
  console.log(' ');
}

function emptyCommand(){
  console.log(' ');
  console.log('/====================================================================================\\')
  console.log('    No Command provided.')
  console.log('    Will probably provide a tables list when empty.')
  console.log('\\===================================================================================/')
  console.log(' ');
}

function badCommand(command, acceptableCommand) {
  console.log(' ');
  console.log('/=================================================================\\')
  console.log(`  ⚠ ERROR: [ ${command} ] Command not recognized.  `)
  console.log("+- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -+ ")
  console.log("    Flag -c command non-existant. ")
  console.log('    Available commands: '+acceptableCommand)
  console.log('\\=================================================================/')
  console.log(' ');
}

TableCommand.description = `Basically copy of the hello, need to actually build it yet
...
Extra documentation goes here

ao_qb table   
ao_qb table -c [command] - available commands: new, list, remove, update

Example: ao_qb table -c list 
`

TableCommand.flags = {
  command: flags.string({char: 'c', description: 'command to run [new, list, rename, remove]'}),
}

module.exports = TableCommand
