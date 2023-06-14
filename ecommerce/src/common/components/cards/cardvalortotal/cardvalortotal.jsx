
import "./style.css"
export function CardValortotal (props){
    return(
        <div className="valorTotal">
            <span>Valor Total  <span id="total-value">R${(props.totalValue).toFixed(2)}</span></span>
        </div>
    )
}

