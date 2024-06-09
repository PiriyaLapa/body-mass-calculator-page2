import { ChangeEvent, Component, KeyboardEvent, ReactNode } from "react";
import { StyledMetricForm } from "../../styles/styles";
import ResultBox from "./ResultBox";
import { BmiFormProps } from "./BmiForm";

interface MetricFormState {
  height: string;
  weight: string;
  // bmi: number | null;
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
    };
  }

  handleChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
      this.setState({
        height:event.target.value,
        weight:event.target.value
      }) 
  }

 handleKeyPress = (event:KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      this.logValue();
    }
  }

  logValue = () => {
    console.log('Height:',this.state.height);
    console.log('Weight:',this.state.weight);
  }

  render(): ReactNode {
    const { height, weight } = this.props.bmiContent;
    return (
      <StyledMetricForm>
        <h2>Metric From</h2>
        <label htmlFor="height">{height}</label>
        <input type="text" name="height" id="height" value={height} onChange={this.handleChangeInput} onKeyDown={this.handleKeyPress}/>
        <label htmlFor="weight">{weight}</label>
        <input type="text" name="weight" id="weight" value={weight} onChange={this.handleChangeInput} onKeyDown={this.handleKeyPress}/>
        <ResultBox />
      </StyledMetricForm>
    );
  }
}
