import styled from 'styled-components';

import Button from '../Button/Button';

export const CartContainer = styled.div`
    position: absolute;
    width: 340px;
    height: 540px;
    top: 70px;
    right: 30px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    flex-direction: column;
    z-index: 5;
    padding: 20px;
`;

export const CartItemsContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const EmptyMessageContainer = styled.div`
    font-size: 18px;
    margin: 50px auto;
`;

export const CheckOutButton = styled(Button)`
    margin-top: auto;
`;
