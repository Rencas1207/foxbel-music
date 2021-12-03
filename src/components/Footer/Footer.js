import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { useSong } from '../../hooks/useSong';
import { breakpoints } from '../../styles/MediaQueries';

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
    width: 25%;
    img {
      background: var(--main-red);
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    &__description {
      margin-left: 1rem;
      display: flex;

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
      i {
        color: var(--white);
        font-size: 18px;
        text-align: center;
      }
    }
  }
  .volume {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    input {
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
    i {
      padding: 1rem 1.5rem;
      color: var(--white);
      font-size: 25px;
      text-align: center;
    }
  }
`;

export const Footer = () => {
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(30);
  const { track } = useSong();

  const trackAudio = useRef(null);
  const volumeAudio = useRef(null);

  const justPlay = () => {
    if (play) {
      trackAudio.current.pause();
      setPlay(!play);
    } else {
      trackAudio.current.play();
      setPlay(!play);
    }
  };

  const volumeChange = () => {
    trackAudio.current.volume = volumeAudio.current.value / 100;
    setVolume(volumeAudio.current.value);
  };

  return (
    <FooterStyled>
      <div className="figure">
        <img
          src={track.artist?.picture_medium}
          alt={track.artist?.name}
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
          <i className="fas fa-step-backward"></i>
        </button>
        <button className="play" onClick={justPlay}>
          <i className={play ? 'fas fa-pause' : 'fas fa-play'}></i>
          <audio src={track?.preview} ref={trackAudio}></audio>
        </button>
        <button id="next">
          <i className="fas fa-step-forward"></i>
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
        <i
          className={
            volume >= 0 && volume <= 29
              ? 'fas fa-volume-off'
              : volume >= 30 && volume <= 59
              ? 'fas fa-volume-down'
              : volume >= 60 && volume <= 100
              ? 'fas fa-volume-up'
              : null
          }
        ></i>
      </div>
    </FooterStyled>
  );
};
