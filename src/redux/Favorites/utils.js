
export const addFavoriteItem = (favoriteItems, newItem) => {
    const itemExist = favoriteItems.filter(item => item.id === newItem.id)
    if(itemExist.length > 0) return [...favoriteItems];

    return [...favoriteItems, { ...newItem }]
}

export const removeFavoriteItem = (favoriteItems, itemToRemove) => {
    return favoriteItems.filter(item => item.id !== itemToRemove.id);
}