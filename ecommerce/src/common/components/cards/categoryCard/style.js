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
    border: 2px solid ${({theme}) => theme.colors.menus};
    transition: 1s;
    &:hover{
        cursor: pointer;
        scale: 0.97;
        background-color: ${({theme}) => theme.colors.buttonsAndLinks};
        img{
            scale: 1.1;
            filter: drop-shadow(-20px 10px 5px rgba(33, 33, 36, 0.74));
        }
    }
    
`
export const CategoryImage = styled.img`
    object-fit: contain;
    border-radius: 8px;
    width: 80%;
    height: 80%;
    filter: drop-shadow(-10px 4px 2px rgba(33, 33, 36, 0.94));
    transition: 1s;

`
export const CategoryTitle = styled.h4``

export const CategoryImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
`