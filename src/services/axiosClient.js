import axios from 'axios';

import apiConfig from './axiosConfig';

// const instance = axios.create({
//   baseURL: 'https://api.deezer.com/',
// });

// axios.get(`/track/${id}`).then((resp) => {
//   console.log(resp);
// });

// export default instance;

import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      console.log(response.data);
      // return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

// console.log(axiosClient);

export default axiosClient;
