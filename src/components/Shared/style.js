import styled from "styled-components";

export const Button = styled.input`
  width: 150px;
  height: 75px;
  
  margin: 1em;
  
  border-radius: 4px;
  
  &:hover {
    cursor: pointer;
  }
  
  font-size: 1em;
  font-weight: bold;
  
  color: ${props => props.fontColor};
  background-color: ${props => props.bgColor}
`;

export const AppNav = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;
  
  width: 100%;
  
  margin-top: auto;
`;
