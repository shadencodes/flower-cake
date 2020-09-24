import React from 'react';

import {
    CartItemContainer,
    CartItemImage,
    CartItemDetailsContainer
} from './CartItem.style';

class CartItem extends React.Component{

    render(){
        const {name, quantity, price, imageUrl} = this.props.item;
        return (
            <CartItemContainer>
                <CartItemImage  src={imageUrl} alt=""/>
                <CartItemDetailsContainer>
                    <span>{name}</span>
                    <span> {quantity} x ${price} </span>
                </CartItemDetailsContainer>
            </CartItemContainer>
        );
    }
}

export default CartItem;