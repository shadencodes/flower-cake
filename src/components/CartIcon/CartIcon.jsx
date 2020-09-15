import React from 'react';
import { connect } from 'react-redux';

import {
  CartContainer,
  ShoppingIcon,
  ItemsCounter
} from './CartIcon.style';

const CartIcon = ({cartItemsCount}) => (
    <CartContainer>
      <ShoppingIcon />
      <ItemsCounter>{cartItemsCount}</ItemsCounter>
    </CartContainer>
);

const mapStateToProps = (state) => {
  return {
    cartItemsCount: state.cart.items.length
  }
}

export default connect(mapStateToProps)(CartIcon);
