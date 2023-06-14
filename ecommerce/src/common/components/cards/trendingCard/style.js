import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.cardsAndSubBG};
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  gap: 20px;
  box-shadow: 25px 18px 97px -44px rgba(0,0,0,0.75);
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit:contain;
    aspect-ratio: 4/3;
  }
`

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 0px;

  span {
    font-size: 18px;
    font-weight: bold;
  }

`

export const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
`
export const ProductImage = styled.img`
  width: 100%;
  height: 100%x;
`