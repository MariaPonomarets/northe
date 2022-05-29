import axios from 'axios';

const apiBaseUrl = 'https://coinmap.org/api/v1/';

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  responseType: 'json',
  timeout: 5000,
});

export default apiClient;
