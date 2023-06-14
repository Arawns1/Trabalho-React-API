/* eslint-disable react/prop-types */
import { TrendingCard } from '../cards/trendingCard/TrendingCard.jsx'
import { TrendingProductsContainer, ProductsTitle, GridContainer, DpGrid } from './style.js';

export function TrendingProducts(props) {

  const {products} = props;
  return(
    <TrendingProductsContainer>
      <ProductsTitle>Produtos em alta</ProductsTitle>
      <GridContainer>
        <DpGrid>
        {
          products.map(product =>{
          return(
            <TrendingCard nome={product.nome} 
                          preco={product.valor_unitario} 
                          key={products.indexOf(product)}
                          imagem={product.url_imagem}/>
          )
          
        })
            
        }
        </DpGrid>
      </GridContainer>
    </TrendingProductsContainer>
  )
}