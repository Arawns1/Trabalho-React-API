/* eslint-disable react/prop-types */
import { TrendingCard } from '../cards/trendingCard/TrendingCard.jsx'

import './style.css'

export function TrendingProducts(props) {

  const {products, cart, cartAction} = props;

  return(
    <div className='trending-products-container'>
      <h3 className='productsTitle'>Produtos em alta</h3>
      <div className='grid-container'>
        <div className='dpGrid'>
        {
          products.map(product =>{
          return(
            <TrendingCard nome={product.nome} 
                          preco={product.valor_unitario} 
                          cart={cart}
                          cartAction = {cartAction}
                          key={products.indexOf(product)}/>
          )})
            
        }
        </div>
      </div>
    </div>
  )
}