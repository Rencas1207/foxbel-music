import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SongsContext } from '../context/SongContext';
import { getTracks } from '../services/getTracks';
import { getSongs } from '../services/getSongs';

export const useSong = () => {
  const { songs, setSongs, setLoading } = useContext(SongsContext);
  const [track, setTrack] = useState({});

  const { id } = useParams();

  let currentId = id;

  let location = useLocation();
  const currentTrack = location.search.slice(3);

  const keywordToUse =
    currentTrack || localStorage.getItem('lastKeyword') || 'Adele';

  const IdToUse = currentId || localStorage.getItem('lastId') || '1557137102';

  useEffect(() => {
    getSongs({
      artist: currentTrack ? currentTrack : keywordToUse,
    }).then((data) => {
      setSongs(data);
      // setPlaying(false);
    });
    localStorage.setItem('lastKeyword', keywordToUse);
  }, [setSongs, currentTrack, keywordToUse, setLoading]);

  // console.log(playing);

  useEffect(() => {
    getTracks({ id: currentId ? currentId : IdToUse }).then((data) => {
      setTrack(data);
    });

    localStorage.setItem('lastId', IdToUse);
  }, [setTrack, songs, id, setLoading, currentId, IdToUse]);

  return { songs, track };
};
