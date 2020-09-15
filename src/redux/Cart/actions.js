import CartActionTypes from './actionTypes';

export const addToCart = (item) => {
    return {
      type: CartActionTypes.ADD_TO_CART,
      payload: item
    };
  };

  export const removeFromCart = (item) => {
    return {
      type: CartActionTypes.REMOVE_FROM_CART,
      payload: item
    };
  };

  export const emptyCart = () => {
    return {
      type: CartActionTypes.EMPTY_CART,
    };
  };