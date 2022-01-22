
import { GET_PRODUCTS, FILTER_PRODUCTS } from "../constants";

const initialState = {
    products: [],
    sizes: [],
};

let initialData = [];

const computeAvailableSizes = data => {
    let allAvailableSizes = [];
    //extracting all the sizes from products
    data && data.map(product=>{
        const { size } = product;
        size.length && size.map(item=>(
            allAvailableSizes = [...allAvailableSizes, item]
        ));
    })
    // get unique sizes for filter options
    return [...new Set(allAvailableSizes)];
}

const filteredProducts = size => {
    if(!size) return initialData;
    return initialData.filter(product => product.size.includes(size));
}

export const productListReducer = (state = initialState, action = {} )=>{
    switch (action.type) {
        case GET_PRODUCTS: {
            const { products } = action;
            initialData = products;
            return { ...state, products: products, sizes: computeAvailableSizes(products) }; 
        } 
        case FILTER_PRODUCTS: {
            const { size } = action;
            return { ...state, products: filteredProducts(size) };
        }
        default:
            return state;
    }
}