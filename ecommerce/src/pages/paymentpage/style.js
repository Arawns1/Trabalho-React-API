import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PaymentContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.menus};
    width: 70vw;
    height: 90vh;
    border-radius: 8px;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    box-shadow: 25px 18px 97px -44px rgba(0,0,0,0.75);
`

export const PaymentInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 70%;
    height: 100%;
`

export const PaymentHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
export const PaymentInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
`


export const SafeIcon = styled(FontAwesomeIcon)`
    width: 26px;
    height: 26px;
`

export const PaymentTitle = styled.h2`
    font-weight: 300;
`

export const PaymentTinyInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 94%;
  gap: 20%;
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
`

export const OrderSumary = styled.div`
    width: 30%;
    height:100%;
    border-radius: 0px 8px 8px 0px;
    background-color: ${({ theme }) => theme.colors.cardsAndSubBG};
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    gap: 20px;
`

export const SumaryTitle = styled.h3`
    font-weight: 500;
    margin-top: 20px;
`

export const SumaryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`

export const SumaryTotalCard = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    gap: 10px;
    border-radius: 8px;
    margin: 0px 10px;
    padding: 0px 15px;
`
export const TotalTitle = styled.h3`
    font-weight: 400;
    font-size: 0.8em;
    color:${({ theme }) => theme.colors.clearText};
`
export const TotalValue = styled.h4`

`