import React, { useContext } from 'react';

import styled from 'styled-components';
import { SongsContext } from '../../../context/SongContext';
import { useSong } from '../../../hooks/useSong';
import { SongGrid } from './SongGrid';

const ResultsStyles = styled.section`
  width: 100%;
  h2 {
    color: var(--main-red);
    font-weight: bold;
  }
`;

export const Results = () => {
  // const { songs } = useSong();
  const { songs } = useContext(SongsContext);
  // console.log(songs);

  return (
    <>
      <ResultsStyles>
        <h2 className="mb-2">Resultados</h2>
        <SongGrid songs={songs} />
      </ResultsStyles>
    </>
  );
};
