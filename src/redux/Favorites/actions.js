import FavoriteActionTypes from './actionTypes';

export const addItemToFavorite = (item) => ({
    type: FavoriteActionTypes.ADD_FAVORITE,
    payload: item
})

export const deleteItemFromFavorite = (item) => ({
    type: FavoriteActionTypes.DELETE_FAVORITE,
    payload: item
})