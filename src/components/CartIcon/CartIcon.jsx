import React from 'react';
import { connect } from 'react-redux';

import { showHideCart } from '../../redux/Cart/actions';

import {
  CartContainer,
  ShoppingIcon,
  ItemsCounter
} from './CartIcon.style';

const CartIcon = (props) => (
    <CartContainer onClick={props.showHideCart}>
      <ShoppingIcon />
      <ItemsCounter>{props.cartItemsCount}</ItemsCounter>
    </CartContainer>
);

const mapDispatchToProps = (dispatch) => ({
  showHideCart: () => dispatch(showHideCart()),
});

const mapStateToProps = (state) => {
  return {
    cartItemsCount: state.cart.items.length
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
