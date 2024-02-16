import fs from 'fs';
import crypto from 'crypto';


const calculateHash = async () => {
    const fd = fs.createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha1');
    hash.setEncoding('hex');

    fd.on('end', () => {
        hash.end();
        console.log(hash.read());
    });

    fd.pipe(hash);
};

await calculateHash();