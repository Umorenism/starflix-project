


import axios from 'axios';

// Get the token from localStorage or cookies
const getAuthToken = () => {
  return localStorage.getItem('auth_token') || ''; // Adjust this according to your storage method
};

// Create an Axios instance with the token set globally
const api = axios.create({
  baseURL: 'https://starfaceapi.site/api/auths', // Change this to your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach the token
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally, you can also handle the response error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global error cases (like token expiration, etc.)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors, e.g., redirect to login
      console.log('Token expired or invalid, please log in again');
    }
    return Promise.reject(error);
  }
);

export default api;
