import { BackButton } from "../../common/components/buttons/btnBack/BackButton";
import { PayButton } from "../../common/components/buttons/btnPayment/PayButton";
import { CardValortotal } from "../../common/components/cards/cardvalortotal/cardvalortotal";
import { ItemCarrinho } from "../../common/components/itemCarrinho/itemCarrinho";
import { CartList, CartContainer, CartTitle, CardActions} from "./style";
import { useState } from "react";
import { getItem } from "../../services/LocalStorage";
import { useEffect } from "react";

export function CartPage() {
    const [precoFinal, setPrecoFinal] = useState(0.0);

    const updateFinalPrice = (valor) => {
        setPrecoFinal(prevPrecoFinal => prevPrecoFinal + valor);
      };
      const cart = getItem('carrinho')

      useEffect(() => {
        console.log('i fire once');
        cart.map(item => {
            updateFinalPrice(item.preco)
        })
      }, [])

    return (
        <CartContainer>
            <CartTitle>Carrinho</CartTitle>
            <CartList>
                {
                    cart.map(item => {
                        return(
                            <ItemCarrinho key={cart.indexOf(item)} nome={item.nome} valor={item.preco} updateFinalPrice = {updateFinalPrice}/>
                        )
                    })
                }
            </CartList>
            <CardValortotal totalValue={precoFinal}/>
            <CardActions>
                <BackButton title={'Voltar as compras'}/>
                <PayButton/>
            </CardActions>
        </CartContainer>
    )
}