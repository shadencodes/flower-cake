import FavoriteActionTypes from './actionTypes';
import { addFavoriteItem, removeFavoriteItem } from '../Favorites/utils';

const INITIAL_STATE = {
    items: []
}

const FavoriteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FavoriteActionTypes.ADD_FAVORITE:
            return {
                ...state,
                items: addFavoriteItem(state.items, action.payload)
            }
        case FavoriteActionTypes.DELETE_FAVORITE:
            return {
                ...state,
                items: removeFavoriteItem(state.items, action.payload)
            }
        default:
            return state;
    }
}

export default FavoriteReducer;