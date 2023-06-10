/* eslint-disable react/prop-types */
import { TrendingCard } from '../cards/trendingCard/TrendingCard.jsx'

import './style.css'

export function TrendingProdutcs(props) {

  const {products} = props;

  return(
    <div className='trending-products-container'>
      <h3 className='productsTitle'>Produtos em alta</h3>
      <div className='grid-container'>
        <div className='dpGrid'>
        {
          products.map(product =>{
          return(
            <TrendingCard nome={product.nome} preco={product.valor_unitario} key={products.indexOf(product)}/>
          )})
            
        }
        </div>
      </div>
    </div>
  )
}