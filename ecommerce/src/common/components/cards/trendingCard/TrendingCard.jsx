/* eslint-disable react/prop-types */
import {ProductCard, ProductInfos} from './style'
import { AddCart } from '../../buttons/btnAddCart/AddCart';
import { AddedCart } from '../../buttons/btnItemAdded/AddedCart';
import { setItem} from '../../../../services/LocalStorage'
export function TrendingCard(props) {

  function handleClick(obj){
    const element = props.cart.find((e) => e.nome === obj.nome)
    if(element){
      const arrFilter = props.cart.filter((e) => e.nome !== obj.nome)
      props.cartAction(arrFilter)
      setItem("carrinho", arrFilter)
    }
    else{
      props.cartAction([...props.cart, obj]);
      setItem("carrinho", [...props.cart, obj])
    }
  }
  
  return (

    <div>
          <ProductCard>
            <img src="https://source.unsplash.com/300x200?cars" alt="" />
            
            <ProductInfos >
              <span>{props.nome}</span>
              <p>R${props.preco}</p>
            </ProductInfos>
            
            <div className="bottomProduct">
           {
              props.cart.some((itemCart) => itemCart.nome === props.nome)?(
                <AddedCart action={() => {handleClick(props)}}/>
                ):(
                <AddCart action={() => {handleClick(props)}}/>
              )
           } 
            </div>
          </ProductCard>
    </div>
  )
}