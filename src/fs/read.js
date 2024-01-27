import fs from 'fs';

const read = async () => {
    fs.readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' }, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') throw new Error('FS operation failed');
            throw error;
        }
        console.log(content);
    })
};

await read();