/* eslint-disable react/prop-types */

import {ButtonContainer, ButtonTitle, ButtonIcon} from './style'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';

export function AddedCart(props){
    return(
        <ButtonContainer onClick={props.action}>
            <ButtonTitle>Produto adicionado ao carrinho</ButtonTitle>
            <ButtonIcon icon={faCircleCheck}/>
        </ButtonContainer>
    )
}