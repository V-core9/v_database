# A-O_EasyDB  
==========  
A^O_EasyDB as CLI solution for easy data save, so database solution that utilizes your filesystem to create database

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/A^O_EasyDB.svg)](https://npmjs.org/package/A^O_EasyDB)
[![Downloads/week](https://img.shields.io/npm/dw/A^O_EasyDB.svg)](https://npmjs.org/package/A^O_EasyDB)
[![License](https://img.shields.io/npm/l/A^O_EasyDB.svg)](https://github.com/MyUserNameIsMyUserName/A-O_EasyDB/blob/master/package.json)

<!-- toc -->
* [A-O_EasyDB](#a-o_easydb)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ao_qb
$ ao_qb COMMAND
running command...
$ ao_qb (-v|--version|version)
ao_qb/0.1.2 win32-x64 node-v12.15.0
$ ao_qb --help [COMMAND]
USAGE
  $ ao_qb COMMAND
...
```
<!-- usagestop -->
  $ ao_qb [COMMAND]

# Commands
<!-- commands -->
* [`ao_qb SaveToFile_Test`](#ao_qb-savetofile_test)
* [`ao_qb hello`](#ao_qb-hello)
* [`ao_qb help [COMMAND]`](#ao_qb-help-command)
* [`ao_qb login`](#ao_qb-login)
* [`ao_qb system`](#ao_qb-system)
* [`ao_qb table`](#ao_qb-table)

## `ao_qb SaveToFile_Test`

SAVIGN TO FILE

```
USAGE
  $ ao_qb SaveToFile_Test

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/SaveToFile_Test.js](https://github.com/MyUserNameIsMyUserName/A-O_EasyDB/blob/v0.1.2/src/commands/SaveToFile_Test.js)_

## `ao_qb hello`

Describe the command here

```
USAGE
  $ ao_qb hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/MyUserNameIsMyUserName/A-O_EasyDB/blob/v0.1.2/src/commands/hello.js)_

## `ao_qb help [COMMAND]`

display help for ao_qb

```
USAGE
  $ ao_qb help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `ao_qb login`

Basically copy of the hello, need to actually build it yet

```
USAGE
  $ ao_qb login

OPTIONS
  -p, --password=password        password input flag
  -s, --secret_code=secret_code  secret code flag
  -u, --username=username        handles username input

DESCRIPTION
  ...
  Extra documentation goes here

  ao_qb omega-login list of flags...   
  > -u [username] - put in username 
  > -p [password] - handling password 
  > -s [secret_code] - secret code flag

  Example Run:

  ao_qb omega-login -u |some_username| -p |password| -s |secret_code|
```

_See code: [src/commands/login.js](https://github.com/MyUserNameIsMyUserName/A-O_EasyDB/blob/v0.1.2/src/commands/login.js)_

## `ao_qb system`

Basically copy of the hello, need to actually build it yet

```
USAGE
  $ ao_qb system

OPTIONS
  -c, --command=command  command to run [new, list, rename, remove]

DESCRIPTION
  ...
  Extra documentation goes here

  ao_qb system   
  ao_qb system -c [command] - available commands: new, list, remove, update

  Example: ao_qb system -c list
```

_See code: [src/commands/system.js](https://github.com/MyUserNameIsMyUserName/A-O_EasyDB/blob/v0.1.2/src/commands/system.js)_

## `ao_qb table`

Basically copy of the hello, need to actually build it yet

```
USAGE
  $ ao_qb table

OPTIONS
  -c, --command=command  command to run [new, list, rename, remove]

DESCRIPTION
  ...
  Extra documentation goes here

  ao_qb table   
  ao_qb table -c [command] - available commands: new, list, remove, update

  Example: ao_qb table -c list
```

_See code: [src/commands/table.js](https://github.com/MyUserNameIsMyUserName/A-O_EasyDB/blob/v0.1.2/src/commands/table.js)_
<!-- commandsstop -->  
> - __hello__  
> Describe the command here   
> - __help__  
> display help for ao_qb  
> - __table__    
> Basically copy of the hello, need to actually build it yet  
>   - Flags: -c [command] - better say subcommand
  
  
## Description:   
DB solution using node.js and oclif   
Custom CLI solution using node js and oclif. Generate table, save data, get, update and delete data....Usual stuff you can do with every other DB software.   

  
  
## Idea behind it:   
Well the idea is to have some custom solution to use as local database.   
Basically wanna be able to run something from terminal...like....

       ao_qb insert -d [db_name] -t [db_table] -c .....and here I am still thinking what to do.......[like a content then parse....or prompt for input so I can echo into it and skip that way...not-sure]



## References: 

> 1. [node.js](https://nodejs.org/)  <=  Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.   
>  [[ Download ]](https://nodejs.org/en/download/)  <= easy link to it.
     
> 2. [oclif.io](https://oclif.io/)   <=oclif is an open source framework for building a command line interface (CLI) in Node.js. Create CLIs with a few flags or advanced CLIs that have subcommands. oclif makes it easy for you to build CLIs for your company, service, or your own development needs.  
>   [[ Getting Started ]](https://oclif.io/docs/introduction.html)  :-:   [[ GitHub ]](https://github.com/oclif/oclif)
