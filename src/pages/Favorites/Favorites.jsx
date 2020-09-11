import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductsList/ProductList';
import Menu from '../../components/Menu/Menu';

import { 
    FavoritesContainer,
    Title
 } from './Favorites.style';


class Favorites extends React.Component{

    render(){
        return (
            <div>
                <Menu />
                <Title>Favorites</Title>
                <FavoritesContainer>
                    <ProductList products={this.props.favoriteProducts} />
                </FavoritesContainer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteProducts: state.items
    }

}

export default connect(mapStateToProps)(Favorites);