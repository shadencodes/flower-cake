import React from 'react';
import { connect } from 'react-redux';

import {
    addItemToFavorite,
    deleteItemFromFavorite,
  } from "../../redux/Favorites/actions";

import { addToCart } from '../../redux/Cart/actions';

import { 
    ProductContainer,
    BackgroundImage,
    ProductFooterContainer,
    HeartFilled,
    RemoveIcon,
    AddButton
} from './Product.style';

class Product extends React.Component{

    render(){
        const {name, price, imageUrl} = this.props.product;
        return (
            <ProductContainer>            
                <BackgroundImage src={imageUrl} />
                { (this.props.storePage === true) ? 
                    <HeartFilled className="favorite-icon" onClick={() => this.props.addToFavorite(this.props.product)}/>  
                    :
                    <RemoveIcon className="favorite-icon" onClick={() => this.props.removeFromFavorite(this.props.product)}> &#10005; </RemoveIcon>
                }   
                <AddButton className="add-button" inverted onClick={() => this.props.addToCart(this.props.product)}>ADD TO CART</AddButton>
                <ProductFooterContainer>
                    <h2>{name}</h2>
                    <h3>{price + ".0$"}</h3>
                </ProductFooterContainer>
            </ProductContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addToCart(item)),
        addToFavorite: (item) => dispatch(addItemToFavorite(item)),
        removeFromFavorite: (item) => dispatch(deleteItemFromFavorite(item))
    }
}

export default connect(null, mapDispatchToProps)(Product);