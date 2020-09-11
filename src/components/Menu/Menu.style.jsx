import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    padding-right: 20px;
`;

export const MenuList = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: baseline;
    justify-content: flex-end;

`;

export const MenuItem = styled(Link)`
    font-family: "Open Sans";
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    color: #888888;
`;

/*
    nav {
        
        padding-right: 50px;
        
    }

    li {
        padding: 14px 50px;
        float: right;
        color: #888888;
        text-align: center;
        list-style-type: none;
        
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: #888888;
    }

    a:hover {
    color: #9e9d9b;
    }
*/