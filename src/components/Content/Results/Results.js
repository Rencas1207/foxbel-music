import React from 'react';

import styled from 'styled-components';
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
  const { songs } = useSong();

  return (
    <>
      <ResultsStyles>
        <h2 className="mb-2">Resultados</h2>
        <SongGrid songs={songs} />
      </ResultsStyles>
    </>
  );
};
