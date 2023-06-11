import { ItemCarrinho } from "../../common/components/itemCarrinho/itemCarrinho";
import { CartList, CartContainer, CartTitle } from "./style";

export function CartPage() {
    return (
        <CartContainer>
            <CartTitle>Carrinho</CartTitle>

            <CartList>
                <ItemCarrinho />
                <ItemCarrinho />
                <ItemCarrinho />
            </CartList>

        </CartContainer>
    )
}