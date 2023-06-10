/* eslint-disable react/prop-types */
import {ProductCard, ProductInfos} from './style'
import { AddCart } from '../../buttons/btnAddCart/AddCart';
import { AddedCart } from '../../buttons/btnItemAdded/AddedCart';

export function TrendingCard(props) {

  var status = false;

  function handleClick(obj){
    status = !status;
    const element = props.cart.find((e) => e.nome === obj.nome)
    
    if(element){
      const arrFilter = props.cart.filter((e) => e.nome != obj.nome);
      console.log(arrFilter)
      props.cartAction(arrFilter)
    }
    else{
      console.log("as")
    }

  }
  
  return (

    <div>
          <ProductCard>
            <img src="https://source.unsplash.com/300x200?cars" alt="" />
            
            <ProductInfos>
              <span>{props.nome}</span>
              <p>R${props.preco}</p>
            </ProductInfos>
            
            <div className="bottomProduct">
           {
              props.cart.some((itemCart) => itemCart.nome === props.nome) ?(
                <AddedCart action={handleClick}/>
                ):(
                <AddCart action={handleClick}/>
              )
           } 
            </div>
          </ProductCard>
    </div>
  )
}