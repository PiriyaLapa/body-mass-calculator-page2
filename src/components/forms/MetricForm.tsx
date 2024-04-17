import { Component, ReactNode } from "react";
import { StyledMetricForm } from "../../styles/styles";

export default class MetricForm extends Component {
  render(): ReactNode {
    return (
      <StyledMetricForm>
        <label htmlFor="height">Height</label>
        <input type="text" name="height" id="height" />
        <label htmlFor="weight">Weight</label>
        <input type="text" name="weight" id="weight" />
      </StyledMetricForm>
    );
  }
}
