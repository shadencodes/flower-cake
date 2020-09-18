import React from 'react';
import { connect } from 'react-redux';

import Menu from '../../components/Menu/Menu';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import {
    CheckoutPageContainer,
    Title,
    ProductsTable,
    HeaderContainer,
    HeaderTitle,
    ProductsContainer,
    TotalContainer
} from './Checkout.style';

class Checkout extends React.Component{

    calculateTotal(){
        return this.props.cartItems.reduce( (accumaltor, currentItem) => 
                                                    accumaltor + currentItem.quantity*currentItem.price, 0);
    }

    render(){
        return (
        <CheckoutPageContainer>
            <Menu />
            <Title>Check Out</Title>
            <ProductsTable>
                <HeaderContainer>
                    <HeaderTitle>Product</HeaderTitle>
                    <HeaderTitle>Description</HeaderTitle>
                    <HeaderTitle>Quantity</HeaderTitle>
                    <HeaderTitle>Price</HeaderTitle>
                    <HeaderTitle></HeaderTitle>
                </HeaderContainer>
                <ProductsContainer>
                    { this.props.cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>) }
                </ProductsContainer>
            </ProductsTable>
            <TotalContainer> <span>TOTAL: {this.calculateTotal()}.0$</span> </TotalContainer>
        </CheckoutPageContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.items
    }
}

export default connect(mapStateToProps)(Checkout);