import { workerData, parentPort } from 'worker_threads';

function nthFibonacci(n)
{
    let a = 0;
    let b = 1;
    let c, i;
    if ( n == 0)
        return a;
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const sendResult = () => {

    parentPort.on('message', (data) => {
        const result = nthFibonacci(data.number);
        parentPort.postMessage(result);
    });
};

sendResult();