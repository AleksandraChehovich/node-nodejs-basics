import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const streamToCompress = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./src/zip/files/archive.gz');

    streamToCompress
        .pipe(zlib.createGzip())
        .pipe(writeStream)
};

await compress();