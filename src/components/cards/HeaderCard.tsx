import {Component,ReactNode} from 'react';

interface HeaderCardProps{
    headerContent: {
    title:string;
    content:string;
    }
}
export default class HeaderCard extends Component<HeaderCardProps>{
    render():ReactNode{
        const {header,content} = this.props.headerContent;
        return <StyledHeaderCard>
            <span></span>
        </StyledHeaderCard>
    }
} 