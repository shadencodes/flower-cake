import React from 'react';

import {
  CartContainer,
  ShoppingIcon,
  ItemsCounter
} from './CartIcon.style';

const CartIcon = ({itemsCount}) => (
    <CartContainer>
      <ShoppingIcon />
      <ItemsCounter>{itemsCount}</ItemsCounter>
    </CartContainer>
);

export default CartIcon;