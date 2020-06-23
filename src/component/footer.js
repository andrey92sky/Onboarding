import React from 'react';
import styled, { css } from 'styled-components';
const Layout = styled.div`
  display: flex;
  color: grey;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  width: 350px;
`;
const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: lightgrey;
  margin: 0 5px;

  ${(props) =>
    props.selected &&
    css`
      width: 10px;
      height: 10px;
      background-color: rgb(66, 78, 166);
    `}
`;
const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 10px;
`;
const Line = styled.div`
  background-color: black;
  height: 5px;
  border-radius: 5px;
  width: 100%;
`;
const Footer = () => {
  return (
    <Layout>
      <div>BACK</div>
      <div>
        <Slider>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle selected></Circle>
        </Slider>
        <Line></Line>
      </div>
      <div style={{ color: 'rgb(66, 78, 166)' }}>
        <strong>DONE</strong>
      </div>
    </Layout>
  );
};

export default Footer;
