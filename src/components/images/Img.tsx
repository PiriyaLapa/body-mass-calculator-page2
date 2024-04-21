import * as React from "react";
import { StyledImg } from "../../styles/styles";

export interface ImgProps{
  urlImg: string;
}

export default class Img extends React.Component<ImgProps> {
  constructor(props:ImgProps ) {
    super(props);
  }

  public render() {
    const img = this.props.urlImg;
    return <StyledImg src={img} />;
  }
}
