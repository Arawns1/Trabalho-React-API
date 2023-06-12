import styled from "styled-components"

export const CardContainer = styled.div`
    min-width: 180px;
    min-height: 200px;
    background-color: ${({theme}) => theme.colors.cardsAndSubBG};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 8px;
    box-shadow: 25px 18px 97px -44px rgba(0,0,0,0.75);
    &:hover{
        cursor: pointer;
    }
    
`
export const CategoryImage = styled.img`
    object-fit: contain;
    border-radius: 8px;
    width: 80%;
    height: 80%;
`
export const CategoryTitle = styled.h4``