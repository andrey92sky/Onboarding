import styled, { css } from 'styled-components';

const Button = styled.div`
  color: grey;
  background-color: white;
  border: 1px solid grey;
  font-weight: 600;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  height: 65px;
  width: 150px;
  margin: auto;
  cursor: pointer;
  &:hover {
    background-color: rgb(66, 78, 166);
    color: white;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: rgb(66, 78, 166);
      color: white;
    `}
`;
export default Button;
