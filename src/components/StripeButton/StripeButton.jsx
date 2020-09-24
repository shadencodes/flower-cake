import React from 'react';
import StripeCheckout from "react-stripe-checkout";

class StripeButton extends React.Component{

    handleToken(token, address){
        alert("Payment Successful");
    }

    render(){
        return (
            <StripeCheckout
                stripeKey='pk_test_51HSiBbJFaxddZnhIfCnMEwmHEGHxl8l44xWuk4LsZ5qcu5hioXv7cdqHje315EBt2ssAkvjlnKylygDwYo392Ehq00fLe3IPZR'
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