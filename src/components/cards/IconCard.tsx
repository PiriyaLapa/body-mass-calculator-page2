import { Component, ReactNode } from "react";
import { StyledIconCard } from "../../styles/styles";
import Icons from "../icons/Icons";

interface SubCardContent {
  id: number;
  title: string;
  content: string;
}

interface IconCardProps {
  subCardContent: SubCardContent[];
}
export default class IconCard extends Component<IconCardProps> {
  renderSubCard() {
    const { subCardContent } = this.props;
    const iconMapping: { [key: number]: string } = {
      0: 'healthy',
      1: 'exercies',
      2: 'sleep',
    };

    return subCardContent.map((card) => (
      <div key={card.id}>
        <Icons type={iconMapping[card.id]} />
        <h3>{card.title}</h3>
        <p>{card.content}</p>
      </div>
    ));
  }
  render(): ReactNode {
    return <StyledIconCard>{this.renderSubCard()}</StyledIconCard>;
  }
}
