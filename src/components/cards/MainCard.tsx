import * as React from "react";
import { StyledMainCard } from "../../styles/styles";
import Img from "../images/Img";

export interface MainCardProps {
  maincardContent: {
    img: string;
    title: string;
    content: string;
  };
}

export default class MainCard extends React.Component<MainCardProps> {
  constructor(props: MainCardProps) {
    super(props);

    this.state = {};
  }
  public render() {
    const { img, title, content } = this.props.maincardContent;
    return (
      <StyledMainCard>
        <Img urlImg={img} />
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </StyledMainCard>
    );
  }
}
