import axios from 'axios';
const authAPI = axios.create({ baseURL: 'http://localhost:4000' });
const taskAPI = axios.create({ baseURL: 'http://localhost:8000/api' });
authAPI.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
taskAPI.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export { authAPI, taskAPI };