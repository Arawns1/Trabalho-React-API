/* eslint-disable react/prop-types */
import { FeaturedCard } from '../../components/cards/featuredCard/FeaturedCard.jsx'
import './style.css'

export function FeaturedProducts(props) {
  return (
    <div className="featured-cards">
      <h3 id="featured-card-title">Produtos em Destaque</h3>
      <div className="featured-cards-container">
        <FeaturedCard numero={34} product={props.products} />
        <FeaturedCard numero={59} product={props.products} />
      </div>
    </div>
  );
}
