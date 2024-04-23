import { Component } from "react";
import { IFooterMainCard } from "../../apis/contentData";
interface FooterMainCardProps {
footerMainContent:IFooterMainCard;
}
export default class FooterMainCard extends Component<FooterMainCardProps> {
    render() {
    const {title,content} = this.props.footerMainContent;
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}
