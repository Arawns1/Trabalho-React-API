/* eslint-disable react/prop-types */
import { ProductCard, ProductInfos, ProductImage, ImageWrapper } from './style'
import { AddCart } from '../../buttons/btnAddCart/AddCart';
import { AddedCart } from '../../buttons/btnItemAdded/AddedCart';
import { setItem } from '../../../../services/LocalStorage'
import { useCart } from '../../../hooks/useCart';

export function TrendingCard(props) {

  const { cart, setCart } = useCart();

  function handleClick(obj) {
    const carrinhoFiltered = { ...obj }
    delete carrinhoFiltered.cart

    const element = cart.find((e) => e.nome === carrinhoFiltered.nome)
    if (element) {
      const arrFilter = cart.filter((e) => e.nome !== carrinhoFiltered.nome)
      setCart(arrFilter)
      setItem("carrinho", arrFilter)
    }
    else {
      setCart([...cart, carrinhoFiltered]);
      setItem("carrinho", [...cart, carrinhoFiltered])
    }
  }

  return (

    <div>
      <ProductCard>
        <ImageWrapper>

          <ProductImage src={props.product.url_imagem} alt="imagem do produto" />
        </ImageWrapper>
        <ProductInfos >
          <span>{props.product.nome}</span>
          <p>R${props.product.valor_unitario}</p>
        </ProductInfos>

        <div className="bottomProduct">
          {
            cart.some((itemCart) => itemCart.nome === props.product.nome) ? (
              <AddedCart action={() => { handleClick(props.product) }} />
            ) : (
              <AddCart action={() => { handleClick(props.product) }} />
            )
          }
        </div>
      </ProductCard>
    </div>
  )
}