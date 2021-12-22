import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const AsideStyles = styled.aside`
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
