import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem';
import {
    CartContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    CheckOutButton
} from './Cart.style';

class Cart extends React.Component{

    render() {
        return (
            <CartContainer>
                <CartItemsContainer>
                    {
                        this.props.cartItems.length ? this.props.cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                                                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>

                    }
                </CartItemsContainer>
                <CheckOutButton>GO TO CHECKOUT</CheckOutButton>
            </CartContainer>
        );
    }

}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.items
    }
}

export default connect(mapStateToProps)(Cart);