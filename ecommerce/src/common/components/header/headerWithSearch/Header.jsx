import {Container, LeftMenu, SearchBar, RightMenu, NavList, 
        NavItem, SearchBarContainer, StyledSearchIcon,
        StyledBagIcon} from './style.js'
import { faMagnifyingGlass, faBagShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons';
export function Header(){
    return(
        <Container>
            <LeftMenu>
                <img src="https://source.unsplash.com/220x40?cute-animals" alt="" />
                
                <SearchBarContainer>
                    <SearchBar placeholder='Pesquisar...'/>
                    <StyledSearchIcon icon={faMagnifyingGlass} />
                </SearchBarContainer>
                
            </LeftMenu>
            <RightMenu>
                <NavList>
                    <NavItem>
                        <StyledBagIcon icon={faCircleUser}/>
                        <span>Minha Conta</span>
                    </NavItem>
                    <NavItem>
                        <StyledBagIcon icon={faBagShopping}/>
                        <span>Carrinho</span>
                    </NavItem>
                </NavList>
            </RightMenu>
        </Container>
    )
}