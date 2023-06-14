import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.buttonsAndLinks};
    width: 100%;
    height: 60px;
    border-radius: 4px;
    transition: 0.8s;
    outline: 2px solid #5c2ea6;
    padding: 20px;
    gap: 10px;
    &:hover{
        cursor:pointer;
        filter: brightness(0.9);
        scale:0.98;
    }
`

export const LoginButtonTitle = styled.p`
    font-weight: 500;
    font-size: 1em;
    color: ${({theme}) => theme.colors.Titles};
`

export const LoginButtonIcon = styled(FontAwesomeIcon)`
    height: 180%;
    max-height: 100px;
`