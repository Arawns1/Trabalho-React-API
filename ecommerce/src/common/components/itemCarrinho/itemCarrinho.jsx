import { useState } from 'react';
import './style.css'

export function ItemCarrinho() {
  const [quantidade, setQuantidade] = useState(1);
  const preco = 20; // Preço do produto

  const handleAdd = () => {
    setQuantidade(quantidade + 1);
  };

  const handleRemove = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
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
      <p className="precoProduto"> R$ {(quantidade * preco).toFixed(2)}</p>
    </div>
  </div>
  );
}
