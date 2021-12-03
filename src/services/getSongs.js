const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com';

export const getSongs = ({ artist = 'adele' } = {}) => {
  return fetch(`${API_URL}/search?q=${artist}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': 'e62864a679mshc5ee2dc5d725aa5p1636c4jsn4093a8c53f08',
    },
  })
    .then((response) => response.json())
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.error(err));
};
