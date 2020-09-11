
// Return favorite items array including the new item
export const addFavoriteItem = (favoriteItems, newItem) => {

    // Check if this item already exist in favorite items
    const itemExist = favoriteItems.filter(item => item.fields.id === newItem.fields.id)
    if(itemExist.length > 0) return [...favoriteItems];

    return [...favoriteItems, { ...newItem }]
}

export const removeFavoriteItem = (favoriteItems, itemToRemove) => {
    const  newFavoriteItems = favoriteItems.filter(item => item.fields.id !== itemToRemove.fields.id);
    return newFavoriteItems;
}