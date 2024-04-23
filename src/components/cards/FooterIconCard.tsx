import { Component } from "react";
import { StyledFooterIconCard } from "../../styles/styles";
import { IFooterSubCard } from "../../apis/contentData";

interface FooterIconCardProps {
  subCardContent: IFooterSubCard;
}
export default class FooterIconCard extends Component<FooterIconCardProps> {
  renderSubFooterCard() {
    const { subCardContent } = this.props;
    const iconMapping: { [key: number]: string } = {
      0: "gender",
      1: "age",
      2: "muscle",
      3: "pregnancy",
      4: "race",
    };
    
    return  subCardContent.map((card) => (<div></div>))
  }

  render() {
    return (
      <StyledFooterIconCard>{this.renderSubFooterCard()}</StyledFooterIconCard>
    );
  }
}
