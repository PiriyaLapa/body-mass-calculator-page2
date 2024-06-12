import { ChangeEvent, Component, ReactNode,KeyboardEvent } from "react";
import { StyledImprerialForm } from "../../styles/styles";
import ResultBox from "./ResultBox";
import { BmiFormProps } from "./BmiForm";

interface ImprerialState{
  height:string;
  weight:string;
  
}

export default class ImprerialForm extends Component<BmiFormProps,ImprerialState> {
  constructor(props: BmiFormProps) {
    super(props);
    this.state = {
      height:'',
      weight:''
    }
  }
  
  handleChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target;
    this.setState({
      [name]:value
    }as unknown as ImprerialState  )
  }
  
  handleKeyPress = (event:KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      event.preventDefault();
      this.logValue();
    } 
  }

  logValue = () =>{
    console.log("Height", this.state.height);
    console.log("Weight", this.state.weight);
  }

  render(): ReactNode {
    const { height, weight } = this.state;
    return (
      <StyledImprerialForm>
        <h2>Imperial Form</h2>
        <label htmlFor="height">height (in inches):</label>
        <input type="text" name="height" id="height" value={height} onChange={this.handleChangeInput}  onKeyDown={this.handleKeyPress} />
        <label htmlFor="weight">weight(in pounds):</label>
        <input type="text" name="weight" id="weight" value={weight} onChange={this.handleChangeInput} onKeyDown={this.handleKeyPress}/>
        <ResultBox />
      </StyledImprerialForm>
    );
  }
}
