import { Link, Outlet } from 'react-router-dom';
import {Container, LeftMenu, SearchBar, RightMenu, NavList, 
        NavItem, SearchBarContainer, StyledSearchIcon,
        StyledIcon, LogoWrapper} from './style.js'
import { faMagnifyingGlass, faBagShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {getItem} from './../../../../services/LocalStorage.js'
import { DropDown } from '../dropdownMenu/DropDown.jsx';

export function Header(){
    return(
        <>
        <Container>
            <LeftMenu>
                <Link to='/'>
                    <LogoWrapper>
                        <img src="/assets/hex_tranparente.png" alt="logo do site" />
                    </LogoWrapper>
                </Link>
                <SearchBarContainer>
                    <SearchBar placeholder='Pesquisar...'/>
                    <StyledSearchIcon icon={faMagnifyingGlass} />
                </SearchBarContainer>
                
            </LeftMenu>
            <RightMenu>
                <NavList>
                    <NavItem>
                    
                        { getItem('user') ? (
                            <DropDown user={getItem('user')}/>
                        ):(
                            <>
                                <StyledIcon icon={faCircleUser}/>
                                <Link to='/login'><span>Minha Conta</span></Link>
                            </>
                            
                        )}
                        
                    </NavItem>
                    <NavItem>
                        <StyledIcon icon={faBagShopping}/>
                        {
                            getItem('carrinho')?.length == 0 || getItem('carrinho') == null? (
                                <Link to='/carrinho-vazio'><span>Carrinho</span></Link>
                            ):
                            (
                                <Link to='/carrinho'><span>Carrinho</span></Link>
                            )
                        }
                    </NavItem>
                </NavList>
            </RightMenu>
        </Container>
        <Outlet/>
        </>
    )
}