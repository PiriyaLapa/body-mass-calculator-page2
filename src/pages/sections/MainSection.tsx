import { Component } from "react";
import { StyledMainSection } from "../../styles/styles";
import { HeaderContent } from "../../apis/contentData";
import MainCard from "../../components/cards/MainCard";
import IconCard from "../../components/cards/IconCard";

interface MainSectionProps {
  dataApis: HeaderContent;
}
export default class MainSection extends Component<MainSectionProps> {
  render() {
    const { maincard, subcard} = this.props.dataApis.cardcontent;
    return (
      <StyledMainSection>
        <MainCard maincardContent={maincard} />
        <IconCard subCardContent={subcard} /> 
      </StyledMainSection>
    );
  }
}
