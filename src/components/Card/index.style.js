import styled from "styled-components";
import { deviceSizes } from "../../constants";

export const CardsItem = styled.li`
    padding: .5rem;
    width: 100%;
    @media (min-width: ${deviceSizes.tablet}) {
        width: 46%;
      }
    @media (min-width: ${deviceSizes.desktop}) {
          width: 23.8%;
      }
`;

export const CardContainer = styled.div`
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const CardContent = styled.div`
    padding: .5rem;
`;

export const ButtonWrapper = styled.div`
    min-height: 54px;
`;

export const Button = styled.button`
    color: #ffffff;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    height: 45px;
    cursor: pointer;
    border: 1px solid ${props => props.color || 'green'};
    background: ${props => props.color || 'green'};
    &:hover {
        background-color: #272727;
    }
`;

export const Image = styled.img`
    height: auto;
    max-width: 100%;
    vertical-align: middle;
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    align-items: center;
`;

export const ProductName = styled.h2`
    width: 70%;
    font-weight: 600;
    font-size: 22px;
`;

export const ProductPrice = styled.h3`
    width: 30%;
    font-weight: 600;
    font-size: 30px;
    text-align: right;
`;