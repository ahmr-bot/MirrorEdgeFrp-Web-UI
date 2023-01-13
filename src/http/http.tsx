import axios from 'axios'
import api from '../config/config'
import Message from '../../components/Message'
const baseURL = api.api
let instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
})

instance.interceptors.request.use(
    (config) => {
        if (config.headers === undefined) {
            config.headers = {}
        }

        config.headers['Accept'] = 'application/json'
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        return Promise.resolve(config)
    },
    (error) => {
        console.error(error)
        Message.error({content: error,  duration: 2000})
        return Promise.reject(error)
    }
)
