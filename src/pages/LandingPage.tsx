import { Component, ReactNode } from "react";
import { StyledLandingPage } from "../styles/styles";
import HeaderSection from "./sections/HeaderSection";
import { ScreenSizeDetectClass } from "../helpers/detectScreenSizeClass";
import ScreenSizeDetect from "../components/ScreenSizeDetect";
import { contentApis } from "../apis/contentData";
import MainSection from "./sections/MainSection";
import FooterSection from "./sections/FooterSection";

interface LandingPageState {
  windowWidth: number;
  windowHeight: number;
}

export default class LandingPage extends Component<{}, LandingPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }
  // Function to update window dimensions in state
  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  // Add event listener to update window dimensions when resized
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  // Remove event listener when component is unmounted
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render(): ReactNode {
    const { windowWidth, windowHeight } = this.state;
    const screenNow = new ScreenSizeDetectClass(windowWidth).detectScreenSize();
    return (
      <StyledLandingPage>
        <HeaderSection dataApis={contentApis} />
        <MainSection dataApis={contentApis} />
        <FooterSection dataApis={contentApis.cardcontent.footercontent} />
        <ScreenSizeDetect
          screenNow={screenNow}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
      </StyledLandingPage>
    );
  }
}
