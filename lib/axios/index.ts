
import { storage } from '@/utils/storage';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type":"application/json",
    Authorization: `Bearer ${storage.getAccessToken()}`,
  },
});

axiosInstance.interceptors.request.use(config => {
    const accessToken = storage.getAccessToken();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

export default axiosInstance;