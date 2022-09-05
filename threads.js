const {
    isMainThread,
    workerData,
    Worker 
} = require('worker_threads');

if (isMainThread) {
    console.log(`Main Thread! Proces ID: ${process.pid}`);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 3, 4, 3]
    });
} else {
    console.log(`Worker! Proces ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}