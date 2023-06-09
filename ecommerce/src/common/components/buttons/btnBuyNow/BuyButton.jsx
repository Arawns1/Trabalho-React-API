
import {ButtonContainer, ButtonTitle, ButtonIcon} from './style'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';

export function BuyButton(){
    return(
        <ButtonContainer>
            <ButtonTitle>Comprar Agora</ButtonTitle>
            <ButtonIcon icon={faBagShopping}/>
        </ButtonContainer>
    )
}