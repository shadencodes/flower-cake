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

    @media(max-width: 800px) {
        font-size: 18px;
    }
`;

export const Description = styled.div`
    width: 23%;

    @media (max-width: 800px) {
        width: 22%;
    }
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

    @media (max-width: 800px) {
        width: 25%;
        margin-right: 10px;
    }
`;

export const Price = styled.div`
    width: 23%;
`;

export const RemoveButton = styled.div`
    padding-left: 12px; 
    cursor: pointer;
`;