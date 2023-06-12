
import { Link } from 'react-router-dom'
import {NotFoundContainer,NotFoundContent, NotFoundImage, NotFoundTitle, Logo} from './style.js'
import { BackButton } from '../../../common/components/buttons/btnBack/BackButton.jsx'

export function NotFoundPage(){
    return(
        <NotFoundContainer>
            <Logo src="/assets/hex_tranparente.png"/>
            <NotFoundContent>
                <NotFoundImage src="https://source.unsplash.com/300x200?dog"></NotFoundImage>
                <NotFoundTitle>Opa, parece que você está perdido :(</NotFoundTitle>
            </NotFoundContent>
           <Link to='/'><BackButton title={'Me mostre o caminho'}/></Link> 
        </NotFoundContainer>
    )
}