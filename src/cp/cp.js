import { spawn } from 'child_process';
import { stdin, stdout } from 'process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const childProcessPath = path.resolve(__dirname, './files/script.js');
    const child = spawn('node', [childProcessPath, ...args]);

    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
