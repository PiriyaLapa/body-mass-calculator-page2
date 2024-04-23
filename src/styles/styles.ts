import styled from "styled-components";
export const StyledHeaderCard = styled.div``;
export const StyledHeaderSection = styled.header`
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
  display: grid;
  grid-template-rows: auto auto auto;

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
  top: 80%;
  left: 50%;
  transform: translate(-50%, 100%);
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    text-transform: capitailze;
    font-size: 1em;
    span {
      color: #54e6af;
    }
  }
`;
export const StyledBmiForm = styled.form`
  display: grid;
  grid-template-rows: auto auto auto;
`;
export const RadioBox = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  @media screen and (max-width: 767px) {
    text-align: center;
    div {
      display: inline-block;
      align-items: center;
    }
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

export const StyledMetricForm = styled.div`
  display: block;
`;
export const StyledImprerialForm = styled.div`
  display: block;
`;

export const ContainerRadio = styled.div`
  display: block;
`;
export const StyledResultBox = styled.div`
  background: lightblue;
  color: white;
`;
export const StyledIconCard = styled.div``;
export const StyledMainCard = styled.div``;
export const StyledImg = styled.img`
  width: 100%;
`;

export const StyledFooterSection = styled.div``;
export const StyledFooterIconCard = styled.div``;
