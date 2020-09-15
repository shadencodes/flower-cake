import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    padding-right: 20px;
    font-family: "Open Sans";
`;

export const MenuList = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: baseline;
    justify-content: flex-end;

`;

export const MenuItem = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    color: #888888;
`;
