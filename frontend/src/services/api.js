import axios from 'axios';

const api = axios.create({
    baseURL: '/api' // Adjust this to your backend API base URL
});

// Add request interceptor to include the token if available
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;