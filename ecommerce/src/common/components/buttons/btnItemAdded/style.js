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
    font-weight: 500;
    font-size: 0.9em;
    color: ${({theme}) => theme.colors.buttonsAndLinks};
`
export const ButtonIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.buttonsAndLinks};
    width: 22px;
    height: 32px;
`