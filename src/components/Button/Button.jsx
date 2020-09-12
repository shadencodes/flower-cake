import React from 'react';

import { ButtonContainer } from './Button.style';

class Button extends React.Component{
    render(){
        return (
            <ButtonContainer {...this.props} >{this.props.children}</ButtonContainer>
        );
    }
}

export default Button;