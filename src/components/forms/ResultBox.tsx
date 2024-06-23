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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis
          ea cupiditate reiciendis sunt quae neque quidem eos ipsum cumque
          nesciunt libero impedit repudiandae provident, doloribus fuga commodi
          autem eum!
        </span>
        <p>height : {height}</p>
        <p>weight: {weight}</p>
        <h2>{bmiResult}</h2>
        <h2>{bmiStatus}</h2>
      </StyledResultBox>
    );
  }
}
