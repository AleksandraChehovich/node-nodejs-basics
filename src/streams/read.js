import fs from 'fs';

const read = async () => {
    const fd = fs.createReadStream('./src/streams/files/fileToRead.txt');
    fd.setEncoding('UTF8')

    fd.on('data', (data) => {
        process.stdout.write(data)
    });
};

await read();