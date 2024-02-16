import fs from 'fs';

const list = async () => {
    fs.readdir('./src/fs/files', (error, files) => {
        if (error) {
            if (error.code === 'ENOENT') throw new Error('FS operation failed');
            throw error;
        }
        console.log(files);
    })
};

await list();