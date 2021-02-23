import styled from "styled-components";
import { fadeInRule } from "../Shared/Animation";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 80%;
  
  animation: ${fadeInRule};
`;

export const Downloader = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 100%;
  
  font-size: 20px;
  text-align: center;
`;