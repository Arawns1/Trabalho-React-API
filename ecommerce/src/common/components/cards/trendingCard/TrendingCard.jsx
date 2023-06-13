/* eslint-disable react/prop-types */
import {ProductCard, ProductInfos} from './style'
import { AddCart } from '../../buttons/btnAddCart/AddCart';
import { AddedCart } from '../../buttons/btnItemAdded/AddedCart';
import { setItem} from '../../../../services/LocalStorage'
export function TrendingCard(props) {

  function handleClick(obj){
    const carrinhoFiltered = {...obj}
    delete carrinhoFiltered.cart

    const element = props.cart.find((e) => e.nome === carrinhoFiltered.nome)
    if(element){
      const arrFilter = props.cart.filter((e) => e.nome !== carrinhoFiltered.nome)
      props.cartAction(arrFilter)
      setItem("carrinho", arrFilter)
    }
    else{
      props.cartAction([...props.cart, carrinhoFiltered]);
      setItem("carrinho", [...props.cart, carrinhoFiltered])
    }
  }
  
  return (

    <div>
          <ProductCard>
            <img src={props.imagem} alt="imagem do produto"/>
            
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