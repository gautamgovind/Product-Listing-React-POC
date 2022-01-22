import React,  { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import ProductListings from './components/ProductListing';
import { getProducts } from './redux/actions/productListAction';

export default function App() {
  const dispatch = useDispatch();

  // Make api call to get products list
  const fetchProductList = ()=>{
      fetch("https://rainy-star.surge.sh/products.json")
          .then(response=>response.json())
          .then(data=> {
            dispatch(getProducts(data));
          }). catch(err=>alert("Page found an error", err));
  }

  useEffect(()=>{
      fetchProductList();
  },[]);

  return(
    <div>
      <Header />
      <ProductListings />
    </div>
  )
}
