import styled from "styled-components";
import { colors } from "./colorScheme";

export const Anchor = styled.a`
  &:link {
    text-decoration: none;
    color: ${colors.pink};
    transition: color 500ms;
  }
  
  &:visited {
    text-decoration: none;
    color: ${colors.pink};
    transition: color 500ms;
  }
  
  &:hover {
    text-decoration: none;
    color: ${colors.purple};
    transition: color 500ms;
  }
  
  &:active {
    text-decoration: none;
    color: ${colors.purple};
  }
`;
