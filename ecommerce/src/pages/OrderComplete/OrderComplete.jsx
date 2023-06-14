import { Link } from 'react-router-dom';
import { PagamentoFinalizado, ButtonForm, Btn, PagamentoFinalzadoContainer } from './style';
import { useCart } from "../../common/hooks/useCart";

export function OrderComplete() {

  const { setCart} = useCart();

  return (
    <PagamentoFinalzadoContainer>
        <img src='https://media.discordapp.net/attachments/1081311951914815549/1118622712768766004/output-onlinegiftools.gif?width=134&height=134' alt="" />
        <PagamentoFinalizado>Pagamento Finalizado com Sucesso!</PagamentoFinalizado>
        {setCart([])}
        <ButtonForm>
            <Link to='/'><Btn>Voltar para a Tela Inicial</Btn> </Link>
        </ButtonForm>
    </PagamentoFinalzadoContainer>
  );
}