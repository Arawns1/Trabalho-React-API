import { useEffect, useState } from 'react'
import { FeaturedCard } from '../../components/cards/featuredCard/FeaturedCard.jsx'
import './style.css'

export function FeaturedProducts(props) {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  function sortNumber() {
    return parseInt(Math.random() * props.products.length);
  }
//PRECISA SORTEAR DOIS NUMERO DIFERENTES
  useEffect(() => {
    
    console.log(numero1)
    console.log(numero2)
  }, []);

  return(
    <div className='featured-cards'>
      <h3 id='featured-card-title'>Produtos em Destaque</h3>
        <div className="featured-cards-container">
          <FeaturedCard numero={numero1}  product={props.products} />
          <FeaturedCard numero={numero2}  product={props.products} />
        </div>
    </div>
  )
}