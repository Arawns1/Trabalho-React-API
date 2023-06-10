
import {ButtonContainer, ButtonTitle, ButtonIcon} from './style'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

export function AddCart(props){
    return(
        <ButtonContainer onClick={props.action}>
            <ButtonTitle>Adicionar ao Carrinho</ButtonTitle>
            <ButtonIcon icon={faCartPlus}/>
        </ButtonContainer>
    )
}