/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './style.css'

export function ItemCarrinho(props) {
  const [quantidade, setQuantidade] = useState(1);
  const [precoTotal, setPrecoTotal] = useState(0.00);
  
  const preco = props.valor; // Preço do produto

  useEffect(() => {
    const novoPrecoTotal = (quantidade * preco).toFixed(2);
    setPrecoTotal(novoPrecoTotal);
  }, [quantidade])

  const handleAdd = () => {
    setQuantidade(quantidade + 1);
    props.updateFinalPrice(preco)
    props.updateQuantidade(props.nome, quantidade + 1);
  };

  const handleRemove = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
      props.updateFinalPrice(-preco)
      props.updateQuantidade(props.nome, quantidade - 1);
    }
  };

  return (
  <div className="itemCarrinhoContainer">
    <div className="infoProduto">
      <div className='image-container'>
        <img src={props.imagem} alt="Imagem do produto" />
      </div>
      <div className='nome-wrapper'>
        <p className="nomeProduto">{props.nome}</p>
      </div>
      <hr/>
      <div className="formatarButtons">
        <button className='btn-qntd' onClick={handleRemove}>-</button>
        <p className="quantidadeProduto">{quantidade}</p>
        <button className='btn-qntd' onClick={handleAdd}>+</button>
      </div>
      <hr/>
      <div className='preco-wrapper'>
        <p className="precoProduto"> R$ {precoTotal}</p>
      </div>
    </div>
  </div>
  );
}
