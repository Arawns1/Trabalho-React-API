import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PayButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.buttonsAndLinks};
    width: 100%;
    height: 50px;
    border-radius: 4px;
    transition: 0.8s;
    outline: 2px solid #5c2ea6;

    &:hover{
        cursor:pointer;
        filter: brightness(0.9);
        scale:0.98;
    }
`

export const PayButtonTitle = styled.p`
    font-weight: 300;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.Titles};
`
