import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import { showHideCart } from '../../redux/Cart/actions';

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
                <CheckOutButton onClick={() => {
                                            this.props.history.push("/checkout");
                                            this.props.showHideCart();
                                        }}>GO TO CHECKOUT</CheckOutButton>
            </CartContainer>
        );
    }

}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => ({
    showHideCart: () => dispatch(showHideCart()),
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));