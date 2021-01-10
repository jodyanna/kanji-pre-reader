import styled from "styled-components";

export const Button = styled.input`
  width: 100px;
  height: 50px;
  
  margin: 1em;
  
  border-radius: 4px;
  
  &:hover {
    cursor: pointer;
  }
`;

export const AppNav = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
`;
