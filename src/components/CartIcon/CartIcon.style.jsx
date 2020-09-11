import styled from 'styled-components';

import { ReactComponent as CartIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIcon = styled(CartIconSVG)`
    width: 20px;
    height: 20px;
`;

export const ItemsCounter = styled.span`
    position: absolute;
    line-height: 11px;
    text-align: center;
    background-color: #8C031C;
    color: white;
    border: 1px solid #8C031C;
    border-radius: 10px;
    width: 13px;
    height: 13px;
    font-size: 10px;
    font-weight: bold;
    bottom: 10px;
    right: 6px;
`;