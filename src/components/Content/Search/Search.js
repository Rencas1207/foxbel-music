import React, { useState } from 'react';

import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { breakpoints } from '../../../styles/MediaQueries';

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

    ${breakpoints.tablet} {
      width: 80%;
    }
    ${breakpoints.phone} {
      width: 70%;
    }

    input {
      padding: 0.6rem 1.2rem;
      width: 100%;
      border: 1px solid var(--soft-gray);
      font-weight: 300;
      border-radius: 100px;
      font-size: 18px;
      font-weight: 100;
      transition: all 0.5s ease;
      &::placeholder {
        color: var(--soft-gray);
        font-weight: 300;
      }
      &:focus {
        border: 1px solid var(--main-red);
      }
    }
    i {
      position: absolute;
      right: 18px;
      top: 10px;
      bottom: 10px;
      color: var(--soft-gray);
      font-size: 20px;
      cursor: pointer;

      ${breakpoints.phone} {
        top: 7px;
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    i {
      color: var(--main-red);
      padding-right: 0.5rem;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const Search = ({ show, setShow }) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

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
        <i className="fas fa-search" onClick={handleSearch}></i>
        <input
          type="text"
          placeholder="Buscar..."
          name="value"
          value={value}
          onChange={handleValue}
        />
      </form>
      <div className="user">
        <i className="fas fa-user"></i>
        <p>Renzo C.</p>
      </div>
    </SearchStyled>
  );
};
