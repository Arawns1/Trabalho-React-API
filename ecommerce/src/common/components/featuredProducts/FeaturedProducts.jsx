/* eslint-disable react/prop-types */
import { FeaturedCard } from '../../components/cards/featuredCard/FeaturedCard.jsx'
import { FeatCard,
  FeaturedCardTitle,
  FeaturedCardContainer } from './style.js';

export function FeaturedProducts(props) {
  return (
    <div className="featured-cards">
      <h3 id="featured-card-title">Produtos em Destaque</h3>
      <div className="featured-cards-container">
        <FeaturedCard numero={0} product={props.products} />
        <FeaturedCard numero={2} product={props.products} />
      </div>
    </div>
  );
}
