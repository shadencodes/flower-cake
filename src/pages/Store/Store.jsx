import React from 'react';
import { ProductsDatabase } from '../../ProductsDatabase';

import Menu from '../../components/Menu/Menu';
import ProductList from '../../components/ProductsList/ProductList';

import { 
    StoreContainer,
    Title
 } from './Store.style';


/*const client = (process.env.REACT_APP_SPACE_ID) ? contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
}) : null;*/

class Store extends React.Component{
    state = {
        products: []
    }

    componentDidMount(){
        this.setState({
            products: ProductsDatabase.products
        });
    }

    render(){
        return (
            <div>
                <Menu />
                <Title>Store</Title>
                <StoreContainer>
                    <ProductList products={this.state.products} storePage={true}/>
                </StoreContainer>
            </div>
        )
    }
}

export default Store;