import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

// import { SongsContext } from '../../../context/SongContext';
import { FaUser, FaSearch } from 'react-icons/fa';
import { SearchStyles } from './SearchStyles';
// import { SongsContext } from '../../../context/SongContext';

export const Search = ({ show, setShow }) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  // const { setPlaying, trackAudio } = useContext(SongsContext);

  const handleValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?q=${decodeURI(value)}`);
    setValue('');
    // setPlaying(false);
    // trackAudio.current.removeAttribute('autoPlay');
    // trackA
  };

  const handleBars = () => {
    setShow(!show);
  };

  return (
    <SearchStyles className="mb-2">
      <form className="bar-search" onSubmit={handleSearch}>
        <div
          className="hamburger"
          id={show ? 'active' : ''}
          onClick={handleBars}
        >
          <span></span>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar..."
            name="value"
            value={value}
            onChange={handleValue}
            required
          />
          <div className="btn-search" onClick={handleSearch}>
            <FaSearch />
          </div>
        </div>
      </form>
      <div className="user">
        <FaUser />
        <p>Renzo C.</p>
      </div>
    </SearchStyles>
  );
};
