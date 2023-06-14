import styled from "styled-components";

export const ItemCarrinhoContainer = styled.div `
  background-color: ${({theme}) => theme.colors.body};
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 100%;
`

export const InfoProduto = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: #fff;
  height: 60px;
  padding: 0px 20px;

  hr {
    align-self: stretch;
    margin: 10px 0px;
  }
`

export const ImageContainer = styled.div `
  width: 75px;
  height: 70px;
  object-fit: contain;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`