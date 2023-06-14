
import {ButtonContainer, ButtonTitle, ButtonIcon} from './style'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export function PayButton(props){
    return(
        <ButtonContainer onClick={props.action}>
            <ButtonTitle>Realizar Pagamento</ButtonTitle>
            <ButtonIcon icon={faArrowRight}/>
        </ButtonContainer>
    )
}