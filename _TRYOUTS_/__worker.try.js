const { Worker, isMainThread, parentPort } = require('worker_threads');
const report = (worker) => {
 worker.postMessage('REPORT_STATS');
}

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once('message', (message) => {
    console.log(message);  // Prints 'Hello, world!'.
    report(worker);
  });
  //console.log(worker);
 worker.postMessage('REPORT_STATS');
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once('message', (message) => {
    console.log("From Worker : "+ message);
    parentPort.postMessage({msg: message, ts: Date.now()});
  });
  
}
