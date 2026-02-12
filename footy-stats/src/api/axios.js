import axios from 'axios';

const api = axios.create({
  baseURL: '/sports-api',
  headers: {
    'x-apisports-key': import.meta.env.VITE_FOOTBALL_DATA_API_KEY
  }
});

export default api;