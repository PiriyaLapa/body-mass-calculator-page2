import { Component } from "react";
import { StyledFooterIconCard } from "../../styles/styles";
import { IFooterSubCard } from "../../apis/contentData";
import FooterIcon from "../icons/FooterIcons";

interface FooterIconCardProps {
  subCardContent: IFooterSubCard[];
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
    
    return subCardContent.map((card) => (
      <div key={card.id}>
        <FooterIcon type={iconMapping[card.id]} />
        <h3>{card.title}</h3>
        <p>{card.content}</p>
      </div>
    ))
  }

  render() {
    return (
      <StyledFooterIconCard>{this.renderSubFooterCard()}</StyledFooterIconCard>
    );
  }
}
