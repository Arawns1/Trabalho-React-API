import styled from "styled-components";

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
   
    
    `
export const CategoriesCardContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 50px;
        overflow-x: auto;
    `
export const CategoryTitle = styled.h2`
    font-size: 28px;
`