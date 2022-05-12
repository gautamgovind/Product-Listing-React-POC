import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterProducts } from '../../redux/actions/productListAction';
import { PAGE_TITLE, DEFAULT_FILTER } from '../../constants';
import { HeaderContainer, HeadingWrapper, ProductCategoryTitle, FilterWrapper, FilterList } from './index.style';
import useLocalStorage from '../customHook/useLocalStorage';
import useLogger from '../customHook/useLogger';
import useColor from '../customHook/useColor';


const Header= ()=> {
    const sizes = useSelector(state=>state.productListReducer.sizes);
    const dispatch = useDispatch();
    const filterProductBySize = e=>{
        dispatch(filterProducts(e.target.value));
    }

    //custom hook used to get local storage data and set and to console log the search item
    const [search, setSearch] = useLocalStorage('search','');
    useLogger(search);
    const [color, changeColor] = useColor();

  return (
    <HeaderContainer>
        <HeadingWrapper>
            <ProductCategoryTitle style={{color: '#'+color}}>{PAGE_TITLE}</ProductCategoryTitle>
            <input 
                style={{height: 40, border: '1px solid #2a2a2a', padding: '5 20'}}
                placeholder='Serach'
                type="text"
                value={search}
                onChange={e=>{setSearch(e.target.value);}}
            />
            <button onClick={changeColor} 
                style={{height: 44, border: '1px solid #2a2a2a', padding: '5 20', background: '#FFF', color: '#'+color}}
            >
                    Change Color
            </button>
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