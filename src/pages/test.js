import React from 'react';
import Responsive from '../component/responsive';
import Button from '../component/button';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Footer from '../component/footer';
const button_names = [
  'Blooad Glucose',
  'Medication',
  'Food Tracking',
  'Exerciese',
  'Weight Management',
  'Blood Pressure',
  'A1C',
];
const COL = styled(Col)`
  margin: 10px 0;
`;
const Test = () => {
  return (
    <Responsive>
      <p>
        <h2>What are your main areas of focus?</h2>
      </p>
      <p>
        <h5>This will help us build a personalized experience for you</h5>
      </p>
      <Row>
        {button_names.map((name, index) => {
          return (
            <COL xs="6">
              <Button selected={index === 0 ? true : false}>{name}</Button>
            </COL>
          );
        })}
      </Row>
      <Footer />
    </Responsive>
  );
};

export default Test;
