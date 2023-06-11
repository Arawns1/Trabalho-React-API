/* eslint-disable react/prop-types */

import {ButtonContainer, ButtonTitle, ButtonIcon} from './style'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export function BackButton(props){
    return(
        <ButtonContainer>
            <ButtonIcon icon={faArrowLeft}/>
            <ButtonTitle>{props.title}</ButtonTitle>
        </ButtonContainer>
    )
}