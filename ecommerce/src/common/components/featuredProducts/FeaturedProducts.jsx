import { useEffect, useState } from 'react'
import { FeaturedCard } from '../../components/cards/featuredCard/FeaturedCard.jsx'
import { FeatCard,
  FeaturedCardTitle,
  FeaturedCardContainer } from './style.js';

export function FeaturedProducts(props) {
  const [numero1, setNumero1] = useState(sortNumber);
  const [numero2, setNumero2] = useState(1);

  function sortNumber() {
    return parseInt(Math.random() * props.products.length);
  }
//PRECISA SORTEAR DOIS NUMERO DIFERENTES
  useEffect(() => {
    
    console.log(numero1)
    console.log(numero2)
  }, []);

  return(
    <FeatCard>
      <FeaturedCardTitle>Produtos em Destaque</FeaturedCardTitle>
        <FeaturedCardContainer>
          <FeaturedCard numero={numero1}  product={props.products} />
          <FeaturedCard numero={numero2}  product={props.products} />
        </FeaturedCardContainer>
    </FeatCard>
  )
}