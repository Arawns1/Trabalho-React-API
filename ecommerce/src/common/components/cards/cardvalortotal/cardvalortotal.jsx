import { ValorTotal, Valor } from "./style"

export function CardValortotal (props){
    return(
        <ValorTotal>
            <span>Valor Total  <Valor>R${(props.totalValue).toFixed(2)}</Valor></span>
        </ValorTotal>
    )
}

