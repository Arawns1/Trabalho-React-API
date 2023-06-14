import styled from "styled-components";

export const ItemCarrinhoContainer = styled.div `
  background-color: ${({theme}) => theme.colors.cardsAndSubBG};
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

export const NomeWrapper = styled.div `
  width: 200px;
  text-align: center;
`

export const PrecoWrapper = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 120px;
`

export const NomeProduto = styled.p `
  margin-bottom: 0 px;
  font-size: large;
`

export const PrecoProduto = styled.p `
  margin-bottom: 0 px;
  font-size: 1.2em;
  font-weight: 700;
  white-space: nowrap;
`

export const QuantidadeProduto = styled.p `
  margin-bottom: 0 px;
  font-size: large;
`

export const FormatButtons = styled.button `
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const BtnQuantidade = styled.button `
  all: unset;
  background-color: rgba(33, 33, 36, 0.94);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  font-size: 1.2em;
  font-weight: 600;
  :hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`