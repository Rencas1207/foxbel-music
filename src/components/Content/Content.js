import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.main`
  padding: 2rem;
`;

export const Content = ({ children }) => {
  return <ContentStyles>{children}</ContentStyles>;
};
