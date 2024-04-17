import { Component, ReactNode } from "react";
import { RadioBox, StyledBmiForm } from "../../styles/styles";
import MetricForm from "./MetricForm";
import ImprerialForm from "./ImprerialForm";

export interface BmiFormProps {
  bmiContent: {
    title: string;
    optionA: string;
    optionB: string;
    height: string;
    weight: string;
  };
}

interface RadioOptionState {
  selectedOption: string | null;
  isOptionMetricSelected: string | null;
}

export default class BmiForm extends Component<BmiFormProps, RadioOptionState> {
  constructor(props: BmiFormProps) {
    super(props);
    this.state = {
      selectedOption: null,
      isOptionMetricSelected: null,
    };
  }
  render(): ReactNode {
    const { title, optionA } = this.props.bmiContent;
    const bmiContents = this.props.bmiContent;
    return (
      <StyledBmiForm>
        <h2>{title}</h2>
        <RadioBox>
          <div>
            <input
              type="radio"
              name="metric"
              id="metric"
              value="Metric"
              checked={selectedOption === metric}
              onChange={this.handleOptionChange}
            />
            <label htmlFor="Matric">{optionA}</label>
          </div>
          <div>
            <input
              type="radio"
              name="imperial"
              id="imperial"
              value="Imperial"
              checked={selectedOption === imperial}
              onChange={this.handleOptionChange}
            />
            <label htmlFor="Imperial">{optionA}</label>
          </div>
        </RadioBox>
        {isOptionMetricSelected !== null && isOptionMetricSelected ? (
          <MetricForm bmiContent={bmiContents} />
        ) : (
          <ImprerialForm bmiContent={bmiContents} />
        )}
        {/* <MetricForm bmiContent={bmiContents} />
        <ImprerialForm bmiContent={bmiContents} /> */}
      </StyledBmiForm>
    );
  }
}
