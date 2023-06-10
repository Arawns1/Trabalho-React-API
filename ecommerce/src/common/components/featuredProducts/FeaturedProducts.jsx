import { FeaturedCard } from '../../components/cards/featuredCard/FeaturedCard.jsx'
import './style.css'

export function FeaturedProducts() {
  return(
    <div className='featured-cards'>
      <h3 id='featured-card-title'>Produtos em Destaque</h3>
        <div className="featured-cards-container">
          <FeaturedCard/>
          <FeaturedCard/>
        </div>
    </div>
  )
}