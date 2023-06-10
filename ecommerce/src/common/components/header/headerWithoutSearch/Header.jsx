import {Container, LeftMenu, RightMenu, NavList, NavItem, StyledIcon} from './style.js'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
export function Header(){
    return(
        <Container>
            <LeftMenu>
                <img src="https://cdn.discordapp.com/attachments/1081311951914815549/1116861418109685840/imagem_2023-06-09_194723812-removebg-preview.png" alt="" />
                
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