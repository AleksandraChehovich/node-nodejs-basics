import { spawn, exec } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('pwd');

    child.stdout.on('data', (data) => {
        console.log(`child stdout:\n${data}`);
    });
      
    child.stderr.on('data', (data) => {
        console.error(`child stderr:\n${data}`);
    });

};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
