import styled from "styled-components";

export const ContainerCard = styled.div `
  display: flex;
  flex-direction: row;
  width:43vw;
  height: 300px;
  background-color: #363638;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.cardsAndSubBG};
  border-radius: 12px;
  box-shadow: 25px 18px 97px -44px rgba(0,0,0,0.75);
  justify-content: space-between;
    @media (max-width: 768px) {
      height: 400px;
      place-items: center;
      flex-direction: column-reverse;
    }
`

export const Featured = styled.div `
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 20px;
  max-width: 600px;
  padding: 20px;
  @media (max-width: 768px) {
    gap: 10px;
    place-items: center;
    padding: 10px;
  }
`
export const Description = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  @media (max-width: 768px) {
    gap: 4px;
    text-align: center;
    place-items: center;
    padding: 10px;
  }
`

export const ProductTitle =  styled.h3`
  color: ${({theme}) => theme.colors.titles};
  
`
export const ProductSubTitle = styled.h4`
  color: ${({theme}) => theme.colors.clearText};
`

export const ProductDescription = styled.p`
  font-size: 16px;
  @media (max-width: 768px) {
        display: none;
      }
 `

export const ImageWrapper = styled.div`
      
  img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 0px 12px 12px 0px;

      @media (max-width: 768px) {
        border-radius: 12px 12px 0px 0px;
      }
    }

    @media (max-width: 768px) {
      object-fit: cover;
      object-position: center;
      height: 50%;
      width: 100%;
      flex-direction: column-reverse;
    }
   
`