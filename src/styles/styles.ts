import styled from "styled-components";

export const StyledHeaderSection = styled.div`
  :nth-child(1) {
    @media screen and (max-width: 767px) {
      text-align: center;
    }

    // Tablet
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    }

    // Labtop
    @media screen and (min-width: 1024px) and (max-width: 1439px) {
    }

    // Desktop
    @media screen and (min-width: 1440px) {
    }
    @media screen and (min-width: 1920px) {
    }
  }
`;
export const StyledLandingPage = styled.div`
    display:grid;
    grid-template-rows:  auto auto auto 

    @media screen and (max-width: 767px) {
        //
    }

    // Tablet
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    }

    // Labtop
    @media screen and (min-width: 1024px) and (max-width: 1439px) {
    }

    // Desktop
    @media screen and (min-width: 1440px) {
    }
    @media screen and (min-width: 1920px) {
    }

`;

export const StyledMainSection = styled.div``;

export const StyledScreenSizeDetect = styled.div`
  width: 90%;
  height: auto;
  display: inline-block;
  background-color: rgba(143, 227, 249, 0.2);
  padding: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  h1 {
    font-family: "Chivo";
    font-style: normal;
    font-weight: 900;
    text-transform: capitailze;
    font-size: 1em;
    span {
      color: #54e6af;
    }
  }
`;
