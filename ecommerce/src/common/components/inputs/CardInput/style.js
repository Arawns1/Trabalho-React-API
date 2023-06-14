
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
`

export const StyledInput = styled.input`
    all: unset;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    background-color: #454547;
    border: 1px solid ${({theme}) => theme.colors.body};
    &:focus{
        outline: 1px solid ${({theme}) => theme.colors.cardsAndSubBG};
    }
    &::placeholder{
        color: rgba(255, 255, 255, 0.25)
    }
    
`
