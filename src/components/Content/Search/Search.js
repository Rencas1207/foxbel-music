import React, { useState } from 'react';

import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { breakpoints } from '../../../styles/MediaQueries';
import { useContext } from 'react/cjs/react.development';
import { SongsContext } from '../../../context/SongContext';
import { FaUser, FaSearch } from 'react-icons/fa';

const SearchStyled = styled.section`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hamburger {
    display: none;

    ${breakpoints.tablet} {
      display: flex;
      margin-right: 2rem;
      align-items: center;
      cursor: pointer;
      span {
        position: relative;
        width: 2rem;
        height: 0.2rem;
        background: var(--main-red);
        border-radius: 2rem;
        transition: background 0.4s ease;
        &::after,
        &::before {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          background: var(--main-red);
          top: 0;
          left: 0;
          border-radius: 2rem;
        }
        &::after {
          transform: translateY(9px);
          transition: transform 0.4s ease;
        }
        &::before {
          transform: translateY(-9px);
          transition: transform 0.4s ease;
        }
      }
      &#active {
        span {
          background: transparent;
          &::before {
            transform: rotate(45deg);
          }
          &::after {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  .bar-search {
    line-height: 36px;
    width: 45%;
    position: relative;
    display: flex;
    /* border: 1px solid green; */
    ${breakpoints.tablet} {
      width: 80%;
    }
    ${breakpoints.phone} {
      width: 70%;
    }

    .search {
      border: 1px solid green;
      width: 100%;
      position: relative;

      .icon-search {
        position: absolute;
        right: 0;
        /* content: ''; */
        /* z-index: 99; */
        /* margin-right: -2rem; */
        /* right: 102px; */
        /* padding: 0 2rem; */
        /* top: 10px; */
        /* bottom: 10px; */
        /* border: 1px solid blue; */
        font-size: 20px;
        cursor: pointer;
        svg {
          fill: var(--main-red);
        }
      }
      input {
        padding: 0.6rem 1.2rem;
        border: 1px solid var(--soft-gray);
        font-weight: 300;
        border-radius: 100px;
        font-size: 18px;
        font-weight: 100;
        width: 80%;
        transition: all 0.5s ease;

        &::placeholder {
          color: var(--soft-gray);
          font-weight: 300;
        }
        &:hover {
          border: 1px solid var(--main-red);
        }
        &:focus {
          border: 1px solid var(--main-red);
          width: 100%;
          /* .icon-search {
            right: 100px;
          } */
        }
      }

      /* ${breakpoints.phone} {
        top: 7px;
      } */
    }
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    svg {
      fill: var(--main-red);
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const Search = ({ show, setShow }) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { trackAudio, setPlaying } = useContext(SongsContext);

  const handleValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${decodeURI(value)}`);
    setValue('');
  };

  const handleBars = () => {
    setShow(!show);
  };

  return (
    <SearchStyled className="mb-2">
      <form className="bar-search" onSubmit={handleSearch}>
        <div
          className="hamburger"
          id={show ? 'active' : ''}
          onClick={handleBars}
        >
          <span></span>
        </div>
        <label className="search">
          <div className="icon-search">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            name="value"
            value={value}
            onChange={handleValue}
          />
        </label>
      </form>
      <div className="user">
        <FaUser />
        <p>Renzo C.</p>
      </div>
    </SearchStyled>
  );
};
