import { Component, ReactNode } from "react";
import { StyledMetricForm } from "../../styles/styles";
import ResultBox from "./ResultBox";
import { BmiFormProps } from "./BmiForm";

export default class MetricForm extends Component<BmiFormProps> {
  render(): ReactNode {
    const { height, weight } = this.props.bmiContent;
    return (
      <StyledMetricForm>
        <h2>Metric From</h2>
        <label htmlFor="height">{height}</label>
        <input type="text" name="height" id="height" />
        <label htmlFor="weight">{weight}</label>
        <input type="text" name="weight" id="weight" />
        <ResultBox />
      </StyledMetricForm>
    );
  }
}
