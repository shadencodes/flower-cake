import styled from "styled-components";


export const AboutContainer = styled.div`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const TextContainer = styled.div`
    padding: 0px 50px;

    h1 {
        margin 0px;
        font-size: 200px;
        color: white;
    }

    h2 {
        font-size: 50px;
        color: #8C031C;
        font-weight: 10;
    }

    div {
        font-family: "Open Sans";
        color: #888888;
        font-size: 20px;
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
