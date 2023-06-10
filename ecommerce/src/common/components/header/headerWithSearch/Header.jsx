import {Container, LeftMenu, SearchBar, RightMenu, NavList, 
        NavItem, SearchBarContainer, StyledSearchIcon,
        StyledIcon, LogoWrapper} from './style.js'
import { faMagnifyingGlass, faBagShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons';
export function Header(){
    return(
        <Container>
            <LeftMenu>
                <LogoWrapper>
                    <img src="/assets/hex_tranparente.png" alt="logo do site" />
                </LogoWrapper>

                <SearchBarContainer>
                    <SearchBar placeholder='Pesquisar...'/>
                    <StyledSearchIcon icon={faMagnifyingGlass} />
                </SearchBarContainer>
                
            </LeftMenu>
            <RightMenu>
                <NavList>
                    <NavItem>
                        <StyledIcon icon={faCircleUser}/>
                        <span>Minha Conta</span>
                    </NavItem>
                    <NavItem>
                        <StyledIcon icon={faBagShopping}/>
                        <span>Carrinho</span>
                    </NavItem>
                </NavList>
            </RightMenu>
        </Container>
    )
}