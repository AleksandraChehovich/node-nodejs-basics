import fs from 'fs';

const remove = async () => {
    fs.unlink('./src/fs/files/fileToRemove.txt', (error) => {
        if (error) {
            if (error.code === 'ENOENT') throw new Error('FS operation failed');
            throw error;
        }
    })
};

await remove();