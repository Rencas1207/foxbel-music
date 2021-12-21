import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useSong } from '../../hooks/useSong';
import { breakpoints } from '../../styles/MediaQueries';

import {
  FaPlay,
  FaPause,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeUp,
  FaVolumeOff,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from 'react-icons/all';
import { useParams } from 'react-router-dom';
import { SongsContext } from '../../context/SongContext';

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  z-index: 99999;
  background: var(--footer-color);
  box-shadow: inset 0px -5px 37px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0px -5px 37px rgba(0, 0, 0, 0.2));
  display: flex;
  justify-content: space-between;

  .figure {
    display: flex;
    max-width: 22%;

    ${breakpoints.tablet} {
      max-width: 20%;
    }

    img {
      background: var(--main-red);
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    &__description {
      margin-left: 1rem;
      display: flex;
      flex-wrap: wrap;

      flex-direction: column;
      justify-content: center;
      color: var(--white);

      ${breakpoints.tablet} {
        display: none;
        width: 100%;
      }
      p {
        font-weight: 700;
        font-size: 14px;
      }
      span {
        display: inline-flex;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
  .middle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    button {
      width: 4rem;
      height: 4rem;
      border: none;
      cursor: pointer;
      background: transparent;
      &.play {
        border-radius: 50%;
        background: var(--light-red);
        padding: 0 1rem;
      }
      svg {
        fill: var(--white);
        width: 20px;
        height: 20px;
        /* text-align: center; */
      }
    }
  }
  .volume {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    input {
      border: 1px solid green;
      -webkit-appearance: none;
      /* width: 80%; */
      outline: none;
      height: 5px;
      margin: 0 15px;
      border-radius: 30px;

      ${breakpoints.tablet} {
        position: absolute;
        content: '';
        right: 0;
        top: 0;
        transform: rotate(-90deg);
        width: 100px;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background: var(--white);
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .volume-control {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 2.8rem 0 0rem;
      svg {
        fill: var(--white);
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const Footer = () => {
  const { track } = useSong();
  const { playing, setPlaying, trackAudio, autoPlay, songs } =
    useContext(SongsContext);
  const { id } = useParams();
  const volumeAudio = useRef(null);
  const [volume, setVolume] = useState(30);

  let trackFilter = songs.filter((item) => item.id === parseInt(id));

  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    // trackAudio.current.removeAttribute('autoPlay');
    playing ? trackAudio.current.play() : trackAudio.current.pause();

    trackAudio.current.addEventListener('ended', () => setPlaying(false));
  }, [playing, setPlaying, trackAudio]);

  const volumeChange = () => {
    trackAudio.current.volume = volumeAudio.current.value / 100;
    setVolume(volumeAudio.current.value);
  };

  let firstImage = songs[0]?.album.cover_medium;
  let firstSong = songs[0]?.preview;
  let firstTitle = songs[0]?.album.title;
  let firstTitleShort = songs[0]?.title_short;
  let firstArtist = songs[0]?.artist.name;

  return (
    <FooterStyled>
      <div className="figure">
        <img
          src={
            trackFilter[0]?.album?.cover_medium ||
            track?.album?.cover_medium ||
            firstImage
          }
          alt={
            trackFilter[0]?.album?.title || track?.album?.title || firstTitle
          }
          title={
            trackFilter[0]?.title_short || track?.title_short || firstTitleShort
          }
          loading="lazy"
        />
        <div className="figure__description">
          <p>
            {trackFilter[0]?.title_short ||
              track.title_short ||
              firstTitleShort}
          </p>
          <span>
            {trackFilter[0]?.artist.name || track.artist?.name || firstArtist} -{' '}
            {trackFilter[0]?.album.title || track.album?.title || firstTitle}
          </span>
        </div>
      </div>
      <div className="middle">
        <button id="pre">
          <IoPlaySkipBack style={{ width: '26px', height: '26px' }} />
        </button>
        <button className="play" onClick={toggle}>
          {playing ? <FaPause /> : <FaPlay />}
          <audio
            src={
              trackFilter[0]?.preview || track?.preview || firstSong
              // firstSong
              //
            }
            ref={trackAudio}
            // preload
            // onError={togg}
            // autoPlay
          ></audio>
        </button>
        <button id="next">
          <IoPlaySkipForward style={{ width: '26px', height: '26px' }} />
        </button>
      </div>

      <div className="volume">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          ref={volumeAudio}
          onChange={volumeChange}
        />
        <span className="volume-control">
          {volume >= 0 && volume <= 2 ? (
            <FaVolumeMute />
          ) : volume >= 3 && volume <= 29 ? (
            <FaVolumeOff />
          ) : volume >= 30 && volume <= 59 ? (
            <FaVolumeDown />
          ) : volume >= 60 && volume <= 100 ? (
            <FaVolumeUp />
          ) : null}
        </span>
      </div>
    </FooterStyled>
  );
};

// export default React.memo(Song, (prevProps, nextProps) => {
//   return prevProps.id === nextProps.id;
// });
