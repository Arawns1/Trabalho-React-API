import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Container = styled.div `
    background-color: ${({theme}) => theme.colors.menus};
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    position: fixed;
    z-index: 1000;
    @media (max-width: 480px) {
        padding: 0px 20px;
    }
    
`
export const LeftMenu = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 18px;
    img{
        width: 220px;
    }

`
export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    @media (max-width: 1024px) {
        display: none;
    }
`

export const SearchBar = styled.input `
    all: unset;
    background-color: ${({theme}) => theme.colors.cardsAndSubBG};
    width: 30vw;
    height: 40px;
    border-radius:26px;
    padding: 0px 20px;
    overflow: hidden;
    color: ${({theme}) => theme.colors.clearText};
    &:focus{
        outline: 1px solid ${({theme}) => theme.colors.buttonsAndLinks}
    }
`

export const StyledSearchIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.clearText}; /* cor vermelha */
    font-size: 22px; /* tamanho 24 pixels */
    position: absolute;
    right: 10px;
    top: 25%;
`;

export const RightMenu = styled.div `
    justify-self: flex-end;
   
`
export const NavList = styled.ul `
    display: flex;
    flex-direction: row;
    place-items: center;
    padding: 0px;
    gap: 40px;
    @media (max-width: 480px) {
       gap: 20px;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.clearText}; /* cor vermelha */
    font-size: 22px; /* tamanho 24 pixels */

    @media (max-width: 480px) {
        display: none;
    }
`;
export const NavItem = styled.li `
    list-style: none;
    display: flex;
    flex-direction: row;
    place-items: center;
    padding: 0px;
    gap: 10px;
    color: ${({theme}) => theme.colors.clearText};
    &:hover{
        cursor: pointer;
        color: ${({theme}) => theme.colors.titles};
        ${StyledIcon}{
        cursor: pointer;
        color: ${({theme}) => theme.colors.titles};
        }
    }
   
`
export const NavTitle = styled.span`
    color: ${({theme}) => theme.colors.clearText};
   
`

export const LogoWrapper = styled.div`
    img{
        width: 100%;
        height: 100%;
        max-width: 220px;
        object-fit: contain;
        object-position: center;
    }
    &:hover{
        cursor: pointer;
    }
    
`