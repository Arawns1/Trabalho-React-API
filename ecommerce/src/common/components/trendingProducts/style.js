import styled from "styled-components";

export const TrendingProductsContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ProductsTitle = styled.h3 `
  font-size: 28px;
`

export const GridContainer = styled.div `
  width: 100%;
`

export const DpGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  column-gap: 80px;
  row-gap: 68px;
`