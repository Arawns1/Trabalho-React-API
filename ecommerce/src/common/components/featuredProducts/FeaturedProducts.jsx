import { FeaturedCard } from '../../components/cards/featuredCard/FeaturedCard.jsx'
import './style.css'

export function FeaturedProducts() {
  return(
    <div>
      <h3>Produtos em Destaque</h3>
        <div className="fpGrid">
        <FeaturedCard/>
        <FeaturedCard/>
      </div>
    </div>
  )
}