/* eslint-disable react/prop-types */

import {SumaryCardContainer, ItemQuantity, ItemName, ItemPrice, SumaryCardContent} from './style'

export function SumaryCard(props){
    return(
        <SumaryCardContainer>
            <SumaryCardContent>
                <ItemQuantity>{props.quantidade}x</ItemQuantity>
                <ItemName>{props.nome}</ItemName>
                <ItemPrice>R$ {props.valor}</ItemPrice>
            </SumaryCardContent>
        </SumaryCardContainer>
    )
}