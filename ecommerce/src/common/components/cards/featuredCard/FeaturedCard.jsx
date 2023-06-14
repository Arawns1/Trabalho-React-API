/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ButtonWrapper } from '../../banner/style'

import {
  ContainerCard, Description, Featured, ImageWrapper,
  ProductTitle, ProductSubTitle, ProductDescription
} from './style'
import { useEffect } from 'react'

import { BuyButton } from '../../buttons/btnBuyNow/BuyButton'


export function FeaturedCard(props) {


  const [numero, setNumero] = useState(0)


  useEffect(() => {
    setNumero(props.numero)
  }, [])

  if (!props.product || !props.product[numero]) {
    return null;
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
           <BuyButton product={props.product[numero]}/>
        </ButtonWrapper>

      </Featured>
      <ImageWrapper >
        <img src={props.product[numero].url_imagem} alt="imagem" />
      </ImageWrapper>
    </ContainerCard>
  )
}