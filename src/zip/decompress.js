import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const compressedStream = fs.createReadStream('./src/zip/files/archive.gz');
    const resultStream = fs.createWriteStream('./src/zip/files/fileToCompress.txt');

    compressedStream
        .pipe(zlib.createGunzip())
        .pipe(resultStream);
};

await decompress();