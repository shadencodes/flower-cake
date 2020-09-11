import styled from 'styled-components';

import { ReactComponent as HeartIconSVG } from '../../assets/heart.svg';

export const HeartContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Heart = styled(HeartIconSVG)`
    width: 20px;
    height: 20px;
`;

export const FavoritesCounter = styled.span`
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