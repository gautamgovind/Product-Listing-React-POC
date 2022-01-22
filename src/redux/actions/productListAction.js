
import { GET_PRODUCTS, FILTER_PRODUCTS } from "../constants";

// created an action to get products list
export const getProducts = products =>(
    { type: GET_PRODUCTS, products }
)

export const filterProducts = size =>(
    { type: FILTER_PRODUCTS, size }
)