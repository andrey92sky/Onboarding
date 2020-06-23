import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  width: 350px;
  & h2,
  h5 {
    color: rgb(43, 52, 87);
    font-weight: bold;
  }

  margin: 0 auto;

  font-family: Montserrat;
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
