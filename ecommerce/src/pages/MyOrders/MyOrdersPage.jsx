
import { useEffect } from "react"
import {
    MyOrdersContainer,
    MyOrdersContent,
    OrderCard,
    MyOrdersTitle,
    OrderCardDiv,
    OrderHeader
} from "./style"
import { api } from "../../services/api";
import { getItem } from "../../services/LocalStorage";
import { useState } from "react";

export function MyOrdersPage() {

    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        api.get(`/pedidos/cliente/${getItem('cliente').id_cliente}`)
        .then(response => setPedidos(response.data))
    }, [])

    return (
        <MyOrdersContainer>
            <MyOrdersTitle>Meus Pedidos</MyOrdersTitle>
            <OrderHeader>
                <OrderCardDiv> <label>Id Pedido</label> </OrderCardDiv>
                <hr/>
                <OrderCardDiv>  <label>Status do pedido</label> </OrderCardDiv>
                <hr/>
                <OrderCardDiv> <label>Data do pedido</label> </OrderCardDiv>
                <hr/>
                <OrderCardDiv> <label>Numero de itens</label></OrderCardDiv>
                <hr/>
                <OrderCardDiv> <label>Valor total</label> </OrderCardDiv>
            </OrderHeader>
            <MyOrdersContent>
            {
                pedidos.map(pedido => { 
                    return(
                        <OrderCard key={pedido.id_pedido}>
                               <span>{pedido.id_pedido}</span> 
                               <span>{pedido.status }</span> 
                               <span>{ pedido.data_pedido}</span> 
                               <span>{pedido.produtos.length}</span> 
                               <span>R$ {(pedido.valor_total).toFixed(2)}</span> 
                        </OrderCard>
                    )
                })

            }
                
                    
                
            </MyOrdersContent>
        </MyOrdersContainer>
    )
}