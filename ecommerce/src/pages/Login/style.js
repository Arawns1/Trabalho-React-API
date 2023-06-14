import styled from "styled-components";

export const Container = styled.div `
  width: 100vw;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerLogin = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  background-color: ${({theme}) => theme.colors.body};
  width: 50vw;
  height: 95%;
  border-radius: 8px;
  box-shadow: 25px 18px 97px -44px rgba(0,0,0,0.75);
`

export const Title = styled.span `
  display: block;
  font-size: 65px;
  text-align: center;
  margin-bottom: 50px ;
`

export const LoginForm = styled.div `
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 40vw;
  min-width: 300px;
`

export const FormBody = styled.div `

`

export const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContainerLoginFormBtn = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const LoginFormBtn = styled.button `
  all: unset;
  text-align: center;
  border-radius: 8px;
  width: 60%;
  height: 7vh;
  background-color: #9460E9;
  cursor: pointer;
  transition: 1s;
  font-size: 1.1em;
  font-weight: 700;

  :hover {
    scale: 0.98;
    filter: brightness(0.9);
    outline: 2px solid #6239a5;
  }
`

export const CriarConta = styled.div `
  display: flex;
  justify-content: center;
  align-self: center;
  padding-top: 2px;
`

export const Cadastrar = styled.span `
  font-weight: 600;
  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`

export const EsqueceuSenha = styled.div `
  display: flex;
  color: #9460E9;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 0px;
  font-weight: 500;
  :hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`

export const Input = styled.input `
  all: unset;
  font-size: 15px;
  color: black;
  line-height: 1.2;
  height: 28px;
  background-color: #D9D9D9;
  border-radius: 13px;
  padding: 10px;
  :hover {
    cursor: text;
  }
  :focus {
    outline: 2px solid #9460E9;
  }
`