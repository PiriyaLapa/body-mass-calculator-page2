import { Component, ReactNode } from "react";
import { StyledHeaderCard } from "../../styles/styles";
import Icons from "../icons/Icons";

interface HeaderCardProps {
  headerContent: {
    title: string;
    content: string;
  };
}

export default class HeaderCard extends Component<HeaderCardProps> {
  render(): ReactNode {
    const { title,content} = this.props.headerContent;
    const logo = new Icons({});
    return (
      <StyledHeaderCard>
        {logo.mainlogo()}
        <h1>{title}</h1>
        <span>{content}</span>
      </StyledHeaderCard>
    );
  }
}
