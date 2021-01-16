import styled from "styled-components";
import { colors } from "../Shared/colorScheme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 80%;
`;

export const Textarea = styled.textarea`
  margin: auto 0 0 0;
  
  background-color: ${colors.lightgreen};
  
  outline: none;
  border: 1px solid ${colors.green};
  border-radius: 4px;
  
  &:focus {
    outline: 5px solid ${colors.green};
  }
  
  resize: none;
`;
