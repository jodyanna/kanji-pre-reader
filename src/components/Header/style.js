import styled from "styled-components";
import { colors } from "../Shared/colorScheme";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 10%;
  
  color: ${colors.white};
  background-color: ${colors.lightpink};
`;

export const H1 = styled.h1`
  text-align: center;
`
