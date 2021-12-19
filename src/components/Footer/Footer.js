import React, { useEffect, useRef, useState } from 'react';
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
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    input {
      border: 1px solid green;
      -webkit-appearance: none;
      width: 80%;
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
  // const [playing, setPlaying] = useState(false);
  const { track, playing, setPlaying, songs, sound } = useSong();
  const trackAudio = useRef(null);
  const volumeAudio = useRef(null);
  const [volume, setVolume] = useState(30);

  const toggle = () => setPlaying(!playing);

  // console.log(sound);

  // let songsNew = songs.map().filter((item) => item.id === sound);
  let songsNew = songs
    .map((item) => {
      return item;
    })
    .filter((track) => track.id === sound);

  // console.log(songsNew);

  useEffect(() => {
    playing ? trackAudio.current.play() : trackAudio.current.pause();

    trackAudio.current.addEventListener('ended', () => setPlaying(false));
    // return () => {
    //   trackAudio.current.removeEventListener('ended', () => setPlaying(false));

    // };
  }, [playing, setPlaying]);

  const volumeChange = () => {
    trackAudio.current.volume = volumeAudio.current.value / 100;
    setVolume(volumeAudio.current.value);
  };

  // console.log(track);

  return (
    <FooterStyled>
      <div className="figure">
        <img
          src={track.album?.cover_medium}
          alt={track.album?.title}
          title={track.title_short}
          loading="lazy"
        />
        <div className="figure__description">
          <p>{track.title_short}</p>
          <span>
            {track.artist?.name} - {track.album?.title}
          </span>
        </div>
      </div>
      <div className="middle">
        <button id="pre">
          <IoPlaySkipBack style={{ width: '26px', height: '26px' }} />
        </button>
        <button className="play" onClick={toggle}>
          {playing ? <FaPause /> : <FaPlay />}
          <audio src={track?.preview} ref={trackAudio} id="audio"></audio>
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
          {volume >= 0 && volume <= 5 ? (
            <FaVolumeMute />
          ) : volume >= 6 && volume <= 29 ? (
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
