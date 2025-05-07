import axios from 'axios';

const axiosClient = axios.create({
  // Set your base API URL here; you can also use an environment variable.
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  timeout: 10000, // 10 seconds timeout
});

export default axiosClient;
