import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import {ContainerCard, Description, Featured} from './style'

export function FeaturedCard() {
  return (
    <div>
      <BannerCard/>
    </div>
  )
}

export function BannerCard() {
  return(
    <ContainerCard>
      <Featured>
          <Description>
            <h4>NOME DO PRODUTO</h4>
            <p>Legenda com muito impacto</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus, praesentium...</p>
            <button className='btnFeatured'>Comprar Agora<FontAwesomeIcon icon={faBagShopping}/></button>
          </Description>
        <img src="https://source.unsplash.com/260x333?cars" alt="imagem" />
      </Featured>
    </ContainerCard>
  )
}
