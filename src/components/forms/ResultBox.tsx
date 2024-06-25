import { Component, ReactNode } from "react";
import { StyledResultBox } from "../../styles/styles";
import BmiCal from "../../helpers/BmiCal";

interface resultProps {
  state: {
    height: string;
    weight: string;
  };
}
export default class ResultBox extends Component<resultProps> {

  render(): ReactNode {
    const { height, weight } = this.props.state;
    const bmiCal = new BmiCal(parseInt(height), parseInt(weight));;
    const bmiResult = bmiCal.Metrix();
    const bmiStatus= bmiCal.GetHealthStatus(bmiResult);
    
    return (
      <StyledResultBox>
        <span>
          <h3>Your BMI</h3>
          <h1>{bmiResult}</h1>
          <p>Your BMI suggests you’re a healthy weight. Your ideal weight is between 9st 6lbs - 12st 10lbs.</p>
        </span>
        <p>height : {height}</p>
        <p>weight: {weight}</p>
        <h2>{bmiResult}</h2>
        <h2>{bmiStatus}</h2>
      </StyledResultBox>
    );
  }
}
