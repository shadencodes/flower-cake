
export const addItemToCart = (cartItems, newItem) => {
    const itemExist = cartItems.find(cartItem => cartItem.id === newItem.id);
    if (itemExist) {
        return cartItems.map(cartItem => cartItem.id === newItem.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...newItem, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const itemExist = cartItems.find(cartItem => cartItem.id === itemToRemove.id);
    if (itemExist.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === itemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    }   
    
    return cartItems.filter(item => item.id !== itemToRemove.id);
}