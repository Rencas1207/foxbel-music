import React from 'react';

import styled from 'styled-components';

const HeaderStyled = styled.header``;

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <input type="text" placeholder="Buscar..." />
      </div>
    </HeaderStyled>
  );
};
