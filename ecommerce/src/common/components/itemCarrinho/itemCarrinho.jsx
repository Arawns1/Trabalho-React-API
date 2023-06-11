/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './style.css'

export function ItemCarrinho(props) {
  const [quantidade, setQuantidade] = useState(1);
  const [precoTotal, setPrecoTotal] = useState(0.00);
  
  const preco = 20.91; // Preço do produto

  useEffect(() => {
    const novoPrecoTotal = (quantidade * preco).toFixed(2);
    setPrecoTotal(novoPrecoTotal);
  }, [quantidade])

  const handleAdd = () => {
    setQuantidade(quantidade + 1);
    props.updateFinalPrice(preco)
  };

  const handleRemove = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
      props.updateFinalPrice(-preco)
    }
  };

  return (
  <div className="itemCarrinhoContainer">
    <div className="infoProduto">
      <div className='image-container'>
        <img src="https://source.unsplash.com/80x80?dogs" alt="Imagem do produto" />
      </div>
      <p className="nomeProduto">Nome do Produto</p>
      <hr/>
      <div className="formatarButtons">
        <button className='btn-qntd' onClick={handleRemove}>-</button>
        <p className="quantidadeProduto">{quantidade}</p>
        <button className='btn-qntd' onClick={handleAdd}>+</button>
      </div>
      <hr/>
      <p className="precoProduto"> R$ {precoTotal}</p>
    </div>
  </div>
  );
}
