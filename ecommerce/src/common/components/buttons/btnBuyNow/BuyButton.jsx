/* eslint-disable react/prop-types */

import {ButtonContainer, ButtonTitle, ButtonIcon} from './style'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { setItem } from '../../../../services/LocalStorage'
import { useCart } from '../../../hooks/useCart'

export function BuyButton(props){
    let navigate = useNavigate();
    const {cart, setCart} = useCart();

    function handleClick(obj) {
        const carrinhoFiltered = { ...obj }
        delete carrinhoFiltered.cart
    
        const element = cart.find((e) => e.nome === carrinhoFiltered.nome)
        if (!element) {
            setCart([...cart, carrinhoFiltered]);
            setItem("carrinho", [...cart, carrinhoFiltered])
        }

        navigate('/carrinho')
      }

    return(
        <ButtonContainer onClick={() => handleClick(props.product)}>
            <ButtonTitle>Comprar Agora</ButtonTitle>
            <ButtonIcon icon={faBagShopping}/>
        </ButtonContainer>
    )
}