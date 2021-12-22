import styled from 'styled-components';
import { breakpoints } from '../../../styles/MediaQueries';

export const SearchStyles = styled.section`
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

    .search {
      padding: 0.3rem 1.6rem 0.3rem 0rem;
      position: relative;
      transition: all 0.5s ease;

      z-index: 999;

      &:hover {
        input {
          width: 320px;
        }
      }

      input {
        border: 1px solid var(--soft-gray);
        font-weight: 300;
        border-radius: 100px;
        font-size: 18px;
        font-weight: 100;
        width: 0px;
        height: 40px;
        z-index: -1;
        padding-left: 1.2rem;
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
          width: 320px;
        }
      }

      .btn-search {
        position: absolute;
        top: 0;
        bottom: 8px;
        right: 0;
        content: '';
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        z-index: 99;
        background: var(--main-red);

        pointer-events: none;

        svg {
          width: 20px;
          height: 20px;
          fill: var(--white);
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
