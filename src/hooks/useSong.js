import { useContext, useEffect, useState } from 'react';
import { SongsContext } from '../context/SongContext';
import { getTracks } from '../services/getTracks';
import { getSongs } from '../services/getSongs';

import { useLocation, useParams } from 'react-router-dom';

export const useSong = () => {
  const { songs, setSongs } = useContext(SongsContext);
  const [track, setTrack] = useState({});

  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  let location = useLocation();
  const params = location.search.slice(3);

  const keywordToUse = params || localStorage.getItem('lastKeyword') || 'Adele';

  useEffect(() => {
    setLoading(true);
    getSongs({
      artist: params ? params : keywordToUse,
    }).then((data) => {
      setSongs(data);
      setLoading(false);
    });
    localStorage.setItem('lastKeyword', keywordToUse);
  }, [setSongs, params]);

  useEffect(() => {
    setLoading(true);
    getTracks({ id: id ? id : songs[0]?.id }).then((data) => {
      setTrack(data);
      setLoading(false);
    });
  }, [setTrack, songs, id]);

  return { songs, track, loading };
};
