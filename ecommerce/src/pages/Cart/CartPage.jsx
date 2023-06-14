import { BackButton } from "../../common/components/buttons/btnBack/BackButton";
import { PayButton } from "../../common/components/buttons/btnPayment/PayButton";
import { CardValortotal } from "../../common/components/cards/cardvalortotal/cardvalortotal";
import { ItemCarrinho } from "../../common/components/itemCarrinho/itemCarrinho";
import { CartList, CartContainer, CartTitle, CardActions } from "./style";
import { useState } from "react";
import { getItem, setItem } from "../../services/LocalStorage";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { EmptyCartPage } from "../Exceptions/EmptyCartPage/EmptyCart";
import { useCart } from "../../common/hooks/useCart";

export function CartPage() {
    const [precoFinal, setPrecoFinal] = useState(0.0);
    const [quantidades, setQuantidades] = useState({});

    const {cart, setCart} = useCart();

    useEffect(() => {
        // let cartItems = getItem('carrinho')

        // if (!cartItems) {
        //     cartItems = [];
        // }

        // setCart(cartItems)

        cart.map(item => {
            updateFinalPrice(item.preco)
        })

    }, [])

    function handleCart() {
        const carrinho = getItem('carrinho');
        const novoCarrinho = carrinho.map(item => {
            item.quantidade = 1;
            for (const prodQuantidade in quantidades) {
                if (item.nome === prodQuantidade) {
                    item.quantidade = quantidades[prodQuantidade]
                    break; // encontrou parar o loop
                }
            }
            return item;
        });
        setItem('carrinho', novoCarrinho)
    }

    const updateFinalPrice = (valor) => {
        setPrecoFinal(prevPrecoFinal => prevPrecoFinal + valor);
    };

    const updateQuantidade = (nome, quantidade) => {
        setQuantidades(prevQuantidades => ({ ...prevQuantidades, [nome]: quantidade }));
    };


    return (
        <CartContainer>
            {
                cart.length > 0 ?
                    (
                        <>
                            <CartTitle>Carrinho</CartTitle>
                            <CartList>
                                {cart.map(item => {
                                    return (
                                        <ItemCarrinho key={item.nome}
                                            nome={item.nome}
                                            valor={item.preco}
                                            imagem={item.imagem}
                                            quantidade={quantidades[item.nome] || 1}
                                            updateFinalPrice={updateFinalPrice}
                                            updateQuantidade={updateQuantidade} />

                                    )
                                })}
                            </CartList>
                            <CardValortotal totalValue={precoFinal} />
                            <CardActions>
                                <Link to='/'>
                                    <BackButton title={'Voltar as compras'} />
                                </Link>
                                <Link to='/pagamento'>
                                    <PayButton action={handleCart} />
                                </Link>

                            </CardActions>
                        </>
                    )
                    :
                    <EmptyCartPage/>
            }

        </CartContainer>
    )
}