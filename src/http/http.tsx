import axios from 'axios'
import Router from 'next/router'
import Message from '../../components/Message'
import api from '../config/config'

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

instance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    console.error('axios error', error);

    let data = [];

    if (error.response.data.data) {
      data = error.response.data.data;
    }

    if (error.response.data.message) {
      data = error.response.data.message;
    }

    if (error.response.data.error) {
      data = error.response.data.error.message;
    }

    if (error.response.status === 429) {
        Message.error({content: "请求次数过多！", duration: 2000})
    } else if (error.response.status === 401) {
      if (location.pathname !== '/') {
        if (location.pathname !== '/auth/login') {
            if (localStorage.getItem('token') !== null) { 
                Message.error({content: "您的登录状态已失效，无权访问此页面，正在为您重新登录……", duration: 2000}) 
            } else {
        Message.error({content: "您还未登录，无权访问此页面，正在重新登录……", duration: 2000})
        }
        Router.push("/auth/login")
        }
      }
    } else if (error.response.status === 404) {
      Message.error({content: "LaeCloudAPI Error 404",duration: 2000})
    } else {
      if (data.length !== 0) {
        Message.error({content: data,duration: 2000})
      }
    }
  }
);

export default instance;
