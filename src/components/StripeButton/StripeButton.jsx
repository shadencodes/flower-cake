import React from 'react';
import StripeCheckout from "react-stripe-checkout";

class StripeButton extends React.Component{

    handleToken(token, address){
        alert("Payment Successful");
    }

    render(){
        return (
            <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_KEY} 
                token={this.handleToken}
                panelLabel="Pay Now"
                name="Flower Cake"
                description={`Your total is ${this.props.price}$`}
                billingAddress
                shippingAddress
                amount={this.props.price * 100} /* convert to cents for the transactions */
            />
        )
    }
}

export default StripeButton;