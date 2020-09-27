import styled from "styled-components";
import Button from '../../components/Button/Button';

const fontColor = '#8C031C';

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const HomeLayer = styled.div`
    display: flex;
    z-index: 1;

    div {
        flex-grow: 1;   
        flex-direction: coloumn;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-style: normal;
        
        h1 {
            font-size: 300px;
            font-weight: 400;
            margin-top: 10%;
            margin-bottom: 0px;
            color: ${fontColor};
        }       
        h2 {
            font-size: 60px;
            margin-top: 0px;
            color: ${fontColor};
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ImagesContainer = styled.div`   
    position: relative;
`;

export const Image = styled.img`
    position: absolute;
    top: ${props => props.topOffset || "100px"};
    left: ${props => props.leftOffset || "100px"};
    width: ${props => props.imgWidth || "100px"};
    height: ${props => props.imgHeight || "100px"};
    z-index: ${props => props.ZIndex || "1"};
`;

export const ShopButton = styled(Button)`
    width: 40%;
    height: 70px;
    margin-top: 20px;
`;