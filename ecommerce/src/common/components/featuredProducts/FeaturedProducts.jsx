import { FeaturedCard } from '../../components/cards/featuredCard/FeaturedCard.jsx'
import './style.css'

export function FeaturedProducts(props) {
  
  function sortNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let random = props.products.length;
  
  return (
    <div className="featured-cards">
      <h3 id="featured-card-title">Produtos em Destaque</h3>
      <div className="featured-cards-container">
        <FeaturedCard numero={sortNumber(0, random)} product={props.products} />
        <FeaturedCard numero={sortNumber(0, 60)} product={props.products} />
      </div>
    </div>
  );
}
