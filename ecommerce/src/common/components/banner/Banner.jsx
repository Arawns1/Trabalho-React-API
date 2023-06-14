import { useEffect } from 'react'
import { BuyButton } from '../buttons/btnBuyNow/BuyButton.jsx'
import {BannerContainer, BannerInfo, BannerTitle, BannerSubTitle, 
        BannerDescription, InfoWrapper, ButtonWrapper} from './style.js'
import { api } from '../../../services/api.js'
import { useState } from 'react'

export function Banner(){
    const [product, setProduct] = useState();

    useEffect(() =>{
        async function fetchData(){
            const {data: product} = await api.get("/produtos/dto");
            setProduct(product[parseInt(Math.random() * product.length)])
        }
        fetchData();
    },[])
    
    if (!product) {
        return null; // Render loading state or fallback UI if product is not available
    }

    return(
        <BannerContainer>
            <InfoWrapper>
                <BannerInfo>
                    <BannerTitle>{product.nome}</BannerTitle>
                    <BannerSubTitle>{product.categoriaProdDto.nome}</BannerSubTitle>
                    <BannerDescription>{product.descricao}</BannerDescription>
                </BannerInfo>
                <ButtonWrapper width={'200px'} height={'50px'}>
                    <BuyButton product={product}/>

                </ButtonWrapper>
            </InfoWrapper>
            <img src={product.url_imagem} alt="Imagem do Produto" />
        </BannerContainer>
    )
}