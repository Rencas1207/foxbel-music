import { useContext, useEffect, useState } from 'react';
import { SongsContext } from '../context/SongContext';
import { getTracks } from '../services/getTracks';
import { getSongs } from '../services/getSongs';

import { useLocation, useParams } from 'react-router-dom';

export const useSong = () => {
  const { songs, setSongs } = useContext(SongsContext);
  const [track, setTrack] = useState({});

  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  // const { id } = useParams();
  // let location = useLocation();
  // const params = location.search.slice(3);

  // const keywordToUse = params || localStorage.getItem('lastKeyword') || 'Adele';

  useEffect(() => {
    setLoading(true);
    // getSongs({
    //   // artist: params ? params : keywordToUse,
    // }).then((data) => {
    //   setSongs(data);
    //   setPlaying(false);
    //   setLoading(false);
    // });
    getSongs().then((data) => {
      setSongs(data);
      setPlaying(false);
      setLoading(false);
    });
    // localStorage.setItem('lastKeyword', keywordToUse);
    // }, [setSongs, params, keywordToUse]);
  }, [setSongs]);

  // console.log(sound);

  // useEffect(() => {
  //   // setLoading(true);

  //   getTracks({ id: id ? id : songs[0]?.id }).then((data) => {
  //     setTrack(data);
  //     setPlaying(false);
  //     // setLoading(false);
  //   });
  // }, [setTrack, setPlaying, songs, id]);

  return { songs, track, loading, playing, setPlaying };
};
