const {Command, flags} = require('@oclif/command')
const fs = require('fs')

class SaveToFileCommand extends Command {
  async run() {
    const {flags} = this.parse(SaveToFileCommand)
    const name = flags.name || 'world'
    
    const content = `Saving to file ${name} from .\\src\\commands\\SaveToFile_Test.js`

    fs.writeFile('test.txt', content, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
    })
  }
}

SaveToFileCommand.description = `SAVIGN TO FILE
...
Extra documentation goes here
`

SaveToFileCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SaveToFileCommand
