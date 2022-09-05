const { isMainThread, Worker } = require('worker_threads');

if (isMainThread) {
    console.log(`Main Thread>! Proces ID: ${process.pid}`);
    new Worker(__filename);
    new Worker(__filename);
} else {
    console.log(`Worker! Proces ID: ${process.pid}`);
}