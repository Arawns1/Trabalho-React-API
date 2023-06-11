import { Link, Outlet } from 'react-router-dom';
import {Container, LeftMenu, RightMenu, NavList, NavItem, StyledIcon,LogoWrapper} from './style.js'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
export function HeaderWithoutSearch(){
    return(
        <>
        <Container>
            <LeftMenu>
                <Link to='/'>
                    <LogoWrapper>
                        <img src="/assets/hex_tranparente.png" alt="" />
                    </LogoWrapper>
                </Link>
                
            </LeftMenu>
            <RightMenu>
                <NavList>
                    <NavItem>
                        <StyledIcon icon={faCircleUser}/>
                        <Link to='/login'><span>Minha Conta</span></Link>
                    </NavItem>
                </NavList>
            </RightMenu>
        </Container>
        <Outlet/>
        </>
    )
}