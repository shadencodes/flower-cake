import React from 'react';

import HeartIcon from '../HeartIcon/HeartIcon';
import CartIcon from '../CartIcon/CartIcon';

import { 
    MenuContainer,
    MenuList,
    MenuItem
 } from "./Menu.style";

class Menu extends React.Component{
    render(){
        return (
            <MenuContainer>
                <MenuList>
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/about">About</MenuItem>
                    <MenuItem to="/store">Store</MenuItem>
                    <MenuItem to="/favorite"> <HeartIcon /> </MenuItem>
                    <CartIcon />
                </MenuList> 
            </MenuContainer>
        );
    }
}

export default Menu;

