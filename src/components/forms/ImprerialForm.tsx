import { Component, ReactNode } from "react";
import { StyledImprerialForm } from "../../styles/styles";
import ResultBox from "./ResultBox";
import { BmiFormProps } from "./BmiForm";

export default class ImprerialForm extends Component<BmiFormProps> {
  render(): ReactNode {
    const { height, weight } = this.props.bmiContent;
    return (
      <StyledImprerialForm>
      <h2>Imperial Form</h2>
        <label htmlFor="height">{height} (in inches):</label>
        <input type="text" name="height" id="height" />
        <label htmlFor="weight">{weight}(in pounds):</label>
        <input type="text" name="weight" id="weight" />
        <ResultBox />
      </StyledImprerialForm>
    );
  }
}
