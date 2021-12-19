import axios from 'axios';

export const getTracks = async ({ id = '1557137102' } = {}) => {
  return axios.get(`/track/${id}`).then((data) => {
    const { data: resp } = data;
    return resp;
  });
};
