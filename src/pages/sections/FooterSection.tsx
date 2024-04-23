import { Component } from "react";
import { FooterContent } from "../../apis/contentData";
import { StyledFooterSection } from "../../styles/styles";
import FooterMainCard from "../../components/cards/FooterMainCard";
import FooterIconCard from "../../components/cards/FooterIconCard";
interface FooterSectionProps {
  dataApis: FooterContent;
}
export default class FooterSection extends Component<FooterSectionProps> {
  render() {
    const { maincard,subcard } = this.props.dataApis;
    return (
      <StyledFooterSection>
        <FooterMainCard footerMainContent={maincard} />
        <FooterIconCard subCardContent={subcard} />
      </StyledFooterSection>
    );
  }
}
