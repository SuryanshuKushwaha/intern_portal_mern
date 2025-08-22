import axios from 'axios';

// Use backend URL from environment variable or default to localhost for development
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Create an Axios instance with the base URL including '/api' prefix
export const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});
