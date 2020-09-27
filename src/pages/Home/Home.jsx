import React from 'react';
import { withRouter } from "react-router-dom";

import Menu from '../../components/Menu/Menu';
import HomeBubbles from '../../Bubbles/HomeBubbles.png'

import { 
    HomeLayer,
    ImagesContainer,
    HomeContainer,
    Image,
    ShopButton
 } from "./Home.style";


const Home = (props) => (
    <HomeContainer>  
            <Menu />    
            <HomeLayer>         
                <div>
                    <h1>FC</h1>
                    <h2>FLOWER CAKE</h2>
                    <ShopButton className="add-button" inverted onClick={() => {props.history.push("/store") }}>Shop FC</ShopButton>  
                </div>           
                <ImagesContainer>
                    <Image src="https://i.ibb.co/WshVyhy/floral-crown.png" alt="Flower Cake"
                           topOffset="100px" leftOffset="190px" imgWidth="400px" imgHeight="650px" ZIndex="1" />
                    <Image src="https://i.ibb.co/fQrdYjn/golden-marbel.jpg" alt="Flower Cake"
                           topOffset="320px" leftOffset="-100px" imgWidth="400px" imgHeight="500px" ZIndex="2" />
                    <Image src={HomeBubbles} alt="" topOffset="150px" leftOffset="-100px" imgWidth="700px" imgHeight="700px" ZIndex="3"/>         
                </ImagesContainer>                          
            </HomeLayer>
    </HomeContainer>

);

export default withRouter(Home);
