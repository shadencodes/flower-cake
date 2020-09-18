import React from 'react';
import { connect } from 'react-redux';

import { 
    addToCart,
    removeFromCart,
    clearItemFromCart
 } from '../../redux/Cart/actions';

import {
    CheckoutItemContainer,
    Image,
    Description,
    QuantityContainer,
    Price,
    RemoveButton
} from './CheckoutItem.style';

class CheckoutItem extends React.Component{
    render(){
        const {name, quantity, price, image} = this.props.cartItem;
        return (
            <CheckoutItemContainer>
                <Image src={image.fields.file.url}/>
                <Description>{name}</Description>
                <QuantityContainer>
                    <div onClick={() => this.props.removeItem(this.props.cartItem)}> &#10094; </div>
                    <span>{quantity}</span>
                    <div onClick={() => this.props.addItem(this.props.cartItem)}> &#10095; </div>
                </QuantityContainer>
                <Price>{price}.0$</Price>
                <RemoveButton onClick={() => this.props.clearItemFromCart(this.props.cartItem)}> &#10005; </RemoveButton>
            </CheckoutItemContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
        addItem: (item) => dispatch(addToCart(item)),
        removeItem: (item) => dispatch(removeFromCart(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);