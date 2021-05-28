function cmdResConsLOG( cmdType = null, command = null, acceptSetupCommand = null ) {
    var helperCommandStatus = false;
    switch (cmdType) {
      case null:
        emptyCommand();
        helperCommandStatus = false;
        break;

      case true:
          if (command !== null){
            goodCommand(command);
            helperCommandStatus = true;
          } else {
            randomErrorMSG("ERROR Empty Command Value Somehow Entered WTF ERROR");
            helperCommandStatus = false;
          }
        break;

      default:
          if (command != null){
              emptyCommand();
              helperCommandStatus = false;
          } else {
              badCommand(command, acceptSetupCommand);
              helperCommandStatus = false;
          }
        break;
    }
    return helperCommandStatus;
}

function randomErrorMSG(msg="ERROR MESSAGE MISSING CONTENT") {
  console.log(" ");
  console.warn(
    "/====================================================================================\\"
  );
  console.warn("    " + msg);
  console.warn(
    "\\===================================================================================/"
  );
  console.log(" ");
}

function emptyCommand() {
  console.log(" ");
  console.log(
    "/====================================================================================\\"
  );
  console.log("    No Command provided.");
  console.log("    Will probably provide a setups list when empty.");
  console.log(
    "\\===================================================================================/"
  );
  console.log(" ");
}

function goodCommand(command) {
  console.log(" ");
  console.log(
    "/====================================================================================\\"
  );
  console.log(
    `  GOOD: Accpted command and flag [ setup -c ${command} ] from .\\src\\commands\\setup.js`
  );
  console.log(
    "\\===================================================================================/"
  );
  console.log(" ");
}

function badCommand(command, acceptSetupCommand) {
  console.log(" ");
  console.log(
    "/=================================================================\\"
  );
  console.log(`  ⚠ ERROR: [ ${command} ] Command FLAG Modifier [CFM] not recognized.  `);
  console.log(
    "+- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -+ "
  );
  console.log("    Flag -c command non-existant. ");
  console.log("    Available commands: " + acceptSetupCommand);
  console.log(
    "\\=================================================================/"
  );
  console.log(" ");
}

module.exports = emptyCommand;
module.exports = goodCommand;
module.exports = badCommand;
module.exports = cmdResConsLOG;
