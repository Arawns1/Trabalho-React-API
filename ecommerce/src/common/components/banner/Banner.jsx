import { BuyButton } from '../buttons/btnBuyNow/BuyButton.jsx'
import {BannerContainer, BannerInfo, BannerTitle, BannerSubTitle, 
        BannerDescription, InfoWrapper} from './style.js'

export function Banner(){
    return(
        <BannerContainer>
            <InfoWrapper>
                <BannerInfo>
                    <BannerTitle>Nome do Produto</BannerTitle>
                    <BannerSubTitle>Lorem ipsum dolor sit amet</BannerSubTitle>
                    <BannerDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni sint quam quos sit, harum impedit consequuntur minima tempora, neque repudiandae, ut ullam incidunt exercitationem temporibus sapiente voluptatum vitae eius!</BannerDescription>
                </BannerInfo>
                <BuyButton/>
            </InfoWrapper>
            <img src="https://source.unsplash.com/450x320?cute-animals" alt="Imagem do Produto" />
        </BannerContainer>
    )
}