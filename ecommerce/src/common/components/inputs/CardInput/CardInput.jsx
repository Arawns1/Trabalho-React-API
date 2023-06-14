/* eslint-disable react/prop-types */

import {InputContainer, StyledInput, StyledLabel} from './style'

export function CardInput (props) {
    return(
        <InputContainer>
            <StyledLabel>{props.label}</StyledLabel>
            <StyledInput onChange={props.action} type={props.type} maxLength={props.maxLength} placeholder={props.placeholder} required={props.required}/>
        </InputContainer>
    )
}