import { Component } from 'react'
import { StyledMainSection } from '../../styles/styles'
import { HeaderContent } from '../../apis/contentData'

interface MainSectionProps{
  dataApis:HeaderContent;
}
export default class MainSection extends Component<MainSectionProps> {
  render() {
    return (
      <StyledMainSection>
       <MainCard /> 
      </StyledMainSection>
    )
  }
}