import { Component,ReactNode } from "react";
import { StyledResultBox } from "../../styles/styles";

export default class ResultBox extends Component{
    render():ReactNode{
        return <StyledResultBox>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis ea cupiditate reiciendis sunt quae neque quidem eos ipsum cumque nesciunt libero impedit repudiandae provident, doloribus fuga commodi autem eum!</span>
        </StyledResultBox>
    }
}