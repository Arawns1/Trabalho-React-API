import styled from "styled-components";

export const PagamentoFinalzadoContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  `


export const PagamentoFinalizado = styled.p `
  text-align: center;
  font-size: 45px;
  
`

export const PedidoNumForm = styled.div `
  display: flex;
  justify-content: right;
  height: 100px;
`

export const PedidoNum = styled.p `
  background-color: #ffffff;
  color: #808080;
  padding: 5px;
  text-align: center;
  height: 35%;
  justify-content: right;
  align-items: right;
  border-radius: 7px;
  font-size: 25px;
  width: 200px;
  height: 50px;
`

export const ButtonForm = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const Btn = styled.button `
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  background-color: #9460E9;
  border-radius: 7px;
  &:hover{
        cursor:pointer;
        filter: brightness(0.9);
    }
`