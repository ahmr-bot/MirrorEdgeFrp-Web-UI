import config from '../../api.json';
import Message from '../../components/Message'
let current = config.dev;

if (process.env.NODE_ENV === 'production') {
    current = config.prod;
}

Message.success({content: current.api,  duration: 2000})

export default current;
