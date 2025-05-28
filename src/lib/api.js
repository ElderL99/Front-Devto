// src/lib/api.ts (o .js)
import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api', // fallback local
  timeout: 5000,
});

// token sólo en el navegador
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//  Manejo global de errores 
api.interceptors.response.use(
  (res) => res,
  (err) => {
    // 401  limpia sesión
    if (err.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

//  NUEVO: función de búsqueda
export const searchPosts = (q, limit = 6) =>
  api
    .get('/posts/search', { params: { q, limit } }) // ← endpoint correcto
    .then((r) => r.data);


export default api;
