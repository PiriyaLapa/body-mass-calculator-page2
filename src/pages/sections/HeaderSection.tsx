import {Component,ReactNode} from 'react';
import { StyledHeaderSection } from '../../styles/styles';
import Icons from '../../components/icons/Icons';

export default class HeaderSection extends Component{
    render():ReactNode{
       const icons= new Icons({}); 
        return <StyledHeaderSection>
            {icons.mainlogo()}
            <h1>HeaderSection</h1>
        </StyledHeaderSection>
    }
} 
 