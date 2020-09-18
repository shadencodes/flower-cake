import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 350px;
    font-size: 20px;
    align-items: center;
    border-bottom: 1px solid #888888;
    padding: 15px 0;
    align-items: center;
`;

export const Description = styled.div`
    width: 23%;
`;

export const QuantityContainer = styled.div`
    display: flex;
    width: 23%;

    div {
        cursor: pointer;
    }

    span {
        margin: 0 10px;
    }
`;

export const Image = styled.img`
    width: 18%;
    height: 300px;
    margin-right: 150px;
`;

export const Price = styled.div`
    width: 23%;
`;

export const RemoveButton = styled.div`
    padding-left: 12px; 
    cursor: pointer;
`;