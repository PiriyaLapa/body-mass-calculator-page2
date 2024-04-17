import {Component,ReactNode} from 'react';
import { StyledImprerialForm } from '../../styles/styles';

export  default class ImprerialForm extends Component{
    render():ReactNode{
        return <StyledImprerialForm>
            <label htmlFor="">height</label>
            <input type="text" name="height" id="height" />
            <label htmlFor="">height</label>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
        </StyledImprerialForm>
    }
} 