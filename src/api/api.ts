import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authTokens');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = (data: { full_name: string; email: string; password: string }) =>
  api.post('/auth/register', data);

export const login = (data: { email: string; password: string }) =>
  api.post('/auth/login', data);

export const verify = (data: { code: string; user_token: string }) =>
  api.post('/auth/verify', data);

export const resendVerification = (data: { user_token: string }) =>
  api.post('/auth/resendVerification', data);

export const listEvents = () => api.get('/events/list');

export const getEventById = (id: string) => api.get(`/events/${id}`);

export const createEvent = (data: { name: string; options: string[]; limit_date: string }) =>
  api.post('/events/create', data);

export const updateEvent = (id: string, data: { name: string; options: string[]; limit_date: string }) =>
  api.post(`/events/update/${id}`, data);

export const deleteEvent = (id: string) => api.post(`/delete/${id}`);

export const vote = (data: { event_id: string; option: string }) =>
  api.post('/votes/create', data);
