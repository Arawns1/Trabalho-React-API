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


import PaymentErrorToast from '../../common/components/modals/PaymentError/PaymentErrorToast.jsx';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api.js';
import { getItem } from '../../services/LocalStorage.js';



export function PaymentPage() {

    
    let navigate = useNavigate();
    const [nomeTitular, setNomeTitular] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [dataExpiracao, setDataExpiracao] = useState('');
    const [CVV, setCVV] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [cart, setCart] = useState([])
    
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
        setCart(getItem('carrinho'))
        if (open) {
            const timer = setTimeout(() => {    
                setOpen(false);
            }, 3500);
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


            var data = new Date;
            var dataString = `${data.getFullYear()}-${String(data.getMonth()+1).padStart(2,'0')}-${data.getDate()}`

            api.post('/pedidos', {
                "data_pedido": dataString,
                "data_entrega": dataString,
                "data_envio": dataString,
                "status": "Pago",
                "cliente": {
                    "id_cliente": `${getItem('cliente').id_cliente}`
                }
            },{
                headers: {
                    Authorization: `Bearer ${getItem('user').accessToken}`
                }
            }).then(response => {
                getItem('carrinho').map(item => {
                    api.post('/itemPedidos', {
                        "quantidade": item.quantidade,
                        "preco_venda": item.valor_unitario,
                        "percentual_desconto": 0,
                        "produto": {
                            "id_produto": item.idProduto
                        },
                        "pedido": {
                        "id_pedido": response.data.id_pedido
                        }
                    }, {
                        headers: {
                            Authorization: `Bearer ${getItem('user').accessToken}`
                        }
                    })
                })


            })
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

                                        <SumaryCard key={cart.indexOf(item)}  quantidade={item.quantidade} nome={item.nome} valor={item.valor_unitario}></SumaryCard>
                                    )
                                })
                            }
                        </SumaryList>

                        <SumaryTotalCard>
                            <TotalTitle>Valor Total</TotalTitle>
                            <TotalValue>R$ {cart.reduce((acc, current) => { return acc + (current.valor_unitario * current.quantidade); }, 0).toFixed(2)}</TotalValue>
                        </SumaryTotalCard>
                    </OrderSumary>
                </PaymentContainer>
            </PaymentWrapper>
        </>
    )
}