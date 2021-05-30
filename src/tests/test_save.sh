#!/bin/bash
# else example
if [ $# -eq 1 ]
then
  CONTENT="Saving to file "$1" from ./src/test_save.sh"
else
  CONTENT=`Saving to file < No Input > from /src/test_save.sh`
fi

echo $CONTENT >> "test_file.txt"