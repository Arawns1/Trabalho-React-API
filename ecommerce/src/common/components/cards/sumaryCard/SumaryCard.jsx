
import {SumaryCardContainer, ItemQuantity, ItemName, ItemPrice, SumaryCardContent} from './style'

export function SumaryCard(){
    return(
        <SumaryCardContainer>
            <SumaryCardContent>
                <ItemQuantity>1x</ItemQuantity>
                <ItemName>Celular brabo</ItemName>
                <ItemPrice>R$ 20.00</ItemPrice>
            </SumaryCardContent>
        </SumaryCardContainer>
    )
}