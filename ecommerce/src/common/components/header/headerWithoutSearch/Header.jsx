import {Container, LeftMenu, RightMenu, NavList, NavItem, StyledIcon} from './style.js'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
export function Header(){
    return(
        <Container>
            <LeftMenu>
                <img src="/assets/hex_tranparente.png" alt="" />
                
            </LeftMenu>
            <RightMenu>
                <NavList>
                    <NavItem>
                        <StyledIcon icon={faCircleUser}/>
                        <span>Minha Conta</span>
                    </NavItem>
                </NavList>
            </RightMenu>
        </Container>
    )
}