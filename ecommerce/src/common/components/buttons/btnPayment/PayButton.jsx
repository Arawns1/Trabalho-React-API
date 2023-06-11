
import {ButtonContainer, ButtonTitle, ButtonIcon} from './style'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export function PayButton(){
    return(
        <ButtonContainer>
            <ButtonTitle>Realizar Pagamento</ButtonTitle>
            <ButtonIcon icon={faArrowRight}/>
        </ButtonContainer>
    )
}