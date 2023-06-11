import styled from 'styled-components'

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: ${({theme}) => theme.colors.body};
    width: 93%;
    gap: 20px;
    margin-top: 20px;
`

export const CardActions = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 60px;
`
export const CartTitle = styled.h2`
    display: flex;
    align-self: flex-start;
`

export const CartList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
`