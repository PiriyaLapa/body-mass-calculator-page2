import styled from "styled-components";
export const StyledHeaderCard = styled.div`
  font-family: "Inter";
  font-style: normal;
  :nth-child(2) {
    font-weight: 600;
    font-size: 48px;
    line-height: 57px;
    letter-spacing: -0.05em;
    color: #253347;
  }

  :nth-child(3) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #5e6e85;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 24px;
    :nth-child(1) {
      margin: 0 auto;
      margin-top: 30px;
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
export const StyledHeaderSection = styled.header`
  background: linear-gradient(
    290.1deg,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );
  border-radius: 0 0 35px 35px;
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
  display: none;
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
export const StyledBmiForm = styled.div`
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-rows: auto auto auto;
    margin: 10px auto;
    border-radius: 16px;
    width: 328px;
    height: 649px;
    background-color: #ffff;
    * {
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

export const StyledMetricForm = styled.form`
  display: block;
  label {
    float:left;
    padding-left: 28px;
    margin: 10px 0;
  }
`;
export const StyledImprerialForm = styled.div`
  display: block;
`;

export const ContainerRadio = styled.div`
  display: block;
`;
export const StyledResultBox = styled.div`
  background: linear-gradient(90deg, #345ff7 0%, #587dff 100%);
  border-radius: 16px;
  color: #ffff;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 257px;
  justify-content: center;
  margin: 0 auto;
`;
export const StyledIconCard = styled.div``;
export const StyledMainCard = styled.div``;
export const StyledImg = styled.img`
  width: 100%;
`;

export const StyledFooterSection = styled.div``;
export const StyledFooterIconCard = styled.div``;

export const StyledInputTest = styled.input`
  background-color: red;
  border-color: green;
  height: 30px;
  border-radius: 25px;
`;

export const StyledInputMetrix = styled.input`
  border-radius: 12px;
  padding: 20px 24px;
  border: 1px solid #D8E2E7; 
  width: 280px;
  height:60px;
`;
