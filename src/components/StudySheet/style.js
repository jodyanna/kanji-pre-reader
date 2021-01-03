import styled from "styled-components";

/*
  Standard US paper size in pixels = W: 2550, H: 3300
  Each study sheet can hold a max of 8 entries.

  Pages need to be visible for querySelector, but hidden from user.
  Therefore translate-y -150% and negative z-index.
 */
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: -1;
  transform: translateY(-150%);
  
  width: 2550px;
  height: 3300px;
`;

/*
  Wrapper for easy padding.
  Width is 100px smaller than Page.
  Height is 50px smaller than Page.
 */
export const EntryWrapper = styled.div`
  width: 2500px;
  height: 3250px;
`;