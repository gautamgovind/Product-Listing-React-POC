import React from "react";
import PropTypes from 'prop-types';

import { SALE_BUTTON, EXCLUSIVE_BUTTON } from '../../constants';
import { CardsItem, CardContainer, CardContent, ButtonWrapper, Button, Image, ProductInfo, ProductName, ProductPrice } from './index.style';

//Card Prototype
const Card = ({ product })=>{
    const { index, isExclusive, isSale, price, productImage, productName } = product;
    return(               
        <CardsItem key={index}>
            <CardContainer>
                {productImage && <Image src={ require(`../../assets/images/${productImage}`).default} alt={`${productName}-image`} /> }
                <CardContent>
                    <ButtonWrapper>
                        {isSale && <Button color="red">{SALE_BUTTON}</Button>}
                        {isExclusive && <Button>{EXCLUSIVE_BUTTON}</Button>}
                    </ButtonWrapper>
                    <ProductInfo>
                        <ProductName>
                            {productName}
                        </ProductName>
                        <ProductPrice>
                            {price}
                        </ProductPrice> 
                    </ProductInfo>              
                </CardContent>
            </CardContainer>
        </CardsItem>      
    )
}

Card.propTypes = {
    product: PropTypes.shape({
        index: PropTypes.number,
        isExclusive: PropTypes.bool,
        isSale: PropTypes.bool,
        price: PropTypes.string,
        productImage: PropTypes.string,
        size: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
};

export default Card;