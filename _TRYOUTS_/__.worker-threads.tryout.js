const { Worker, isMainThread } = require('worker_threads');

const v_app = {
  _status: null,
  $_status () {
    return v_app._status;
  },
  config: {
    maxCpuUsage: 50,
    maxWorkerCount: null,
  },
  workers: [],

  init() {

    if (isMainThread) {
      if (v_app._status === null ) {
        v_app.config.maxWorkerCount = process.env.NUMBER_OF_PROCESSORS * (v_app.config.maxCpuUsage / 100) ;
        console.log(`🔥 Maximum Number of Workers [ ${v_app.config.maxWorkerCount} ]`);
      }



      // This re-loads the current file inside a Worker instance.
      //new Worker(__filename);
      //console.log(v_app);
    } else {
      console.log('🏭 Worker Space  >> [ isMainThread :: '+ isMainThread +' ]');
      //console.log(isMainThread);  // Prints 'false'.
    }
  }
};


v_app.init();


