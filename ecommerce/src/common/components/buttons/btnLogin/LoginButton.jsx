
import {LoginButtonContainer, LoginButtonTitle, LoginButtonIcon} from './style'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export function LoginButton(){
    return(
        <LoginButtonContainer>
            <LoginButtonTitle>Faça login para continuar</LoginButtonTitle>
            <LoginButtonIcon icon={faArrowRight}/>
        </LoginButtonContainer>
    )
}