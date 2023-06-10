import { ButtonWrapper } from '../../banner/style'
import { BuyButton } from '../../buttons/btnBuyNow/BuyButton'

import { ContainerCard, Description, Featured, ImageWrapper,
         ProductTitle, ProductSubTitle, ProductDescription} from './style'

export function FeaturedCard() {
  return (
    <div>
      <BannerCard />
    </div>
  )
}

export function BannerCard() {
  return (
    <ContainerCard>
      <Featured>
        <Description>
          <ProductTitle>Nome do Produto</ProductTitle>
          <ProductSubTitle>Lorem ipsum dolor sit amet</ProductSubTitle>
          <ProductDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ProductDescription>
        </Description>
        <ButtonWrapper width={'80%'} height={'40px'}>
           <BuyButton />
        </ButtonWrapper>
        
      </Featured>
      <ImageWrapper>
        <img src="https://source.unsplash.com/260x333?cars" alt="imagem" />
      </ImageWrapper>
    </ContainerCard>
  )
}
