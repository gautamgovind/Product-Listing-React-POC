import React from 'react';
import { useSelector } from "react-redux";

import Card from '../Card';
import { ProductListContainer } from './index.style';

const ProductListing = () => {
    const products = useSelector(state=>state.productListReducer.products);

    return (
        <ProductListContainer>
            {products.map(product => <Card key={`product-${product.index}`} product={product} /> )}
        </ProductListContainer>
    );
}

export default ProductListing;