import { API_URL } from '@/config';
import axios from 'axios';

const base = axios.create({
  baseURL: API_URL,
  params: {
    key: process.env.NEXT_PUBLIC_RAWG_API_KEY,
  },
});

export default base;
