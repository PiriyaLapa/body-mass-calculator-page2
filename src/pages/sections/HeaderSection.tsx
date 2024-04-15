import { Component, ReactNode } from "react";
import { StyledHeaderSection } from "../../styles/styles";
import Icons from "../../components/icons/Icons";
import { HeaderContent } from "../../apis/contentData";

interface HeaderSectionProps {
  dataApis: HeaderContent;
}
export default class HeaderSection extends Component<HeaderSectionProps> {
  render(): ReactNode {
    const icons = new Icons({});
    const { header, contentcal } = this.props.dataApis;
    return (
      <StyledHeaderSection>
        {icons.mainlogo()}
        <HeaderCard headerContent={header} />
        
      </StyledHeaderSection>
    );
  }
}
