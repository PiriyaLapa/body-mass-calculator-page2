import { Component } from "react";
import { FooterContent } from "../../apis/contentData";
import { StyledFooterSection } from "../../styles/styles";
import FooterMainCard from "../../components/cards/FooterMainCard";
interface FooterSectionProps {
  dataApis: FooterContent;
}
export default class FooterSection extends Component<FooterSectionProps> {
  render() {
    const { maincard } = this.props.dataApis;
    return (
      <StyledFooterSection>
        <FooterMainCard footerMainContent={maincard} />
        {/* <FooterIcon subCardContent={subcard} /> */}
      </StyledFooterSection>
    );
  }
}
