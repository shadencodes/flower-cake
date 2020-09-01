import React from 'react';
import { Link } from "react-router-dom";
import { MenuContainer } from "./Menu.style";

class Menu extends React.Component{
    render(){
        return (
            <MenuContainer>
                <nav>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/">Home</Link></li>      
                    </ul>
                </nav>
            </MenuContainer>
        );
    }
}

export default Menu;

