// import {
//   ChangeEvent,
//   Component,
//   FormEvent,
//   KeyboardEvent,
//   ReactNode,
// } from "react";
// import { StyledInputMetrix, StyledMetricForm } from "../../styles/styles";
// import ResultBox from "./ResultBox"; // Uncomment this if you need ResultBox
// import { BmiFormProps } from "./BmiForm";

// interface MetricFormState {
//   height: string;
//   weight: string;
// }

// export default class MetricForm extends Component<
//   BmiFormProps,
//   MetricFormState
// > {
//   constructor(props: BmiFormProps) {
//     super(props);
//     this.state = {
//       height: "",
//       weight: "",
//     };
//   }

//   handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;

//     // Format height value to inclde 'cm'
//     let formattedValue = value;
//     if (name === 'height') {
//       formattedValue = value.split("cm").join("");
//       if(!formattedValue.endsWith("cm")){
//         formattedValue = `${formattedValue}cm`;
//       }
//     }


//     this.setState({
//       [name]: value,
//     } as unknown as MetricFormState);
//   };

//   handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevent form submission
//       this.logValue();
//     }
//   };

//   handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); // Prevent default form submission
//     this.logValue();
//   };

//   logValue = () => {
//     // const heightNumber = this.convertToNumber(height);
//     // const weightNumber = this.convertToNumber(weight);
//     console.log("Height:", this.state.height);
//     console.log("Weight:", this.state.weight);
//   };

//   convertToNumber = (value: string): number | null => {
//     const number = parseInt(value);
//     return isNaN(number) ? null : number;
//   };

//   render(): ReactNode {
//     const { height, weight } = this.state;
//     return (
//       <StyledMetricForm onSubmit={this.handleSubmit}>
//         {/* <h2>Metric Form</h2> */}
//         <label htmlFor="height">Height</label>
//         <StyledInputMetrix 
//           type="text"
//           name="height"
//           id="height"
//           value={height}
//           onChange={this.handleChangeInput}
//           onKeyDown={this.handleKeyPress}
//         />
//         <label htmlFor="weight">Weight</label>
//         <StyledInputMetrix 
//           type="text"
//           name="weight"
//           id="weight"
//           value={weight}
//           onChange={this.handleChangeInput}
//           onKeyDown={this.handleKeyPress}
//         />
//         <ResultBox state={this.state} />
//       </StyledMetricForm>
//     );
//   }
// }
import {
  ChangeEvent,
  Component,
  FormEvent,
  KeyboardEvent,
  ReactNode,
} from "react";
import styled from "styled-components";
import { StyledInputMetrix, StyledMetricForm } from "../../styles/styles";
import ResultBox from "./ResultBox"; // Uncomment this if you need ResultBox
import { BmiFormProps } from "./BmiForm";

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const UnitSpan = styled.span`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #aaa; /* Placeholder color */
`;

interface MetricFormState {
  height: string;
  weight: string;
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
    console.log("Height:", this.state.height);
    console.log("Weight:", this.state.weight);
  };

  render(): ReactNode {
    const { height, weight } = this.state;
    return (
      <StyledMetricForm onSubmit={this.handleSubmit}>
        <label htmlFor="height">Height</label>
        <InputWrapper>
          <StyledInputMetrix 
            type="text"
            name="height"
            id="height"
            value={height}
            onChange={this.handleChangeInput}
            onKeyDown={this.handleKeyPress}
            style={{ paddingRight: "30px" }} // Add space for unit
          />
          <UnitSpan>cm</UnitSpan>
        </InputWrapper>
        <label htmlFor="weight">Weight</label>
        <InputWrapper>
          <StyledInputMetrix 
            type="text"
            name="weight"
            id="weight"
            value={weight}
            onChange={this.handleChangeInput}
            onKeyDown={this.handleKeyPress}
            style={{ paddingRight: "30px" }} // Add space for unit
          />
          <UnitSpan>kg</UnitSpan>
        </InputWrapper>
        <ResultBox state={this.state} />
      </StyledMetricForm>
    );
  }
}
