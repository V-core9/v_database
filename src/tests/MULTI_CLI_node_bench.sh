#!/bin/bash
NUMBERLOOP=10

#running 10 users

if [ $# -eq 1 ]
then
  NUMBERLOOP=$1
fi
  
echo "Number of USERS : $NUMBERLOOP"  
echo ""


echo "" > "./src/tests/multi_results_node.txt" ; 

for ((i = 1 ; i <= NUMBERLOOP ; i++)); do
  start bash -c ' echo "STARTED: "$(date +%s.%N) >> "./src/tests/multi_results_node.txt" ; echo $( time bash -c "./src/tests/BENCH_node_save.sh 10") ; echo "DONE: "`date +%s.%N` >> "./src/tests/multi_results_node.txt" ' ;  
done


