import React from 'react';
import Product from '../Product/Product'

import { 
    ProductListContainer
} from './ProductList.style';


class ProductList extends React.Component{
    render(){
        return (
            <ProductListContainer>
               { this.props.products.map( (product, index) =>  <Product key={index} product={product} storePage={this.props.storePage}/> ) }
            </ProductListContainer>
        );
    }
}

export default ProductList;