import React, { useState } from "react";
import './style.css'

export default function ItemCarrinho() {
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
      <p className="nomeProduto">Nome do Produto</p>
      <hr></hr>
      <p className="precoProduto">Preço: R${preco}</p>
      <hr></hr>
      <div className="formatarButtons">
        <button onClick={handleRemove}>-</button>
        <p className="quantidadeProduto">Quantidade: {quantidade}</p>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  </div>
  );
}
