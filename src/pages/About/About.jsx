import React from 'react';
import CakeImage1 from '../../CakeImages/About1.png'
import CakeImage2 from '../../CakeImages/About2.png'
import AboutBubbles from '../../Bubbles/AboutBubbles.png'

import { 
    AboutContainer,
    TextContainer,
    ImagesContainer,
    Image
 } from './About.style'

const About = () => (
    <AboutContainer>
        <TextContainer>
            <h1>About Us</h1>
            <h2>FLOWER CAKE</h2>
            <div>
                Established in 2012 by cake designer Jenny Smith, we have become a widely<br />
                recognised, award winning cake company specialising in creating beautiful,<br />
                elegant and stylish wedding cakes, cupcakes and cookies.<br /><br />
                Having baked cakes and cookies for friends and family from a young age,<br />
                Jenny soon found that baking and designing cakes was her passion in life.<br />
                In 2014 Jenny's husband joined the business and has become head baker<br />
                allowing the business to provide a personal service from the kitchen<br />
                of their family home. <br /><br />
                Our goal is to work collaboratively with our clients in designing what<br />
                is to be the center point of the biggest day of their lives. Using only<br />
                the freshest and highest quality ingredients to ensure your cake tastes<br />
                as delicious as it looks. We hope you feel inspired by our cake designs<br />
                and we look forward to working with you to create the cake of your dreams.<br />
            </div>
        </TextContainer>
        <ImagesContainer>
            <Image src={CakeImage1} topOffset="300px" leftOffset="300px" imgWidth="400px" imgHeight="500px" ZIndex="1"></Image>
            <Image src={CakeImage2} topOffset="350px" leftOffset="60px" imgWidth="300px" imgHeight="400px" ZIndex="2"></Image>
            <Image src={AboutBubbles} topOffset="220px" leftOffset="0px" imgWidth="600px" imgHeight="600px" ZIndex="3"></Image>
        </ImagesContainer>
    </AboutContainer>
);

export default About;