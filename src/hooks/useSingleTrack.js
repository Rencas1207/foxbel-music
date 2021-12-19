import { useContext, useState } from 'react';
import { SongsContext } from '../context/SongContext';

export const useSingleTrack = () => {
  const [sound, setSound] = useState(0);
  const [trackSelected, setTrackSelected] = useState([]);
  const { songs } = useContext(SongsContext);

  //   console.log(songs);
  let newSongs = songs.filter((item) => item.id === sound);
  setTrackSelected(newSongs);

  console.log(trackSelected);

  return { sound, setSound };
};
