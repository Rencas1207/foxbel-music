import axios from 'axios';

export const getSongs = ({ artist = 'adele' } = {}) => {
  return axios.get(`/search?q=${artist}`).then(({ data }) => {
    const { data: resp } = data;
    return resp;
  });
};
