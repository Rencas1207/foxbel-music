// import axios from 'axios';

// export const getTracks = async ({ id = '1557137102' } = {}) => {
//   return await fetch(`/track/${id}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//       // console.log(data);
//       return data;
//     });
// };

const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com';

export const getTracks = async ({ id = '1557137102' } = {}) => {
  return fetch(`${API_URL}/track/${id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': 'e62864a679mshc5ee2dc5d725aa5p1636c4jsn4093a8c53f08',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.warn(err));
};
// getTracks();

// const { data: resp } = data;
