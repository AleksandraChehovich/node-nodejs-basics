import fs from 'fs';

const copy = async () => {
    fs.open('./src/fs/files', (error) => {
        if (error) {
            if (error.code === 'ENOENT') {
                console.log('error', error)
                throw new Error('FS operation failed');     
            }
            throw error
        }

        fs.open('./src/fs/files_copy', (error) => {
            if (error) {
                if (error.code === 'ENOENT') {
                        fs.cp('./src/fs/files', './src/fs/files_copy', {errorOnExist: true, recursive: true}, function (error) {
                            if (error) throw new Error('FS operation failed');
                            console.log('Copied!');
                    }) 
                } else {
                    throw error
                }
            } else {
                throw new Error('FS operation failed');
            }
        })
    })
};

await copy();
