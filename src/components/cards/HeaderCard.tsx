import { Component, ReactNode } from "react";
import { StyledHeaderCard } from "../../styles/styles";
import MainLogo from "../icons/MainLogo";

interface HeaderCardProps {
  headerContent: {
    title: string;
    content: string;
  };
}

export default class HeaderCard extends Component<HeaderCardProps> {
  render(): ReactNode {
    const { title,content} = this.props.headerContent;
    return (
      <StyledHeaderCard>
        <MainLogo />
        <h1>{title}</h1>
        <span>{content}</span>
      </StyledHeaderCard>
    );
  }
}
