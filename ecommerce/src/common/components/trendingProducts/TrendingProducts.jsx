import { TrendingCard } from '../cards/trendingCard/TrendingCard.jsx'

import './style.css'

export function TrendingProdutcs() {
  return(
    <div>
      <h3>Produtos em alta</h3>
      <div className='dpGrid'>
        <TrendingCard/>
        <TrendingCard/>
        <TrendingCard/>
        <TrendingCard/>
      </div>
    </div>
  )
}