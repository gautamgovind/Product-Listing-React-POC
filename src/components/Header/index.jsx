import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterProducts } from '../../redux/actions/productListAction';
import { PAGE_TITLE, DEFAULT_FILTER } from '../../constants';
import { HeaderContainer, HeadingWrapper, ProductCategoryTitle, FilterWrapper, FilterList } from './index.style';

const Header= ()=> {
    const sizes = useSelector(state=>state.productListReducer.sizes);
    const dispatch = useDispatch();
    const filterProductBySize = e=>{
        dispatch(filterProducts(e.target.value));
    }
  return (
    <HeaderContainer>
        <HeadingWrapper>
            <ProductCategoryTitle>{PAGE_TITLE}</ProductCategoryTitle>
            <FilterWrapper>
                <FilterList onChange={filterProductBySize}>
                    <option value="">{DEFAULT_FILTER}</option>
                    {sizes.length && sizes.map((size,index)=>(
                        <option value={size} key={index}>{size}</option>
                    ))}                                       
                </FilterList>
            </FilterWrapper>
        </HeadingWrapper>
    </HeaderContainer>
  );
}

export default Header;