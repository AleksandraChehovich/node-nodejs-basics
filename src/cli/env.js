const parseEnv = () => {
    const envKeys = Object.keys(process.env);
    const resultKeys = envKeys.filter(key => key.startsWith('RSS_')).map(key => `${key}=${process.env[key]}`)
    console.log(resultKeys.join('; '));
};

parseEnv();
