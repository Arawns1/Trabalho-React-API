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
    gap: 180px;
`
export const LeftMenu = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 18px;
`
export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`

export const SearchBar = styled.input `
    all: unset;
    background-color: ${({theme}) => theme.colors.cardsAndSubBG};
    width: 32vw;
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
   
`
export const NavList = styled.ul `
    display: flex;
    flex-direction: row;
    place-items: center;
    padding: 0px;
    gap: 59px;
`
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
    }
`
export const StyledBagIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.clearText}; /* cor vermelha */
    font-size: 22px; /* tamanho 24 pixels */
`;

export const NavTitle = styled.span`
    color: ${({theme}) => theme.colors.clearText};
   
`