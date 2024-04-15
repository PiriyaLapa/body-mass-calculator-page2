import { Component, ReactNode } from "react";
import { RadioBox, StyledBmiForm } from "../../styles/styles";

interface BmiFormProps {
  bmiContent: {
    title: string;
    optionA: string;
    optionB: string;
    height: string;
    weight: string;
  };
}

export default class BmiForm extends Component<BmiFormProps> {
  render(): ReactNode {
    const { title, optionA, optionB, weight, height } = this.props.bmiContent;
    return (
      <StyledBmiForm>
        <h2>{title}</h2>
        <RadioBox>
          <div>
            <input type="radio" name="matric" id="matric" />
            <label htmlFor="Matric">{optionA}</label>
          </div>
          <div>
            <input type="radio" name="imperial" id="imperial" />
            <label htmlFor="Imperial">{optionA}</label>
          </div>
        </RadioBox>
        <span>{optionA}</span>
        <span>{optionB}</span>
        <span>{weight}</span>
        <span>{height}</span>
      </StyledBmiForm>
    );
  }
}
