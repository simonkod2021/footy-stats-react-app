import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.football-data.org/v4',
  headers: {
    'X-Auth-Token': 'YOUR_API_KEY_HERE' // Replace with your actual API key
  }
});

export default api;