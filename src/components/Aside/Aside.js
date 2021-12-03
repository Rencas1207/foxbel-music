import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/foxbel-music.png';

import { Link } from 'react-router-dom';
import { breakpoints } from '../../styles/MediaQueries';

const AsideStyled = styled.aside`
  background: var(--dark-red-second);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  ${breakpoints.tablet} {
    position: fixed;
    width: 330px;
    height: 100vh;
    content: '';
    top: 0;
    transition: right 0.5s ease;
    right: ${(props) => (props.show ? '-15%' : '-100%;')};
    z-index: 9999;
  }

  img {
    /* border: 1px solid blue; */
    width: 250px;
    height: 60px;
    margin: 2rem 0;
  }

  .list {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
    &__title {
      padding: 0.5rem 2rem;
      font-size: 22px;
      font-weight: bold;
    }
    &__item {
      font-size: 16px;
      padding: 0.4rem 2rem;
      font-weight: 400;
      color: var(--white);
      cursor: pointer;
      transition: color 0.3s ease;
      position: relative;
      &.active {
        color: var(--main-red);
        &::before {
          position: absolute;
          content: '';
          top: 3px;
          bottom: 2px;
          left: 0;
          background: var(--main-red);
          width: 0.3rem;
          height: 80%;
        }
      }

      &:hover {
        color: var(--main-red);
      }
    }
  }
`;

export const Aside = ({ show }) => {
  return (
    <AsideStyled show={show}>
      <img src={logo} alt="foxbel-music" loading="lazy" />
      <div className="list">
        <h3 className="list__title">Mi Librería</h3>
        <Link to="/foxbel-music?q=recientes" className="list__item active">
          Recientes
        </Link>
        <Link to="/foxbel-music?q=artistas" className="list__item">
          Artistas
        </Link>
        <Link to="/foxbel-music?q=albums" className="list__item">
          Álbums
        </Link>
        <Link to="/foxbel-music?q=canciones" className="list__item">
          Canciones
        </Link>
        <Link to="/foxbel-music?q=estaciones" className="list__item">
          Estaciones
        </Link>
      </div>
      <div className="list">
        <h3 className="list__title">Playlist</h3>
        <Link to="/foxbel-music?q=metal" className="list__item">
          Metal
        </Link>
        <Link to="/foxbel-music?q=dance" className="list__item">
          Para bailar
        </Link>
        <Link to="/foxbel-music?q=rock" className="list__item">
          Rock 90s
        </Link>
        <Link to="/foxbel-music?q=baladas" className="list__item">
          Baladas
        </Link>
      </div>
    </AsideStyled>
  );
};
