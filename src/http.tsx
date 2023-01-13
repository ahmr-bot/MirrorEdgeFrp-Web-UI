import config from '../api.json';

let current = config.dev;

if (process.env.NODE_ENV === 'production') {
    current = config.prod;
}

console.log('api endpoint: ' + current.api);

export default current;