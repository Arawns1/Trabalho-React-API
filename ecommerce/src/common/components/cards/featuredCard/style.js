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
  img {
    height: 100%;
    object-fit: contain;
    border-radius: 0px 12px 12px 0px;
  }
`

export const Featured = styled.div `
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 20px;
  width: 70%;
  padding: 20px;
 
`
export const Description = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  gap: 8px;
`

export const ProductTitle =  styled.h3`
  color: ${({theme}) => theme.colors.titles};
  
`
export const ProductSubTitle = styled.h4`
  color: ${({theme}) => theme.colors.clearText};
`

export const ProductDescription = styled.p`
  font-size: 16px;
 `