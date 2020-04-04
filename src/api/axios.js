import axios from 'axios';

const Token = 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTU4NTk2OTQ5MSwiZXhwIjo0NzM5NTY5NDkxfQ.ImV5SjJJam94ZlEuZXlKa2IyMWhhVzRpT2lKaGNHa3VZV04wYVhaaGRHbHZibk11ZUhsNkluMCI.iQ2XW4ZN-Edzj-X6wIY3WRHc7_iteE_Ip02tA7P-rSHCrdphtetAEmo0zE_xeb87Xf2CRT_16lOWyNkqCZfTnQ';

let instance = axios.create({
  baseURL: 'https://api.activations.xyz/',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const headers = config.headers;
    headers['Authorization'] = `Bearer ${Token}`;
    config.headers = headers;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
