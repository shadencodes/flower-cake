import { combineReducers } from 'redux';

import favoriteReducer from './Favorites/reducer';
import cartReducer from './Cart/reducer';

export const rootReducer = combineReducers({
    cart: cartReducer,
    favorite: favoriteReducer
});