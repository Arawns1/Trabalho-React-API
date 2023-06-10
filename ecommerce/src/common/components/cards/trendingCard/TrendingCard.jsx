/* eslint-disable react/prop-types */
import {ProductCard, ProductInfos} from './style'
import { AddCart } from '../../buttons/btnAddCart/AddCart';

export function TrendingCard(props) {
  return (
    <div>
          <ProductCard>
            <img src="https://source.unsplash.com/300x200?cars" alt="" />
            
            <ProductInfos>
              <span>{props.nome}</span>
              <p>R${props.preco}</p>
            </ProductInfos>
            
            <div className="bottomProduct">
              <AddCart/>
            </div>
          </ProductCard>
    </div>
  )
}