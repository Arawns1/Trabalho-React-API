import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import {ProductCard} from './style'

export function TrendingCard() {
  return (
    <div>
      <div className="container">
        <div className="product">
          <ProductCard>
            <img src="https://source.unsplash.com/300x200?cars" alt="" />
            <span>Nome do Produto</span>
            <p>R$ 20,99</p>
            <div className="bottomProduct">
              <button className='btnProduct'>Adicionar ao Carrinho<FontAwesomeIcon icon={faCirclePlus} style={{color: "#9460e9",}} /></button>
            </div>
          </ProductCard>
        </div>
      </div>
    </div>
  )
}