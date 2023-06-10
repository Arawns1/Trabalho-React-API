import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ButtonContainer = styled.button`
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 250px;
    height: 20px;
    border-radius: 8px;
    gap: 8px;
    &:hover{
        cursor:pointer;
        filter: brightness(0.9);
    }
`

export const ButtonTitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${({theme}) => theme.colors.Titles};
`
export const ButtonIcon = styled(FontAwesomeIcon)`
    width: 22px;
    height: 32px;
`