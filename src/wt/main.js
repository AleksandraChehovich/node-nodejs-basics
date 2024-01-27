import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async (n) => {
    
    const coresArray = os.cpus();

    const promise = new Promise((resolve) => {
        const resultArray = [];
            coresArray.forEach((_, index) => {
                const worker = new Worker('./src/wt/worker.js');

                worker.postMessage({  number: n + index });
            
                worker.on('message', (data) => {
                    try {
                        resultArray[index] = {
                            status: 'resolved',
                            data,
                        }
                    } catch (error) {
                        resultArray[index] = {
                            status: 'error',
                            data: null,
                        }
                    }

                    if (resultArray.length === coresArray.length) {
                        resolve(resultArray);
                    }
                });
            });
    })
    
    console.log(await promise);

};

await performCalculations(10);