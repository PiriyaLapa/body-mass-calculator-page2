import { ChangeEvent, Component, ReactNode } from "react";
import { StyledMetricForm } from "../../styles/styles";
import ResultBox from "./ResultBox";
import { BmiFormProps } from "./BmiForm";

interface MetricFormState {
  height: string;
  weight: string;
  bmi: number | null;
}
export default class MetricForm extends Component<
  BmiFormProps,
  MetricFormState
> {
  constructor(props: BmiFormProps) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      bmi: null,
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
  };

  render(): ReactNode {
    const { height, weight } = this.props.bmiContent;
    return (
      <StyledMetricForm>
        <h2>Metric From</h2>
        <label htmlFor="height">{height}</label>
        <input
          type="text"
          name="height"
          id="height"
          value={height}
          onChange={this.handleInputChange}
        />
        <label htmlFor="weight">{weight}</label>
        <input
          type="text"
          name="weight"
          id="weight"
          value={weight}
          onChange={this.handleInputChange}
        />
        <ResultBox />
      </StyledMetricForm>
    );
  }
}
