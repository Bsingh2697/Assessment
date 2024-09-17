import axios from 'axios';

const EV_AXIOS_INSTANCE = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


export { EV_AXIOS_INSTANCE  };
