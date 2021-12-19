import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/all';
import { ThreePoints } from './ThreePoints';
import { breakpoints } from '../../../styles/MediaQueries';
import { useSong } from '../../../hooks/useSong';
import { useSingleTrack } from '../../../hooks/useSingleTrack';

const SongStyles = styled.div`
  ${breakpoints.phone} {
    margin: 0 auto;
  }
  .figure {
    cursor: pointer;
    position: relative;
    width: 160px;
    height: 160px;
    background: var(--main-red);

    img {
      object-fit: cover;
    }
    svg {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      width: 45px;
      height: 45px;
      fill: var(--white);
    }
  }
  .song {
    padding: 0.5rem 0 0;
  }
`;

const Song = ({ artist, title, album, id }) => {
  // const navigate = useNavigate();
  const { setSound } = useSingleTrack();

  const track = () => {
    setSound(id);
  };

  return (
    <SongStyles>
      <div className="figure" onClick={track}>
        <img src={album.cover_medium} alt={title} loading="lazy" />
        <FaPlay />
        <ThreePoints $rotate="-90deg" $position="absolute" rotate="true" />
      </div>
      <h4 className="song">{title}</h4>
      <p className="artist">{artist.name}</p>
    </SongStyles>
  );
};

export default React.memo(Song, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
