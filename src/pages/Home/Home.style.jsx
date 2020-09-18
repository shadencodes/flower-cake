import styled from "styled-components";

const fontColor = '#8C031C';


export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const HomeLayer = styled.div`
    display: flex;
    z-index: 1;

    img{
        width: 45%;
    }
    div {
        flex-grow: 2;   
        flex-direction: coloumn;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-style: normal;

        div {
            h1 {
                font-size: 350px;
                font-weight: 400;
                margin-top: 20%;
                margin-bottom: 0px;
                color: ${fontColor};
            }       
            h2 {
                font-size: 60px;
                margin-top: 0px;
                color: ${fontColor};
            }
        }
    }
`;

export const BubblesLayer = styled.div`   
    width: 98%;
    z-index: 2;
    position: absolute;      
    top: 0px;
    left: 40px;
`;