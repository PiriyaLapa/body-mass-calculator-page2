import { Component } from "react";
import GlobalStyles from "./styles/GlobalStyled";
import LandingPage from "./pages/LandingPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <LandingPage />
      </div>
    );
  }
}
