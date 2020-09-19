import React from 'react';
import Menu from '../../components/Menu/Menu';
import HomeBubbles from '../../Bubbles/HomeBubbles.png'

import { 
    HomeLayer,
    BubblesLayer,
    HomeContainer
 } from "./Home.style";


const Home = () => (
    <HomeContainer>      
            <HomeLayer>
                <img src="https://i.pinimg.com/564x/8f/a1/c0/8fa1c057eb4f60ea3a1ed3a4f6e6e24d.jpg" alt="Flower Cake"></img>             
                <div>             
                    <div>
                        <h1>FC</h1>
                        <h2>FLOWER CAKE</h2>
                    </div>
                </div>
            </HomeLayer>
            <BubblesLayer>
                <Menu />
                <img src={HomeBubbles} alt=""></img>          
            </BubblesLayer>
    </HomeContainer>

);

export default Home;
