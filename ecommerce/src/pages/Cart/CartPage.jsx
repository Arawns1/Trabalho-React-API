import { BackButton } from "../../common/components/buttons/btnBack/BackButton";
import { PayButton } from "../../common/components/buttons/btnPayment/PayButton";
import { CardValortotal } from "../../common/components/cards/cardvalortotal/cardvalortotal";
import { ItemCarrinho } from "../../common/components/itemCarrinho/itemCarrinho";
import { CartList, CartContainer, CartTitle, CardActions} from "./style";
import { useState } from "react";

export function CartPage() {
    const [precoFinal, setPrecoFinal] = useState(20.0);

    const updateFinalPrice = (valor) => {
        setPrecoFinal(prevPrecoFinal => prevPrecoFinal + valor);
      };
      
    return (
        <CartContainer>
            <CartTitle>Carrinho</CartTitle>
            <CartList>
                <ItemCarrinho updateFinalPrice = {updateFinalPrice}/>
                <ItemCarrinho updateFinalPrice = {updateFinalPrice}/>
                <ItemCarrinho updateFinalPrice = {updateFinalPrice}/>
            </CartList>
            <CardValortotal totalValue={precoFinal}/>
            <CardActions>
                <BackButton title={'Voltar as compras'}/>
                <PayButton/>
            </CardActions>
        </CartContainer>
    )
}