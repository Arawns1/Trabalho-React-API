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
export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.clearText}; /* cor vermelha */
    font-size: 22px; /* tamanho 24 pixels */
    
    @media (max-width: 480px) {
        display: none;
    }
`;

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
    
`