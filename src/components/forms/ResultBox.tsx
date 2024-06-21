import { Component, ReactNode } from "react";
import { StyledResultBox } from "../../styles/styles";

interface resultProps {
  state: {
    height: string;
    weight: string;
  };
}
export default class ResultBox extends Component<resultProps> {
  CalBmi(weight: number, height: number): number {
    return weight / Math.pow(height, 2);
  }

  render(): ReactNode {
    const { height, weight } = this.props.state;
    const bmiResult = this.CalBmi(parseInt(weight), parseInt(height));
    // height , weight define to cm

    return (
      <StyledResultBox>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis
          ea cupiditate reiciendis sunt quae neque quidem eos ipsum cumque
          nesciunt libero impedit repudiandae provident, doloribus fuga commodi
          autem eum!
        </span>{" "}
        <p>height : {height}</p>
        <p>weight: {weight}</p>
        <h2>{bmiResult}</h2>
      </StyledResultBox>
    );
  }
}
