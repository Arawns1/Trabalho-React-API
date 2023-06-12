import React from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export function TelaPagamento() {
  const numPedido = 999; // Número do pedido

  return (
    <div>
        <p className="pagamentoFinalizado">Pagamento Finalizado com Sucesso!</p>
        <div className="pedidoNum-form">
            <p className="pedidoNum">Pedido #{numPedido}</p>
        </div>
        
        <div className="button-form">
            <button className="button">Tela Inicial</button>
        </div>
    </div>
  );
}

