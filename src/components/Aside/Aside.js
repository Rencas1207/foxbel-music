import React, { useState } from 'react';
import logo from '../../assets/foxbel-music.png';

import { Link } from 'react-router-dom';
import { AsideStyles } from './AsideStyles';

export const Aside = ({ show }) => {
  const [itemActive, setItemActive] = useState(1);

  return (
    <AsideStyles show={show}>
      <img src={logo} alt="foxbel-music" loading="lazy" />
      <div className="list">
        <h3 className="list__title">Mi Librería</h3>
        <Link
          to="/?q=recientes"
          className={`list__item ${itemActive === 1 ? 'active' : null}`}
          onClick={() => setItemActive(1)}
        >
          Recientes
        </Link>
        <Link
          to="/?q=artistas"
          className={`list__item ${itemActive === 2 ? 'active' : null}`}
          onClick={() => setItemActive(2)}
        >
          Artistas
        </Link>
        <Link
          to="/?q=albums"
          className={`list__item ${itemActive === 3 ? 'active' : null}`}
          onClick={() => setItemActive(3)}
        >
          Álbums
        </Link>
        <Link
          to="/?q=canciones"
          className={`list__item ${itemActive === 4 ? 'active' : null}`}
          onClick={() => setItemActive(4)}
        >
          Canciones
        </Link>
        <Link
          to="/?q=estaciones"
          className={`list__item ${itemActive === 5 ? 'active' : null}`}
          onClick={() => setItemActive(5)}
        >
          Estaciones
        </Link>
      </div>
      <div className="list">
        <h3 className="list__title">Playlist</h3>
        <Link
          to="/?q=metal"
          className={`list__item ${itemActive === 6 ? 'active' : null}`}
          onClick={() => setItemActive(6)}
        >
          Metal
        </Link>
        <Link
          to="/?q=dance"
          className={`list__item ${itemActive === 7 ? 'active' : null}`}
          onClick={() => setItemActive(7)}
        >
          Para bailar
        </Link>
        <Link
          to="/?q=rock"
          className={`list__item ${itemActive === 8 ? 'active' : null}`}
          onClick={() => setItemActive(8)}
        >
          Rock 90s
        </Link>
        <Link
          to="/?q=baladas"
          className={`list__item ${itemActive === 9 ? 'active' : null}`}
          onClick={() => setItemActive(9)}
        >
          Baladas
        </Link>
      </div>
    </AsideStyles>
  );
};
