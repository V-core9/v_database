const { Worker, isMainThread } = require('worker_threads');

const v_app = {

  init() {
    if (isMainThread) {


      v_app._status = null;
      v_app.config = {
        maxCpuUsage: 50,
        maxWorkerCount: null,
        cpuCount: Number(process.env.NUMBER_OF_PROCESSORS)
      },
        v_app.workers = [];

      if (v_app._status === null) {
        v_app.config.maxWorkerCount = process.env.NUMBER_OF_PROCESSORS * (v_app.config.maxCpuUsage / 100);
        console.log(`🔥 Maximum Number of Workers [ ${v_app.config.maxWorkerCount} ]`);
      }
      for (let i = 1; i < v_app.config.maxWorkerCount; i++) {
        // This re-loads the current file inside a Worker instance.
        v_app.workers["v_worker#" + i] = { worker: new Worker(__filename), created_ts: Date.now() };
      }
      console.log(v_app);
    } else {
      console.log('🏭 Worker Space  >> [ isMainThread :: ' + isMainThread + ' ]');
    }
  }
};


v_app.init();

