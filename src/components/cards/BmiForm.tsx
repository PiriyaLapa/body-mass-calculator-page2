import { Component, ReactNode } from "react";
import { RadioBox, StyledBmiForm } from "../../styles/styles";
import MetricForm from "../forms/MetricForm";
import ImprerialForm from "../forms/ImprerialForm";

interface BmiFormProps {
  bmiContent: {
    title: string;
    optionA: string;
    optionB: string;
    height: string;
    weight: string;
  };
}

export default class BmiForm extends Component<BmiFormProps> {
  render(): ReactNode {
    
    const { title, optionA } = this.props.bmiContent;
    return (
      <StyledBmiForm>
        <h2>{title}</h2>
        <RadioBox>
          <div>
            <input type="radio" name="metric" id="metric" />
            <label htmlFor="Matric">{optionA}</label>
          </div>
          <div>
            <input type="radio" name="imperial" id="imperial" />
            <label htmlFor="Imperial">{optionA}</label>
          </div>
        </RadioBox>
           <MetricForm /> 
           <ImprerialForm /> 
      </StyledBmiForm>
    );
  }
}
