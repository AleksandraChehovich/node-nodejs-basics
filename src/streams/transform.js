import { Transform } from 'stream';
import { stdin, stdout } from 'process';

function reverse() {

}

const transform = async () => {

    const reverseStream = new Transform({
        transform (data, _, callback) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
            callback();
        }
    });

    stdin.pipe(reverseStream).pipe(stdout);
    stdin.resume();

};

await transform();