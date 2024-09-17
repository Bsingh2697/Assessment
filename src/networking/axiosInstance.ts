import axios from 'axios';

const EK_AXIOS_INSTANCE = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


export { EK_AXIOS_INSTANCE  };
