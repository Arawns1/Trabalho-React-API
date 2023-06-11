import "./style.css"

export function Pagamento (){

    return(
        <div class="containerPagamento">
                    <form action=""/>
                        <div class="inputBox">
                            <label>Titular do cartão</label>
                            <input type="text" class="cardOwner" placeholder="Nome completo"/>
                        </div>
                        <div class="inputBox">
                            <label>CPF do titular</label>
                            <input type="text" maxlenght="16" class="cpfNumber" placeholder="000.000.000-00"/>
                        </div>
                        <div class="inputBox">
                            <label>Número do cartão</label>
                            <input type="text" maxlenght="16" id="cardNumber" placeholder="0000.0000.0000.0000"/>
                        </div>
                        <div class="flexbox ">
                            <div class="inputBox mes">
                                <label>Mês de validade</label>
                                <select name="" id="mes">
                                    <option value="mês" select disable>Mês</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div class="inputBox ano">
                                <label>Ano de validade</label>
                                <select name="" id="ano">
                                    <option value="Ano" select disable>Ano</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                </select>
                            </div>
                            <div class="inputBox cvv-input"/>
                                <label id="cvv">CVV</label>
                                    <input type="text" maxlength="4" id="cvv-input" placeholder="000"/>
                            </div>
                        </div>

    )
}