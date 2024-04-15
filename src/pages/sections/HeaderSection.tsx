import { Component, ReactNode } from "react";
import { StyledHeaderSection } from "../../styles/styles";
import { HeaderContent } from "../../apis/contentData";
import HeaderCard from "../../components/cards/HeaderCard";

interface HeaderSectionProps {
  dataApis: HeaderContent;
}
export default class HeaderSection extends Component<HeaderSectionProps> {
  render(): ReactNode {
    const { header} = this.props.dataApis;
    return (
      <StyledHeaderSection>
        <HeaderCard headerContent={header} />
      </StyledHeaderSection>
    );
  }
}
