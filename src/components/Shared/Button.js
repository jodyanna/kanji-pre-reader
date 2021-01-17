import styled from "styled-components";
import { colors } from "./colorScheme";

export const Button = styled.input`
  width: 150px;
  height: 50px;
  
  margin: 1em;
  
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
  
  font-size: 1.2em;
  font-weight: bold;
  
  color: ${colors.white};
  background-color: ${colors.lightpink};
`;
