
import {ButtonContainer, ButtonTitle, ButtonIcon} from './style'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';

export function AddCart(){
    return(
        <ButtonContainer>
            <ButtonTitle>Adicionar ao Carrinho</ButtonTitle>
            <ButtonIcon icon={faCirclePlus}/>
        </ButtonContainer>
    )
}