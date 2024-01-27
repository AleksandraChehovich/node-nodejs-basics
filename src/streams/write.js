import fs from 'fs';
import { stdin } from 'process';

const write = async () => {
    const fd = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
    stdin.pipe(fd);
    stdin.resume();
};

await write();