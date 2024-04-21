import { Component } from "react";
import { StyledMainSection } from "../../styles/styles";
import { HeaderContent } from "../../apis/contentData";
import MainCard from "../../components/cards/MainCard";

interface MainSectionProps {
  dataApis: HeaderContent;
}
export default class MainSection extends Component<MainSectionProps> {
  render() {
    const { maincard} = this.props.dataApis.cardcontent;
    return (
      <StyledMainSection>
        <MainCard maincardContent={maincard} />
      </StyledMainSection>
    );
  }
}
