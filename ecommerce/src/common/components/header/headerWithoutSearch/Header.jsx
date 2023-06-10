import {Container, LeftMenu, RightMenu, NavList, NavItem, StyledIcon,LogoWrapper} from './style.js'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
export function Header(){
    return(
        <Container>
            <LeftMenu>
                <LogoWrapper>
                    <img src="/assets/hex_tranparente.png" alt="" />
                </LogoWrapper>
                
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