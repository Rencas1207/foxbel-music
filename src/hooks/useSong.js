import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SongsContext } from '../context/SongContext';
import { getTracks } from '../services/getTracks';
import { getSongs } from '../services/getSongs';

export const useSong = () => {
  const { songs, setSongs, setPlaying, setLoading, setAutoPlay, loading } =
    useContext(SongsContext);
  const [track, setTrack] = useState({});

  // const [loadingSong, setLoadingSong] = useState(false);
  const { id } = useParams();
  let location = useLocation();
  const currentTrack = location.search.slice(3);
  // console.log(currentTrack);
  const keywordToUse =
    currentTrack || localStorage.getItem('lastKeyword') || 'Adele';

  useEffect(() => {
    // setLoadingSong(true);
    // setPlaying(false);
    getSongs({
      artist: currentTrack ? currentTrack : keywordToUse,
    }).then((data) => {
      setSongs(data);
      setPlaying(false);
      setLoading(false);
      setAutoPlay(false);
    });
    localStorage.setItem('lastKeyword', keywordToUse);
  }, [setSongs, currentTrack, keywordToUse, setLoading]);

  // console.log(sound);

  useEffect(() => {
    // setLoading(true);

    getTracks({ id: id ? id : songs[0]?.id }).then((data) => {
      setTrack(data);
      // setPlaying(false);
      // setLoadingSong(false);
      setLoading(false);
    });
  }, [setTrack, songs, id, setLoading]);

  return { songs, track };
};
