import { CardInput } from '../../common/components/inputs/CardInput/CardInput.jsx';
import {
    PaymentContainer, PaymentInfo, PaymentInputs, OrderSumary, PaymentTitle,
    SafeIcon, PaymentHeader, PaymentTinyInputs, ButtonWrapper, SumaryTitle,
    SumaryTotalCard, TotalTitle, TotalValue, SumaryList, PaymentWrapper
} from './style.js'
import { PayButton } from '../../common/components/buttons/btnPayNow/PayButton.jsx'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SumaryCard } from '../../common/components/cards/sumaryCard/SumaryCard.jsx';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCart } from '../../common/hooks/useCart.jsx';
import PaymentErrorToast from '../../common/components/modals/PaymentError/PaymentErrorToast.jsx';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api.js';
import { getItem } from '../../services/LocalStorage.js';


export function PaymentPage() {

    const { cart } = useCart();
    let navigate = useNavigate();
    const [nomeTitular, setNomeTitular] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [dataExpiracao, setDataExpiracao] = useState('');
    const [CVV, setCVV] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');

    function handleNomeChange(e) {
        setNomeTitular(e.target.value);
    }
    function handleNumeroCartaoChange(e) {
        setNumeroCartao(e.target.value);
    }
    function handleDataExpiracaoChange(e) {
        setDataExpiracao(e.target.value);
    }
    function handleCVVChange(e) {
        setCVV(e.target.value);
    }


    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false);
            }, 99999999);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [open])

    const verifyInformations = () => {
        if (nomeTitular == '' || numeroCartao == '' || dataExpiracao == '' || CVV == '') {
            setOpen(true);
            setSeverity('error');
            return ''
        } else {

            api.post('/pedidos', {
                "data_pedido": "2023-06-30",
                "data_entrega": "2023-06-30",
                "data_envio": "2023-06-30",
                "status": "Entregue",
                "cliente": {
                    "id_cliente": 1
                }
            },{
                headers: {
                    Authorization: `Bearer ${getItem('user').accessToken}`
                }
            }

            )

            return navigate("/pedido-concluido")
        }
    }

    return (
        <>
            {
                open ? <PaymentErrorToast show={open} severity={severity} /> : ''
            }

            <PaymentWrapper>
                <PaymentContainer>
                    <PaymentInfo>
                        <PaymentHeader>
                            <PaymentTitle>Pagamento</PaymentTitle>
                            <SafeIcon icon={faLock} />
                        </PaymentHeader>
                        <PaymentInputs>
                            <CardInput label='Nome do titular' placeholder='Nome completo' required action={handleNomeChange} />
                            <CardInput label='Número do cartão' maxLength={'16'} placeholder="0000.0000.0000.0000" required action={handleNumeroCartaoChange} />
                            <PaymentTinyInputs>
                                <CardInput label='Data de Expiração' maxLength={'7'} placeholder='MM / YYYY' required action={handleDataExpiracaoChange} />
                                <CardInput label='CVV' placeholder='000' maxLength={'3'} required action={handleCVVChange} />
                            </PaymentTinyInputs>
                        </PaymentInputs>
                        <ButtonWrapper onClick={verifyInformations}>
                            <PayButton />
                        </ButtonWrapper>
                    </PaymentInfo>
                    <OrderSumary>
                        <SumaryTitle>Resumo do Pedido</SumaryTitle>
                        <SumaryList>
                            {
                                cart.map(item => {
                                    return (
                                        <SumaryCard key={cart.indexOf(item)} nome={item.nome} valor={item.preco} quantidade={item.quantidade}></SumaryCard>
                                    )

                                })
                            }
                        </SumaryList>

                        <SumaryTotalCard>
                            <TotalTitle>Valor Total</TotalTitle>
                            <TotalValue>R$ {cart.reduce((acc, current) => { return acc + (current.preco * current.quantidade); }, 0).toFixed(2)}</TotalValue>
                        </SumaryTotalCard>
                    </OrderSumary>
                </PaymentContainer>
            </PaymentWrapper>
        </>
    )
}