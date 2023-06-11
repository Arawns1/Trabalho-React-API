import styled from "styled-components";

export const SumaryCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({theme}) => theme.colors.clearText};
    padding: 8px 0px;
    margin: 0px 10px;
`


export const SumaryCardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const ItemQuantity = styled.h3`
    font-weight: 500;
    font-size: 0.9em;
`
export const ItemName = styled.h3`
    font-weight: 300;
    font-size: 0.9em;
`
export const ItemPrice = styled.h2`
    font-weight: 500;
    font-size: 0.95em;
`