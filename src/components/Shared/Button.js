import styled from "styled-components";
import { colors } from "./colorScheme";

export const Button = styled.input`
  display: flex;
  
  justify-content: center;
  align-items: center;


  height: 50px;
  
  margin: 10px;
  padding: 10px 25px;
  
  border-color: ${colors.pink};
  border-width: 2px;
  border-radius: 4px;
  
  &:hover {
    cursor: pointer;
  }
  
  &:disabled {
    background-color: ${colors.grey};
    border-color: ${colors.grey};
  }
  
  font-size: 20px;
  font-weight: bold;
  
  color: ${colors.white};
  background-color: ${colors.lightpink};
`;
