/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ButtonWrapper } from '../../banner/style'

import {
  ContainerCard, Description, Featured, ImageWrapper,
  ProductTitle, ProductSubTitle, ProductDescription
} from './style'
import { useEffect } from 'react'
import { setItem } from '../../../../services/LocalStorage'
import { AddedCart } from '../../buttons/btnItemAdded/AddedCart'
import { AddCart } from '../../buttons/btnAddCart/AddCart'
import { useCart } from '../../../hooks/useCart'


export function FeaturedCard(props) {
  const [numero, setNumero] = useState(0)

  const {cart, setCart} = useCart();

  useEffect(() => {
    setNumero(props.numero)
  }, [])

  if (!props.product || !props.product[numero]) {
    return null;
  }

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
    <ContainerCard>
      <Featured>
        <Description>
          <ProductTitle>{props.product[numero].nome}</ProductTitle>
          <ProductSubTitle>{props.product[numero].categoriaProdDto.nome}</ProductSubTitle>
          <ProductDescription>{props.product[numero].descricao}</ProductDescription>
        </Description>
        <ButtonWrapper width={'80%'} height={'40px'}>
          {/* <BuyButton /> */}
          <div className="btn-Product">
            {
              cart.some((itemCart) => itemCart.nome === props.nome) ? (
                <AddedCart action={() => { handleClick(props) }} />
              ) : (
                <AddCart action={() => { handleClick(props) }} />
              )
            }
          </div>
        </ButtonWrapper>

      </Featured>
      <ImageWrapper>
        <img src={props.product[numero].url_imagem} alt="imagem" />
      </ImageWrapper>
    </ContainerCard>
  )
}