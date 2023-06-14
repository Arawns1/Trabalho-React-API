import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.cardsAndSubBG};
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  gap: 10px;
  box-shadow: 25px 18px 97px -44px rgba(0,0,0,0.75);
  height: 300px;
`

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 12px;
  text-align: center;
  span {
    font-size: 1em;
    font-weight: bold;
  }

`

export const ImageWrapper = styled.div`
  width: 130px;
  height: 130px;
`
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`