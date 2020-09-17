import React from 'react';
import { connect } from 'react-redux';

import HeartIcon from '../HeartIcon/HeartIcon';
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';

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
                {this.props.hideCart ? null : <Cart /> }
            </MenuContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      hideCart: state.cart.hidden
    }
}

export default connect(mapStateToProps)(Menu);


