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
  isOptionMetricSelected: boolean;
}

export default class BmiForm extends Component<BmiFormProps, RadioOptionState> {
  constructor(props: BmiFormProps) {
    super(props);
    this.state = {
      selectedOption: null,
      isOptionMetricSelected: false,
    };
  }

  handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value;
    const isOptionMetricSelected =
      selectedOption === this.props.bmiContent.optionA;
    this.setState({ selectedOption, isOptionMetricSelected });
  };

  render(): ReactNode {
    const { title, optionA, optionB } = this.props.bmiContent;
    const { selectedOption, isOptionMetricSelected } = this.state;
    const bmiContents = this.props.bmiContent;
    return (
      <StyledBmiForm>
        <h2>{title}</h2>
        <RadioBox>
          <div>
            <input
              type="radio"
              name="bmiOption"
              id={optionA}
              value={optionA}
              checked={selectedOption === optionA}
              onChange={this.handleOptionChange}
            />
            <label htmlFor={optionA}>{optionA}</label>
          </div>
          <div>
            <input
              type="radio"
              name="bmiOption"
              id={optionB}
              value={optionB}
              checked={selectedOption === optionB}
              onChange={this.handleOptionChange}
            />
            <label htmlFor={optionB}>{optionB}</label>
          </div>
        </RadioBox>
        {isOptionMetricSelected ? (
          <MetricForm bmiContent={bmiContents} />
        ) : (
          <ImprerialForm bmiContent={bmiContents} />
        )}
      </StyledBmiForm>
    );
  }
}
