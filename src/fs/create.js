import { access, appendFile, constants } from 'node:fs';

const create = async () => {
    access('./src/fs/files/fresh.txt', constants.F_OK, (error) => {
        if (error) {
            appendFile('./src/fs/files/fresh.txt', 'I am fresh and young', function (err) {
                if (err) throw err;
            });
        } else {
            throw new Error('FS operation failed');  
        }
    })
};

await create();