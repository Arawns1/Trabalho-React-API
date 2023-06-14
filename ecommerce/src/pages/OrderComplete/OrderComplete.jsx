import { Link } from 'react-router-dom';
import { PagamentoFinalizado, PedidoNumForm, PedidoNum, ButtonForm, Btn } from './style';


export function OrderComplete() {
  const numPedido = 999; // Número do pedido

  return (
    <div>
        <PagamentoFinalizado>Pagamento Finalizado com Sucesso!</PagamentoFinalizado>
        <PedidoNumForm>
            <PedidoNum>Pedido #{numPedido}</PedidoNum>
        </PedidoNumForm>
        
        <ButtonForm>
            <Link to='/'><Btn>Tela Inicial</Btn> </Link>
        </ButtonForm>
    </div>
  );
}