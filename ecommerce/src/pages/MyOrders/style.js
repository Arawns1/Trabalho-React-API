
import styled from "styled-components"

export const MyOrdersContainer = styled.div`
    width: 100vw;
    height: 80vh;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;

`

export const MyOrdersTitle = styled.h2`
`

export const MyOrdersContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    
`

export const OrderCard = styled.div`
    background-color: ${({ theme }) => theme.colors.cardsAndSubBG};
    padding: 10px;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

