const parseArgs = () => {
    let results = '';
    let activeIndex;
    process.argv.forEach((value, index, array) => {
        if (value.startsWith('--')) {
            results = results ? `${results}, ${value}` : value;
            activeIndex = index;
        } else if (index === activeIndex + 1) {
            results = `${results} is ${value}`
        }
    });
    console.log(results);
};

parseArgs();