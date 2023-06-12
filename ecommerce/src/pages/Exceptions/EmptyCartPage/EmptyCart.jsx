
import { Link } from 'react-router-dom'
import {EmptyCartContainer,EmptyCartContent, EmptyCartImage, EmptyCartTitle} from './style.js'
import { BackButton } from '../../../common/components/buttons/btnBack/BackButton.jsx'

export function EmptyCartPage() {
    return(
        <EmptyCartContainer>
            <EmptyCartContent>
                <EmptyCartImage src="https://source.unsplash.com/300x200?dog"></EmptyCartImage>
                <EmptyCartTitle>Opa, parece que seu carrinho ainda está vazio :(</EmptyCartTitle>
            </EmptyCartContent>
           <Link to='/'><BackButton title={'Voltar as compras'}/></Link> 
        </EmptyCartContainer>
    )
}