/* eslint-disable react/prop-types */
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {StyledIcon, NavItem} from '../headerWithSearch/style'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export function DropDown(props) {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user')
    setAnchorEl(null);
    return navigate("/")
  }

  const handleMyOrders = () => {
    setAnchorEl(null);
    return navigate("/meus-pedidos")
  }

  return (
    <div>
        
    <NavItem id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <StyledIcon icon={faCircleUser}/>
        <span>Olá, {props.user.username}</span>
    </NavItem>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <MenuItem onClick={handleMyOrders}>Minhas compras</MenuItem>
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </div>
  );
}
