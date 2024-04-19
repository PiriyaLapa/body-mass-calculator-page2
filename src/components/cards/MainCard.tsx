import * as React from 'react';

export interface MainCardProps{

}


export default class MainCard extends React.Component<MainCardProps> {
  constructor(props: MainCardProps) {
    super(props);

    this.state = {
    }
  }

  public render(){
    return (
      <StyledMainCard>
      </StyledMainCard>
    );
  }
}
