import { CardInput } from '../../common/components/inputs/CardInput/CardInput.jsx';
import {PaymentContainer, PaymentInfo, PaymentInputs, OrderSumary, PaymentTitle, 
        SafeIcon, PaymentHeader, PaymentTinyInputs, ButtonWrapper, SumaryTitle,
        SumaryTotalCard, TotalTitle, TotalValue, SumaryList, PaymentWrapper} from './style.js'
import {PayButton} from '../../common/components/buttons/btnPayNow/PayButton.jsx'
import {faLock} from '@fortawesome/free-solid-svg-icons';
import { SumaryCard } from '../../common/components/cards/sumaryCard/SumaryCard.jsx';
import { useEffect } from 'react';
import { getItem } from "../../services/LocalStorage.js";
import { useState } from 'react';

export function PaymentPage(){

    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(getItem('carrinho'))
    }, [])


    return(
        <PaymentWrapper>
            <PaymentContainer>
            <PaymentInfo>
                <PaymentHeader>
                    <PaymentTitle>Pagamento</PaymentTitle>
                    <SafeIcon icon={faLock}/>
                </PaymentHeader>
                <PaymentInputs>
                    <CardInput label='Nome do titular' placeholder='Nome completo' required/>
                    <CardInput label='Número do cartão' maxLength={'16'} placeholder="0000.0000.0000.0000" required/>
                    <PaymentTinyInputs>
                        <CardInput label='Data de Expiração' maxLength={'7'} placeholder='MM / YYYY' required/>
                        <CardInput label='CVV' placeholder='000' maxLength={'3'} required/>
                    </PaymentTinyInputs>
                </PaymentInputs>
                <ButtonWrapper>
                    <PayButton/>
                </ButtonWrapper>
            </PaymentInfo>
            <OrderSumary>
                <SumaryTitle>Resumo do Pedido</SumaryTitle>
                <SumaryList>
                    {
                        cart.map(item => {
                            return (
                                <SumaryCard key={cart.indexOf(item)} nome={item.nome} valor={item.preco} quantidade={item.quantidade}></SumaryCard>
                            )
                           
                        })
                    }
                </SumaryList>
                
                <SumaryTotalCard>
                    <TotalTitle>Valor Total</TotalTitle>
                    <TotalValue>R$ {cart.reduce((acc, current) => {return acc + (current.preco*current.quantidade);}, 0).toFixed(2)}</TotalValue>
                </SumaryTotalCard>
            </OrderSumary>
        </PaymentContainer>
        </PaymentWrapper>
    )
}