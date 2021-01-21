import { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const fadeInRule = css`
  ${fadeIn} 500ms ease-in;
`;

export const fadeOutRule = css`
  ${fadeOut} 200ms linear;
`;
