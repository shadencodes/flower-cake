import CartActionTypes from './actionTypes';
import {addItemToCart, removeItemFromCart} from './utils';

const INITIAL_STATE = {
    items: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            }
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                items: removeItemFromCart(state.items, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;