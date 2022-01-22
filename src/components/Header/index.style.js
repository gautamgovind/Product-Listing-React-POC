import styled from "styled-components";
import { deviceSizes } from "../../constants";

export const HeadingWrapper = styled.div`
    display: block;
    padding-bottom: 25px;
    width: 100%;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background: cadetblue;
    @media (min-width: ${deviceSizes.tablet}) {
        display: flex;
        padding: 0 10px;
    }
`;

export const ProductCategoryTitle = styled.h1`
    width: 100%;
    text-align: left;
    @media (min-width: ${deviceSizes.tablet}) {
        width: 50%;
    }
`;

export const FilterWrapper = styled.div`
    width: 100%;
    text-align: right;
    @media (min-width: ${deviceSizes.tablet}) {
        width: 50%;
    }
`;

export const FilterList = styled.select`
    min-width: 155px;
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    @media (min-width: ${deviceSizes.tablet}) {
        width: 300px;
    }
    &::-ms-expand {
        display: none;
    }
`;

export const HeaderContainer = styled.header`
    flex-flow: row;
    display: flex;
    width: 100%;
    height: auto;
    z-index: 4;
    text-align: center;
    padding: 0;
    @media (min-width: ${deviceSizes.tablet}) {
        height: 88px;
    }
`;