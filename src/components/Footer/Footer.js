import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  background: var(--light-red);
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <h1>Hola soy el footer</h1>
    </FooterStyled>
  );
};
