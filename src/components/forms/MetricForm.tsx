import { ChangeEvent, Component, FormEvent, KeyboardEvent, ReactNode } from "react";
import { StyledMetricForm } from "../../styles/styles";
// import ResultBox from "./ResultBox"; // Uncomment this if you need ResultBox
import { BmiFormProps } from "./BmiForm";

interface MetricFormState {
  height: string;
  weight: string;
}

export default class MetricForm extends Component<BmiFormProps, MetricFormState> {
  constructor(props: BmiFormProps) {
    super(props);
    this.state = {
      height: "",
      weight: "",
    };
  }

  handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    } as unknown as MetricFormState);
  };

  handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      this.logValue();
    }
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    this.logValue();
  };

  logValue = () => {
    console.log('Height:', this.state.height);
    console.log('Weight:', this.state.weight);
  };

  render(): ReactNode {
    const { height, weight } = this.state;
    return (
      <StyledMetricForm onSubmit={this.handleSubmit}>
        <h2>Metric Form</h2>
        <label htmlFor="height">Height</label>
        <input
          type="text"
          name="height"
          id="height"
          value={height}
          onChange={this.handleChangeInput}
          onKeyDown={this.handleKeyPress}
        />
        <label htmlFor="weight">Weight</label>
        <input
          type="text"
          name="weight"
          id="weight"
          value={weight}
          onChange={this.handleChangeInput}
          onKeyDown={this.handleKeyPress}
        />
        {/* <button type="submit">Submit</button> */}
        {/* Uncomment the following line if you need ResultBox */}
        {/* <ResultBox measurements={{ height: Number(height), weight: Number(weight) }} /> */}
      </StyledMetricForm>
    );
  }
}
