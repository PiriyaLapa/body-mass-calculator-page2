import { ChangeEvent, Component, KeyboardEvent, ReactNode } from "react";
import { StyledMetricForm } from "../../styles/styles";
import ResultBox from "./ResultBox";
import { BmiFormProps } from "./BmiForm";

interface Measurements {
  height: string;
  weight: string;
}

export default class MetricForm extends Component<BmiFormProps, Measurements> {
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
    } as unknown as Measurements);
  };

  handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.logValue();
    }
  };

  logValue = () => {
    console.log('Height:', this.state.height);
    console.log('Weight:', this.state.weight);
  };

  render(): ReactNode {
    // const measurements = {
    //   height: Number(height),
    //   weight: Number(weight)
    // };

    return (
      <StyledMetricForm>
        <h2>Metric Form</h2>
        <label htmlFor="height">Height</label>
        <input
          type="text"
          name="height"
          id="height"
          value={this.state.height}
          onChange={this.handleChangeInput}
          onKeyDown={this.handleKeyPress}
        />
        <label htmlFor="weight">Weight</label>
        <input
          type="text"
          name="weight"
          id="weight"
          value={this.state.weight}
          onChange={this.handleChangeInput}
          onKeyDown={this.handleKeyPress}
        />
        {/* <ResultBox measurements={measurements} /> */}
        <ResultBox />
        
      </StyledMetricForm>
    );
  }
}