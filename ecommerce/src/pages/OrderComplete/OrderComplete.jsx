import { Link } from 'react-router-dom';
import './style.css'

export function OrderComplete() {
  const numPedido = 999; // Número do pedido

  return (
    <div>
        <p className="pagamentoFinalizado">Pagamento Finalizado com Sucesso!</p>
        <div className="pedidoNum-form">
            <p className="pedidoNum">Pedido #{numPedido}</p>
        </div>
        
        <div className="button-form">
            <Link to='/'><button className="button">Tela Inicial</button> </Link>
        </div>
    </div>
  );
}