import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { ThreePoints } from './ThreePoints';
import { breakpoints } from '../../../styles/MediaQueries';

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
    i {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      color: var(--white);
    }
  }
  .song {
    padding: 0.5rem 0 0;
  }
`;

export const Song = ({ artist, title, album, id }) => {
  const navigate = useNavigate();

  const track = () => {
    navigate(`/foxbel-music/track/${id}`);
  };

  return (
    <SongStyles>
      <div className="figure" onClick={track}>
        <img src={album.cover_medium} alt={title} loading="lazy" />
        <i className="fas fa-play"></i>
        <ThreePoints $rotate="-90deg" $position="absolute" rotate="true" />
      </div>
      <h4 className="song">{title}</h4>
      <p className="artist">{artist.name}</p>
    </SongStyles>
  );
};
