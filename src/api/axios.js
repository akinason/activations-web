import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://api.activations.xyz/',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  config => {
    const headers = config.headers;
    headers['Authorization'] = `Bearer ${process.env.VUE_APP_TOKEN}`;
    config.headers = headers;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
