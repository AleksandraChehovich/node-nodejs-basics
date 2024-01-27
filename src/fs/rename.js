import fs from 'fs';

const rename = async () => {
    fs.access('./src/fs/files/properFilename.md', fs.constants.F_OK, (error) => {
        if (error) {
            fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (error) => {
                if (error) {
                    if (error.code === 'ENOENT') {
                        throw new Error('FS operation failed');
                    }
                    throw error;
                }
            })
        } else {
            throw new Error('FS operation failed'); 
        }
    })
};

await rename();