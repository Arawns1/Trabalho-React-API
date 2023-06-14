import styled from "styled-components"

export const CadastroContainer = styled.div`
   height: 80vh;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 40px;
`
export const CadastroContent = styled.div`
    width: 100%;  
    height: 80%;  
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    label{
        line-height: 0;
        margin: 5px 0px;
    }
`

export const PersonalInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

`
export const AddressInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

`

export const CadastroInput = styled.input`
    width: 25vw;
    height: 1vh;
    border-radius: 8px;
    padding: 20px;
    background-color: #D9D9D9;
    color: ${({ theme }) => theme.colors.menus};
    text-overflow: unset;
    border: none;
    &:focus{
        outline: 2px solid #9460E9;
        
    }
    &:hover{
        cursor: text;
    }

   
`
export const CadastroTitle = styled.h2`
    align-self: center;
    font-weight: 400;
    text-align: center;
    font-size: 2em;
`

export const APIResponse = styled.div`
`


export const ButtonWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.buttonsAndLinks};
    width: 200px;
    height: 50px;
    border-radius: 8px;
    &:hover{
        cursor:pointer;
        filter: brightness(0.9);
    }
`

export const ButtonTitle = styled.p`
    font-weight: 600;
    color: ${({theme}) => theme.colors.Titles};
`


export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;

`