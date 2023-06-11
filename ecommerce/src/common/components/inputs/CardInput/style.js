
import styled from "styled-components";


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 94%;
`

export const StyledLabel = styled.label`
   background-color: ${({theme}) => theme.colors.Title}; 
   font-size: 0.9rem;
   font-weight: 300;
   &::after{
    
   }
`


export const StyledInput = styled.input`
    all: unset;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.cardsAndSubBG};
    border: 1px solid ${({theme}) => theme.colors.body};
    &:focus{
        outline: 1px solid ${({theme}) => theme.colors.cardsAndSubBG};
    }
    
`
