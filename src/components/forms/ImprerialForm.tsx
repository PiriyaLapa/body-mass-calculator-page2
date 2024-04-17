import { Component, ReactNode } from "react";
import { StyledImprerialForm } from "../../styles/styles";
import ResultBox from "./ResultBox";
import { BmiFormProps } from "./BmiForm";

export default class ImprerialForm extends Component<BmiFormProps> {
  render(): ReactNode {
    const { height, weight } = this.props.bmiContent;
    return (
      <StyledImprerialForm>
        <h2>Imperaili From</h2>
        <label htmlFor="height">{height}</label>
        <input type="text" name="height" id="height" />
          <label htmlFor="weight">{weight}</label>
          <input type="text" name="input1" id="input1" />
          <input type="text" name="input2" id="input2" />
          <input type="text" name="input3" id="input3" />
        <ResultBox />
      </StyledImprerialForm>
    );
  }
}
